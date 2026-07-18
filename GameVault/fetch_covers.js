const fs = require('fs');
const path = require('path');

const API_KEY = '124ff7d629234fcb914217d4735f85ab';
const UNSPLASH = 'unsplash.com';
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function searchRAWG(title) {
  try {
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(title)}&page_size=3`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const hit = data.results.find(r => r.background_image);
      return hit ? hit.background_image : null;
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function main() {
  const gamesPath = path.join(__dirname, 'js/data/games.js');
  let gamesContent = fs.readFileSync(gamesPath, 'utf8');
  
  // Extract just the games array properly using eval
  let gamesArray;
  try {
      const match = gamesContent.match(/const games = (\[[\s\S]*\]);/);
      gamesArray = eval(match[1]);
  } catch (e) {
      console.error("Failed to parse games array.");
      process.exit(1);
  }

  const toFetch = gamesArray
    .map((g, i) => ({ game: g, index: i }))
    .filter(({ game }) => !game.image || game.image.includes(UNSPLASH));

  console.log(`\n🎮 Fetching covers for ${toFetch.length} games...\n`);

  let found = 0;
  for (let i = 0; i < toFetch.length; i++) {
    const { game, index } = toFetch[i];
    process.stdout.write(`[${i + 1}/${toFetch.length}] ${game.title}... `);

    const img = await searchRAWG(game.title);

    if (img) {
      gamesArray[index].image = img;
      console.log('✓');
      found++;
    } else {
      console.log('✗ not found');
    }
    await sleep(250); 
  }

  // Create new content by replacing only the array part
  const headerMatch = gamesContent.match(/^([\s\S]*?const games = )\[/);
  const footerMatch = gamesContent.match(/\];([\s\S]*?)$/);
  
  if (headerMatch) {
      const newContent = headerMatch[1] + JSON.stringify(gamesArray, null, 4) + ';';
      fs.writeFileSync(gamesPath, newContent, 'utf8');
      console.log(`\n✅ Done! Successfully updated games.js`);
  } else {
      console.error("Failed to inject new array into games.js");
  }
}

main().catch(console.error);
