// Auth state is handled entirely by Firebase below — no localStorage bounce here
// (localStorage bounce caused a redirect loop when Firebase hadn't loaded yet)

// DOM Elements
const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const noResults = document.getElementById('noResults');
const resultsTitle = document.getElementById('resultsTitle');

// Security Utility: Sanitize user input to prevent XSS attacks
window.sanitizeHTML = function(str) {
    if (!str) return '';
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
};

let currentRenderIndex = 0;
const RENDER_CHUNK_SIZE = 30;
let currentGamesList = [];
let scrollObserver = null;

function renderGames(gamesToRender, append = false) {
    if (!append) {
        gamesGrid.innerHTML = '';
        currentGamesList = gamesToRender;
        currentRenderIndex = 0;
        
        // Remove old observer
        if (scrollObserver) {
            scrollObserver.disconnect();
        }
    }

    if (currentGamesList.length === 0) {
        gamesGrid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }

    gamesGrid.classList.remove('hidden');
    noResults.classList.add('hidden');

    // Get the next chunk
    const nextChunk = currentGamesList.slice(currentRenderIndex, currentRenderIndex + RENDER_CHUNK_SIZE);
    
    // Create a temporary container to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = nextChunk.map(game => createGameCard(game)).join('');
    
    // Append children
    while (tempDiv.firstChild) {
        gamesGrid.appendChild(tempDiv.firstChild);
    }

    currentRenderIndex += RENDER_CHUNK_SIZE;

    // Set up observer on the last element of this chunk if there are more games
    if (currentRenderIndex < currentGamesList.length) {
        setupScrollObserver();
    }
}

function setupScrollObserver() {
    // Disconnect old observer to prevent memory leak
    if (scrollObserver) {
        scrollObserver.disconnect();
    }

    const cards = gamesGrid.querySelectorAll('.game-card-wrapper');
    const lastCard = cards[cards.length - 1];

    if (!lastCard) return;

    scrollObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            scrollObserver.unobserve(lastCard);
            renderGames(currentGamesList, true);
        }
    }, {
        root: document.querySelector('.main-content-area'),
        rootMargin: '100px'
    });

    scrollObserver.observe(lastCard);
}

// Debounce utility to optimize search performance
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Handle Search
function handleSearch(e) {
    const searchTerm = window.sanitizeHTML(e.target.value).toLowerCase().trim();
    const dropdown = document.getElementById('searchDropdown');

    // Toggle clear button
    if (searchTerm.length > 0) {
        clearSearchBtn.classList.remove('hidden');
    } else {
        clearSearchBtn.classList.add('hidden');
    }

    // Filter games
    const filteredGames = games.filter(game => {
        return game.title.toLowerCase().includes(searchTerm) ||
            game.genres.some(g => g.toLowerCase().includes(searchTerm)) ||
            game.platforms.some(p => p.toLowerCase().includes(searchTerm));
    });

    if (searchTerm.length > 0) {
        // Show dropdown
        dropdown.classList.remove('hidden');
        dropdown.innerHTML = '';
        
        const topResults = filteredGames.slice(0, 6);
        
        if (topResults.length === 0) {
            dropdown.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-secondary);">No matches found</div>';
        } else {
            dropdown.innerHTML = topResults.map(game => {
                const imageUrl = getGameImageUrl(game, true);
                return `
                    <a href="#" onclick="openGameModal(${game.id}); return false;" class="search-item">
                        <img src="${imageUrl}" onerror="handleImageError(this, '${game.image}')" alt="${game.title}">
                        <div class="search-item-info">
                            <div class="search-item-title">${game.title}</div>
                            <div class="search-item-meta">
                                <span>${game.releaseYear}</span> &bull; 
                                <span>${game.genres.slice(0,2).join(', ')}</span>
                            </div>
                        </div>
                    </a>
                `;
            }).join('');
        }
    } else {
        dropdown.classList.add('hidden');
    }
}

// Handle Enter key for full grid search
function handleSearchEnter(e) {
    if (e.key === 'Enter') {
        const searchTerm = window.sanitizeHTML(e.target.value).toLowerCase().trim();
        const dropdown = document.getElementById('searchDropdown');
        
        dropdown.classList.add('hidden'); // Hide dropdown on Enter
        
        applyFilters();
        
        e.target.blur(); // Remove focus to close mobile keyboards
    }
}

// Global click to close dropdown
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        document.getElementById('searchDropdown').classList.add('hidden');
    }
});

// Clear Search
function clearSearch() {
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    document.getElementById('searchDropdown').classList.add('hidden');
    searchInput.focus();
}

