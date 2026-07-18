// Map missing game titles to the images the user uploaded
function getCustomImage(title) {
    const titleLower = title.toLowerCase();
    if (titleLower === "call of duty 2") return "img/call-of-duty-2-v2.jpg";
    if (titleLower === "call of duty") return "img/call-of-duty-v2.jpg";
    if (titleLower.includes("space marine 2")) return "img/Space marine 2.jpg";
    if (titleLower.includes("space marine")) return "img/Space Marine.jpg";
    if (titleLower.includes("walking dead") && titleLower.includes("3")) return "img/walking dead season 3.jpg";
    if (titleLower.includes("walking dead")) return "img/the walking dead.jpg";
    if (titleLower.includes("middleearth 2") || titleLower.includes("middle-earth ii")) return "img/LOTR The Battle For Middleearth 2.jpg";
    if (titleLower.includes("lord of the rings")) return "img/The lord of the rings.jpg";
    if (titleLower.includes("final fantasy vii") && titleLower.includes("intergrade")) return "img/Dark Logo - Final Fantasy VII Remake Intergrade Art Gallery.jpg";
    if (titleLower.includes("need for speed") && titleLower.includes("2")) return "img/need for speed 2.jpg";
    if (titleLower.includes("need for speed")) return "img/need for speed.jpg";

    // Auto-map for any game that might be missing by using its exact title match if necessary
    // but the API works for most of them.
    return null;
}

// Get resolved image URL for a game, utilizing custom mappings and fallback logic
function getGameImageUrl(game, isThumbnail = false) {
    const customImage = getCustomImage(game.title);
    if (customImage) return customImage;
    if (!game.image) return '';

    if (isThumbnail) {
        return game.image.replace('media/games/', 'media/crop/600/400/games/');
    }
    return game.image;
}

// Global image error fallback handler to keep image sources robust and DOM elements clean
window.handleImageError = function (imgElement, originalUrl) {
    const fileName = originalUrl ? originalUrl.split('/').pop() : '';
    if (!imgElement.src.includes('header.jpg') && imgElement.src.includes('crop/600/400/')) {
        imgElement.src = imgElement.src.replace('crop/600/400/', '');
    } else if (!imgElement.src.includes('img/') && fileName !== '') {
        imgElement.src = 'img/' + fileName;
    } else {
        imgElement.onerror = null;
        imgElement.src = 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    }
};

// Create a single game card HTML
function createGameCard(game) {
    const platformsHtml = game.platforms.slice(0, 3).map(p => `<span class="platform-tag">${p}</span>`).join('');

    // Create alternating genre dots
    const genresHtml = game.genres.map(g => `
        <span class="genre-tag">
            <span class="genre-dot"></span>
            ${g}
        </span>
    `).join('');

    // Generate a pseudo-random rating for aesthetics based on the game ID
    const rating = (4.0 + (game.id % 10) / 10).toFixed(1);

    const imageUrl = getGameImageUrl(game, true);

    return `
        <div class="game-card-wrapper">
            <a href="#" onclick="openGameModal(${game.id}); return false;" class="game-card">
                <img src="${imageUrl}" onerror="handleImageError(this, '${game.image}')" alt="${game.title} cover" class="game-image" loading="lazy">
                <div class="card-overlay">
                    <div class="rating-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        ${rating}
                    </div>
                    <div class="card-content">
                        <h3 class="game-title" title="${game.title}">${game.title}</h3>
                        <div class="game-meta">
                            <div class="platforms">
                                ${platformsHtml}
                            </div>
                            <span class="release-year">${game.releaseYear}</span>
                        </div>
                        <div class="card-list-description">
                            ${typeof generateDescription === 'function' ? generateDescription(game) : 'Experience this amazing game.'}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}