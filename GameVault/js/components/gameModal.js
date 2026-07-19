// Game Modal Logic

const modalOverlay = document.getElementById('gameModalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalGenres = document.getElementById('modalGenres');
const modalDescription = document.getElementById('modalDescription');
const modalSysReqs = document.getElementById('modalSysReqs');
const modalPlatforms = document.getElementById('modalPlatforms');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');

// Helper for link verification safety net
function extractFilenameFromUrl(url) {
    try {
        const decodedUrl = decodeURIComponent(url);
        const cleanUrl = decodedUrl.replace(/\/+$/, '');
        const parts = cleanUrl.split('/');
        
        if (parts[parts.length - 1] === 'file') {
            return parts[parts.length - 2] || '';
        }
        return parts[parts.length - 1] || '';
    } catch (e) {
        return '';
    }
}

function verifyLinkSafety(gameTitle, url) {
    const filename = extractFilenameFromUrl(url).toLowerCase();
    if (!filename) return true;
    
    const generics = ['download', 'get', 'file', 'index', 'show'];
    if (generics.includes(filename) || filename.length < 3) return true;
    
    const cleanTitle = gameTitle.toLowerCase().replace(/[^\w\s]/g, ' ');
    const cleanFile = filename.replace(/[^\w\s]/g, ' ');
    
    const titleWords = cleanTitle.split(/\s+/).filter(w => w.length > 2);
    const fileWords = cleanFile.split(/\s+/).filter(w => w.length > 2);
    
    const stopwords = ['the', 'and', 'for', 'game', 'season', 'edition', 'definitive', 'part', 'setup', 'pc', 'repack', 'download', 'free', 'zip', 'rar', 'iso', 'exe'];
    
    const significantTitleWords = titleWords.filter(w => !stopwords.includes(w));
    const significantFileWords = fileWords.filter(w => !stopwords.includes(w));
    
    if (significantTitleWords.length === 0) return true;
    
    const hasOverlap = significantTitleWords.some(word => 
        significantFileWords.some(fileWord => fileWord.includes(word) || word.includes(fileWord))
    );
    
    return hasOverlap;
}

// Download Interceptor Logic
modalDownloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = modalDownloadBtn.href;
    if (!url || url === '#' || url.endsWith('#')) return;

    // Safety net check
    const title = modalTitle.textContent;
    const isSafe = verifyLinkSafety(title, url);
    if (!isSafe) {
        const filename = extractFilenameFromUrl(url);
        const proceed = confirm(`⚠️ SECURITY WARNING: Game Title Mismatch!\n\nYou are downloading "${title}", but the link points to a file named "${filename}". This could be the wrong game or an outdated redirect.\n\nDo you still want to proceed?`);
        if (!proceed) return;
    }

    // Save original state
    const originalContent = modalDownloadBtn.innerHTML;
    
    // Show loading state
    modalDownloadBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg> Connecting to Secure Vault...`;
    modalDownloadBtn.style.pointerEvents = 'none';
    modalDownloadBtn.style.opacity = '0.8';

    // Fake a secure connection delay
    setTimeout(() => {
        // Open popup portal for MediaFire/Downloads
        const width = 1000;
        const height = 750;
        const left = (screen.width / 2) - (width / 2);
        const top = (screen.height / 2) - (height / 2);
        window.open(url, 'Secure Download Portal', `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=yes`);
        
        // Restore button state immediately after opening
        modalDownloadBtn.innerHTML = originalContent;
        modalDownloadBtn.style.pointerEvents = 'auto';
        modalDownloadBtn.style.opacity = '1';
    }, 1200); // 1.2s delay for premium feel
});

// HW Checker Elements
const checkHwBtn = document.getElementById('checkHwBtn');
const hwResult = document.getElementById('hwResult');
const hwCpu = document.getElementById('hwCpu');
const hwRam = document.getElementById('hwRam');
const hwGpu = document.getElementById('hwGpu');

let currentGameYear = 2000; // Store for HW checker

// Helper to generate a realistic sounding description based on game data
function generateDescription(game) {
    const primaryGenre = game.genres[0] || 'Action';
    return `Get ready for an unforgettable ${primaryGenre.toLowerCase()} experience. <strong>${game.title}</strong> brings cutting-edge graphics, immersive storytelling, and thrilling gameplay to your fingertips. This masterpiece has captivated players worldwide. Step into a meticulously crafted world where every decision matters and adventure awaits at every turn.`;
}

// Helper to generate realistic system requirements
function generateSysReqs(game) {
    let min, rec;
    
    if (game.releaseYear >= 2020) {
        min = { os: "Windows 10 64-bit", cpu: "Intel Core i5-8400 / AMD Ryzen 3 3300X", ram: "8 GB RAM", gpu: "NVIDIA GTX 1060 / AMD RX 580", storage: "80 GB available space" };
        rec = { os: "Windows 10/11 64-bit", cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600", ram: "16 GB RAM", gpu: "NVIDIA RTX 2070 / AMD RX 5700 XT", storage: "80 GB available space (SSD)" };
    } else if (game.releaseYear >= 2015) {
        min = { os: "Windows 7/8/10 64-bit", cpu: "Intel Core i3-4160 / AMD FX-6300", ram: "4 GB RAM", gpu: "NVIDIA GTX 660 / AMD HD 7850", storage: "50 GB available space" };
        rec = { os: "Windows 10 64-bit", cpu: "Intel Core i5-4460 / AMD FX-8320", ram: "8 GB RAM", gpu: "NVIDIA GTX 970 / AMD R9 290", storage: "50 GB available space" };
    } else {
        min = { os: "Windows 7 64-bit", cpu: "Intel Core 2 Duo / AMD Athlon 64 X2", ram: "2 GB RAM", gpu: "NVIDIA 8800 GT / AMD HD 3870", storage: "20 GB available space" };
        rec = { os: "Windows 7/8/10 64-bit", cpu: "Intel Core i3 / AMD Phenom II X4", ram: "4 GB RAM", gpu: "NVIDIA GTX 660 / AMD HD 7850", storage: "20 GB available space" };
    }

    return `
        <div class="sysreqs-container">
            <div class="sysreqs-col">
                <strong>MINIMUM:</strong><br>
                <span class="req-label">OS:</span> ${min.os}<br>
                <span class="req-label">Processor:</span> ${min.cpu}<br>
                <span class="req-label">Memory:</span> ${min.ram}<br>
                <span class="req-label">Graphics:</span> ${min.gpu}<br>
                <span class="req-label">Storage:</span> ${min.storage}
            </div>
            <div class="sysreqs-col">
                <strong>RECOMMENDED:</strong><br>
                <span class="req-label">OS:</span> ${rec.os}<br>
                <span class="req-label">Processor:</span> ${rec.cpu}<br>
                <span class="req-label">Memory:</span> ${rec.ram}<br>
                <span class="req-label">Graphics:</span> ${rec.gpu}<br>
                <span class="req-label">Storage:</span> ${rec.storage}
            </div>
        </div>
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem; color: var(--text-secondary);">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            <strong>Potato PC Friendly:</strong> This game can run without a dedicated graphics card, provided your CPU has integrated graphics (like Intel UHD or AMD Radeon Graphics) on lowered settings.
        </div>
    `;
}

window.openGameModal = function(gameId) {
    // Find game
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    // Populate data
    modalImage.src = getGameImageUrl(game, false);
    modalImage.onerror = function() {
        handleImageError(this, game.image);
    };
    
    modalTitle.textContent = game.title;
    modalYear.textContent = game.releaseYear;
    
    // Populate Genres
    modalGenres.innerHTML = game.genres.map(g => `<span class="platform-tag">${g}</span>`).join('');
    
    // Populate Platforms
    modalPlatforms.innerHTML = game.platforms.map(p => `<span class="platform-tag" style="background: rgba(255,255,255,0.2); border-color: transparent;">${p}</span>`).join('');
    
    // Dynamic Content
    modalDescription.innerHTML = generateDescription(game);
    modalSysReqs.innerHTML = generateSysReqs(game);
    
    // Download link (using the # or external link)
    modalDownloadBtn.href = game.link;
    
    // Store release year for HW checker and reset result
    currentGameYear = game.releaseYear;
    hwResult.classList.add('hidden');
    hwResult.className = 'hw-result hidden';
    
    // Show Modal
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event Listeners for closing
closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    // Close if clicking the overlay background (outside the modal content)
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
        closeModal();
    }
});

// Hardware Checker Logic
checkHwBtn.addEventListener('click', () => {
    const rawCpu = hwCpu.value.trim();
    const rawRam = hwRam.value.trim();
    const rawGpu = hwGpu.value.trim();

    if (!rawCpu && !rawRam && !rawGpu) {
        hwResult.classList.remove('hidden', 'optimal', 'minimum', 'incompatible');
        hwResult.classList.add('incompatible');
        hwResult.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> Error: Please input your PC specifications.`;
        return;
    }

    // Sanitize user inputs to prevent any potential XSS attacks before processing
    const cpuStr = window.sanitizeHTML ? window.sanitizeHTML(rawCpu).toLowerCase() : rawCpu.toLowerCase();
    const ramStr = window.sanitizeHTML ? window.sanitizeHTML(rawRam).toLowerCase() : rawRam.toLowerCase();
    const gpuStr = window.sanitizeHTML ? window.sanitizeHTML(rawGpu).toLowerCase() : rawGpu.toLowerCase();
    
    // Heuristic parsing
    let cpu = 0;
    if (cpuStr.match(/i9|ryzen 9|threadripper|i7.*1[0-9]{4}|ryzen 7.*[579][0-9]{3}/)) cpu = 3;
    else if (cpuStr.match(/i7|ryzen 7|i5.*1[0-9]{4}|ryzen 5.*[579][0-9]{3}/)) cpu = 2;
    else if (cpuStr.match(/i5|ryzen 5|i3.*1[0-9]{4}/)) cpu = 1;
    else cpu = 0;
    
    let ram = 4;
    const ramMatch = ramStr.match(/(\d+)\s*(gb|g)/);
    if (ramMatch) ram = parseInt(ramMatch[1]);
    
    const ddr = document.getElementById('hwDdr');
    const ddrValue = ddr ? parseInt(ddr.value) : 4;
    
    let gpu = 0;
    if (gpuStr.match(/none|integrated|uhd|iris|vega|hd graphics/)) gpu = 0;
    else if (gpuStr.match(/rtx.*(308|309|40[789]|4060|4070)|rx.*(68|69|7[789])/)) gpu = 3;
    else if (gpuStr.match(/rtx|rx.*(66|67|5700)|gtx.*1080/)) gpu = 2;
    else if (gpuStr.match(/gtx|rx.*(5[78]0|560)|arc/)) gpu = 1;
    else if (gpuStr.length > 2) gpu = 1; // Benefit of doubt if they typed something else
    
    let requiredCpu, requiredRam, requiredGpu, requiredDdr;
    
    if (currentGameYear >= 2020) {
        requiredCpu = 2; requiredRam = 8; requiredGpu = 2; requiredDdr = 4;
    } else if (currentGameYear >= 2015) {
        requiredCpu = 1; requiredRam = 8; requiredGpu = 1; requiredDdr = 3;
    } else {
        requiredCpu = 0; requiredRam = 2; requiredGpu = 0; requiredDdr = 2;
    }
    
    let score = 0;
    if (cpu >= requiredCpu) score++;
    if (ram >= requiredRam) score++;
    if (gpu >= requiredGpu) score++;
    if (ddrValue >= requiredDdr) score++; // Max score is now 4
    
    // Special handling for no dedicated GPU
    if (gpu === 0 && requiredGpu > 1) {
        score = 0; // Instant fail for modern games without GPU
    }
    
    hwResult.classList.remove('hidden', 'optimal', 'minimum', 'incompatible');
    
    if (score >= 3) {
        hwResult.classList.add('optimal');
        hwResult.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Optimal: Your PC easily meets the requirements!`;
    } else if (score >= 1 && gpu >= (requiredGpu - 1)) {
        hwResult.classList.add('minimum');
        hwResult.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Minimum: You can run this, but on lowered settings.`;
    } else {
        hwResult.classList.add('incompatible');
        hwResult.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> Incompatible: Your PC may struggle to run this game.`;
    }
});