// Reset Dashboard
function resetDashboard() {
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    document.getElementById('searchDropdown').classList.add('hidden');
    resultsTitle.textContent = "Trending Now";
    if (typeof showSection === 'function') {
        showSection('games');
    }
    renderGames(games);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners
const debouncedSearch = debounce(handleSearch, 150);
searchInput.addEventListener('input', debouncedSearch);
searchInput.addEventListener('keydown', handleSearchEnter); // New enter listener
searchInput.addEventListener('focus', handleSearch); // Re-open on focus
clearSearchBtn.addEventListener('click', clearSearch);

// Initial Auth Check & Render
document.addEventListener('DOMContentLoaded', () => {
    // Firebase is the single source of truth for auth.
    // onAuthStateChanged only fires ONCE Firebase has fully resolved the session.
    // We do NOT redirect until Firebase confirms the state.
    let authResolved = false;

    auth.onAuthStateChanged(user => {
        // Ignore any subsequent calls after the first resolution
        if (authResolved) return;
        authResolved = true;

        const userEmail = user?.email?.toLowerCase();
        const allowedEmails = ALLOWED_EMAILS.map(e => e.toLowerCase());

        if (user && allowedEmails.includes(userEmail)) {
            // Valid user — persist login flag and show the app
            localStorage.setItem('hasLoggedInBefore', 'true');
            document.getElementById('secureApp').style.display = 'flex';
            renderGames(games);
        } else {
            // Firebase confirmed: no valid session — go to login
            localStorage.removeItem('hasLoggedInBefore');
            window.location.replace('/login');
        }
    });
});

// Logout Functionality
function logout() {
    auth.signOut().then(() => {
        window.location.replace('/login');
    });
}

// --- Sidebar & Filtering Logic ---
let selectedGenres = new Set();

function initSidebar() {
    const sidebarToggleBtn = document.getElementById('sidebarToggle');
    const mainSidebar = document.getElementById('mainSidebar');

    if (sidebarToggleBtn && mainSidebar) {
        sidebarToggleBtn.addEventListener('click', () => {
            mainSidebar.classList.toggle('collapsed');
        });
    }

    // Extract unique genres
    const genres = new Set();
    
    if (typeof games !== 'undefined') {
        games.forEach(game => {
            if(game.genres) game.genres.forEach(g => genres.add(g));
        });
    }
    
    const sortedGenres = Array.from(genres).sort();
    
    const genreContainer = document.getElementById('genreFilters');
    
    function getStringHue(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return Math.abs(hash % 360);
    }

    if (genreContainer) {
        genreContainer.innerHTML = sortedGenres.map(g => `
            <div class="filter-item genre-item" data-value="${g}">
                <div class="tag-dot" style="background: hsl(${getStringHue(g)}, 70%, 60%)"></div>
                <span>${g}</span>
            </div>
        `).join('');
    }
    
    // Add event listeners
    document.querySelectorAll('.genre-item').forEach(item => {
        item.addEventListener('click', () => {
            const val = item.getAttribute('data-value');
            if (selectedGenres.has(val)) {
                selectedGenres.delete(val);
                item.classList.remove('selected');
            } else {
                selectedGenres.add(val);
                item.classList.add('selected');
            }
            applyFilters();
        });
    });
}

function applyFilters() {
    const searchTerm = searchInput ? window.sanitizeHTML(searchInput.value).toLowerCase().trim() : '';
    
    const filteredGames = games.filter(game => {
        // Text Search
        const matchesSearch = searchTerm === '' || 
            game.title.toLowerCase().includes(searchTerm) ||
            game.genres.some(g => g.toLowerCase().includes(searchTerm));
            
        // Genre Filter
        const matchesGenre = selectedGenres.size === 0 || 
            game.genres.some(g => selectedGenres.has(g));
            
        return matchesSearch && matchesGenre;
    });
    
    renderGames(filteredGames);
    
    // Update title
    let titleText = "Trending Now";
    if (searchTerm.length > 0) titleText = `Search Results for "${searchTerm}"`;
    else if (selectedGenres.size > 0) titleText = `Filtered Results`;
    
    if(resultsTitle) resultsTitle.textContent = titleText;
}

// Call initSidebar when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();

    // --- Info Modal Logic ---
    const howToDownloadLink = document.getElementById('howToDownloadLink');
    const infoModalOverlay = document.getElementById('infoModalOverlay');
    const closeInfoModal = document.getElementById('closeInfoModal');

    if (howToDownloadLink && infoModalOverlay && closeInfoModal) {
        howToDownloadLink.addEventListener('click', (e) => {
            e.preventDefault();
            infoModalOverlay.classList.remove('hidden');
        });

        closeInfoModal.addEventListener('click', () => {
            infoModalOverlay.classList.add('hidden');
        });

        // Close when clicking outside modal
        infoModalOverlay.addEventListener('click', (e) => {
            if (e.target === infoModalOverlay) {
                infoModalOverlay.classList.add('hidden');
            }
        });
    }

    // --- About Us Modal Logic ---
    const aboutUsLink = document.getElementById('aboutUsLink');
    const aboutModalOverlay = document.getElementById('aboutModalOverlay');
    const closeAboutModal = document.getElementById('closeAboutModal');

    if (aboutUsLink && aboutModalOverlay && closeAboutModal) {
        aboutUsLink.addEventListener('click', (e) => {
            e.preventDefault();
            aboutModalOverlay.classList.remove('hidden');
        });

        closeAboutModal.addEventListener('click', () => {
            aboutModalOverlay.classList.add('hidden');
        });

        // Close when clicking outside modal
        aboutModalOverlay.addEventListener('click', (e) => {
            if (e.target === aboutModalOverlay) {
                aboutModalOverlay.classList.add('hidden');
            }
        });
    }

    // --- Navigation & Music Downloader Controller Logic ---
    const navGames = document.getElementById('navGames');
    const navMusic = document.getElementById('navMusic');
    const musicSection = document.getElementById('musicDownloaderSection');
    const heroBanner = document.querySelector('.hero-banner');
    const resultsSection = document.querySelector('.results-section');

    window.showSection = function(section) {
        if (!navGames || !navMusic || !musicSection || !heroBanner || !resultsSection) return;
        
        if (section === 'games') {
            navGames.classList.add('active');
            navMusic.classList.remove('active');
            musicSection.classList.add('hidden');
            heroBanner.classList.remove('hidden');
            resultsSection.classList.remove('hidden');
        } else if (section === 'music') {
            navGames.classList.remove('active');
            navMusic.classList.add('active');
            musicSection.classList.remove('hidden');
            heroBanner.classList.add('hidden');
            resultsSection.classList.add('hidden');
        }
    };

    if (navGames) {
        navGames.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('games');
        });
    }

    if (navMusic) {
        navMusic.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('music');
        });
    }

    // --- YouTube Fetch / Download API Logic ---
    const ytUrlInput = document.getElementById('ytUrlInput');
    const ytFetchBtn = document.getElementById('ytFetchBtn');
    const ytVideoInfo = document.getElementById('ytVideoInfo');
    const ytThumbnail = document.getElementById('ytThumbnail');
    const ytTitle = document.getElementById('ytTitle');
    const ytUploader = document.getElementById('ytUploader');
    const ytDuration = document.getElementById('ytDuration');
    const ytDownloadBtn = document.getElementById('ytDownloadBtn');
    const downloadStatus = document.getElementById('downloadStatus');
    const statusText = document.getElementById('statusText');

    const BACKEND_URL = 'http://localhost:5000';

    function formatDuration(seconds) {
        if (!seconds) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    if (ytFetchBtn && ytUrlInput) {
        ytFetchBtn.addEventListener('click', async () => {
            const url = ytUrlInput.value.trim();
            if (!url) {
                alert('Please paste a YouTube link first.');
                return;
            }

            ytFetchBtn.disabled = true;
            ytFetchBtn.textContent = 'Fetching...';
            ytVideoInfo.classList.add('hidden');
            ytDownloadBtn.disabled = true;

            try {
                const res = await fetch(`${BACKEND_URL}/api/info?url=${encodeURIComponent(url)}`);
                const data = await res.json();
                
                if (data.error) {
                    alert(`Error: ${data.error}`);
                } else {
                    ytThumbnail.src = data.thumbnail || 'https://images.unsplash.com/photo-1614680376593-902f74fa0d41?auto=format&fit=crop&w=400&q=80';
                    ytTitle.textContent = data.title;
                    ytUploader.textContent = `Uploader: ${data.uploader || 'Unknown'}`;
                    ytDuration.textContent = `Duration: ${formatDuration(data.duration)}`;
                    ytVideoInfo.classList.remove('hidden');
                    ytDownloadBtn.disabled = false;
                }
            } catch (err) {
                console.error(err);
                alert('Failed to connect to local downloader server. Please ensure you have run "python server.py" on your machine.');
            } finally {
                ytFetchBtn.disabled = false;
                ytFetchBtn.textContent = 'Fetch Info';
            }
        });
    }

    if (ytDownloadBtn) {
        ytDownloadBtn.addEventListener('click', async () => {
            const url = ytUrlInput.value.trim();
            const format = document.querySelector('input[name="downloadFormat"]:checked')?.value || 'mp3';

            if (!url) return;

            ytDownloadBtn.disabled = true;
            downloadStatus.classList.remove('hidden');
            statusText.textContent = `Processing YouTube video... this may take a moment.`;

            try {
                statusText.textContent = `Downloading ${format.toUpperCase()} from YouTube (this might take a while for large videos)...`;
                const response = await fetch(`${BACKEND_URL}/api/download`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ url, format })
                });

                if (!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.error || 'Failed to download.');
                }

                statusText.textContent = `Receiving file in browser...`;

                // Stream the file back to the browser to trigger a download
                const blob = await response.blob();
                const downloadUrl = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = downloadUrl;
                
                // Extract filename from response headers if possible, or build one
                const contentDisposition = response.headers.get('Content-Disposition');
                let filename = `download.${format}`;
                if (contentDisposition) {
                    const match = contentDisposition.match(/filename="?([^"]+)"?/);
                    if (match && match[1]) filename = match[1];
                } else {
                    filename = `${ytTitle.textContent.replace(/[^\w\s-]/g, '') || 'audio'}.${format}`;
                }

                a.download = filename;
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(downloadUrl);

                statusText.textContent = `Successfully downloaded!`;
                setTimeout(() => {
                    downloadStatus.classList.add('hidden');
                }, 3000);
            } catch (err) {
                console.error(err);
                alert(`Download Error: ${err.message}`);
                downloadStatus.classList.add('hidden');
            } finally {
                ytDownloadBtn.disabled = false;
            }
        });
    }
});