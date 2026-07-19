/* ==========================================
   GAME DATA & INSTRUCTIONS
   ==========================================
   This file stores all your games.
   Metadata (years, platforms, genres) is highly accurate!
   
   HOW TO ADD IMAGES AND LINKS:
   1. Find the game you want to update (e.g., "7 Days To Die").
   2. To add a link: replace the '#' in link: "#" with your game URL.
   3. To add an image: replace the Unsplash URL in image: "..." with your image URL.
   ========================================== */
const games = [
    {
        "id": 1,
        "title": "7 Days To Die",
        "link": "https://www.mediafire.com/file/3q3206c9prnm3av/7-Days-To-Die.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/5cb/5cbbc5cd24677331c85253f961cad72a.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Survival",
            "Horror"
        ]
    },
    {
        "id": 2,
        "title": "007 First Light",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/86f/86f2dc1b9671f25a13ff92e069b51786.jpg",
        "platforms": [
            "PC",
            "Console"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 3,
        "title": "A Difficult Game About Climbing",
        "link": "https://www.mediafire.com/file/n2q6lvhdrdzg34g/A-Difficult-Game-About-Climbing.zip/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/15e/15ea93133d15f75e3a73637b720b09c1.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 4,
        "title": "A Little to the Left",
        "link": "https://www.mediafire.com/file/vuhoazbm0dv4551/A-Little-to-the-Left.rar/file",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/5fb/5fb6cab48577b617b5129dca622e061d.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS5"
        ],
        "genres": [
            "Puzzle",
            "Casual"
        ]
    },
    {
        "id": 5,
        "title": "A Plague Tale - Requiem",
        "link": "https://datanodes.to/download",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/cd0/cd074f3f6045297cda9ad077273c09b6.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Stealth"
        ]
    },
    {
        "id": 6,
        "title": "A Plague Tale - Innocence",
        "link": "https://datanodes.to/download",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/b4a/b4adf80c36e267b35acc3497ed2af19c.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Stealth"
        ]
    },
    {
        "id": 7,
        "title": "Ace Combat 7 - Skies Uknown",
        "link": "https://datanodes.to/download",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/c28/c2802dffd26db3d5af8244044fa1e78c.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Simulation"
        ]
    },
    {
        "id": 8,
        "title": "Age of Empires",
        "link": "https://www.mediafire.com/file/d0ayn400othqbd1/Age-of-Empires-Definitive-Edition.rar/file",
        "releaseYear": 1997,
        "image": "https://media.rawg.io/media/screenshots/323/323dac3cdfdc40cd87dd4b2582578afe.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 9,
        "title": "Age of Empires II",
        "link": "https://datanodes.to/download",
        "releaseYear": 1999,
        "image": "https://media.rawg.io/media/screenshots/e90/e90a4f0b878b0206888a56c4155705c8.jpg",
        "platforms": [
            "PC",
            "Xbox"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 10,
        "title": "Age of Empires III",
        "link": "https://datanodes.to/download",
        "releaseYear": 2005,
        "image": "https://media.rawg.io/media/screenshots/27d/27daaa55b3833db3f236ab86e171c0df.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 11,
        "title": "Age of Empires IV",
        "link": "https://datanodes.to/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/23e/23e45acbf29bd241913ddcf5cf4053d5.jpg",
        "platforms": [
            "PC",
            "Xbox Series X"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 12,
        "title": "Alan Wake",
        "link": "https://datanodes.to/download",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        "platforms": [
            "PC",
            "Xbox 360",
            "PS4"
        ],
        "genres": [
            "Action",
            "Horror"
        ]
    },
    {
        "id": 13,
        "title": "Alan Wake 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Survival",
            "Horror"
        ]
    },
    {
        "id": 14,
        "title": "Alien Isolation",
        "link": "https://www.mediafire.com/file/d3iw2xxhfnd4r9i/Alien-Isolation.rar/file",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Survival",
            "Horror",
            "Stealth"
        ]
    },
    {
        "id": 15,
        "title": "Amnesia: The Bunker",
        "link": "https://www.mediafire.com/file/uhj3heg4y5w5uvu/Amnesia-The-Bunker.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/a45/a45abc50643f0fa355f5cb24cbb94744.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox Series X"
        ],
        "genres": [
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 16,
        "title": "Armored Core VI - Fires of Rubicon",
        "link": "https://datanodes.to/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/c97/c97aba78a97038867d4b32a81fe48567.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Mech"
        ]
    },
    {
        "id": 17,
        "title": "Assassin's Creed",
        "link": "https://www.mediafire.com/file/mrm0yfk3xf3gokw/Assassins-Creed.rar/file",
        "releaseYear": 2007,
        "image": "https://media.rawg.io/media/games/0bc/0bcc108295a244b488d5c25f7d867220.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 18,
        "title": "Assassin's Creed 2",
        "link": "https://www.mediafire.com/file/5ndwb16712tzm1o/Assassin-Creed-2.rar/file",
        "releaseYear": 2009,
        "image": "https://media.rawg.io/media/games/1be/1bed7fae69d1004c09dfe1101d5a3a94.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 19,
        "title": "Assassin's Creed 3",
        "link": "https://www.mediafire.com/file/g57mkrcbr8l23pa/Assassins-Creed-3.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 20,
        "title": "Assassin's Creed 4 - Black Flag",
        "link": "https://www.mediafire.com/file/wv6spxo0y52euzj/Assassins-Creed-4-Black-Flag.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 21,
        "title": "Assassin's Creed - Brotherhood",
        "link": "https://www.mediafire.com/file/1cho3e043wf1x5r/Assassins-Creed-Brotherhood.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 22,
        "title": "Assassin's Creed - Mirage",
        "link": "",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/fbd/fbd0128013b7965904be571e75fb30c0.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 23,
        "title": "Assassin's Creed - Odyssey",
        "link": "https://datanodes.to/download",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 24,
        "title": "Assassin's Creed - Origins",
        "link": "https://bzzhr.to/bsft1whjwsie",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/336/336c6bd63d83cf8e59937ab8895d1240.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 25,
        "title": "Assassin's Creed - Revelations",
        "link": "https://www.mediafire.com/file/a89ouyix7refj9x/Assassins-Creed-Revelations.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/193/19390fa5e75e9048b22c9a736cf9992f.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 26,
        "title": "Assassin's Creed - Rogue",
        "link": "https://www.mediafire.com/file/etibiggrjp9mvti/Assassins-Creed-Rogue.rar/file",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/3c4/3c4a44ed99c87c56e0cdcfaaaf5c3628.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 27,
        "title": "Assassin's Creed - Syndicate",
        "link": "https://bzzhr.to/yxa6txtoozhj",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/9f1/9f189c639f70f91166df415811a8b525.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 28,
        "title": "Assassin's Creed - Valhalla",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 29,
        "title": "Assassin's Creed - Unity",
        "link": "https://datanodes.to/download",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Stealth",
            "RPG"
        ]
    },
    {
        "id": 30,
        "title": "Assetto Corza Competizone",
        "link": "https://www.mediafire.com/file/jvbug2bgywvlyzs/Assetto-Corsa-Competizione.rar/file",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/19e/19ea8efb10fcbcf1b9c60729d510ed14.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Racing",
            "Simulation"
        ]
    },
    {
        "id": 31,
        "title": "Astroneer",
        "link": "https://www.mediafire.com/file/9l4n3tw3c6ke1z7/Astroneer.rar/file",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/02f/02f775a806c6cd64c28d5aeca928dc76.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Indie",
            "Survival"
        ]
    },
    {
        "id": 32,
        "title": "Attack on Titan",
        "link": "https://www.mediafire.com/file/cin10v88hacot0r/Attack-on-Titan-Wings-of-Freedom.rar/file",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/6ba/6ba340160880414da6c85a9433bdc9d3.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Anime"
        ]
    },
    {
        "id": 33,
        "title": "Attack on Titan 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/334/3347dd41a028675f97ba8484a8c29830.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Anime"
        ]
    },
    {
        "id": 34,
        "title": "Balatro",
        "link": "https://www.mediafire.com/file/96c65hnen0l03av/Balatro.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/821/821a40bd0cc0ac7dfb3fe97a7878dc1f.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Switch",
            "Xbox"
        ],
        "genres": [
            "Strategy",
            "Card",
            "Roguelike"
        ]
    },
    {
        "id": 35,
        "title": "Baldur's Gate 3",
        "link": "https://datanodes.to/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "RPG",
            "Strategy",
            "Adventure"
        ]
    },
    {
        "id": 36,
        "title": "Batman - Arkham Asylum",
        "link": "https://www.mediafire.com/file/o5nfbp6vigqauh8/Batman-Arkham-Asylum-GOTY.rar/file",
        "releaseYear": 2009,
        "image": "https://media.rawg.io/media/games/d56/d564ee964eb3c17892b3b35dd607f836.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Stealth"
        ]
    },
    {
        "id": 37,
        "title": "Batman - Arkham Knight",
        "link": "https://datanodes.to/download",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Stealth"
        ]
    },
    {
        "id": 38,
        "title": "Battlefield 1",
        "link": "https://datanodes.to/download",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 39,
        "title": "Battlefield V",
        "link": "https://datanodes.to/download",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/45b/45b57ed59de4b84effd8f6bc4b7bf515.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 40,
        "title": "Battle Realms - Zen Edition",
        "link": "https://www.mediafire.com/file/h4plk8cwzz1mfjq/Battle-Realms-Zen-Edition.zip/file",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/screenshots/159/1595f4b91ce7e7687fba6b6211e311f1.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 41,
        "title": "BeamNG Drive",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/screenshots/87d/87d141765c73e84baeb06cc80f02b21d.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Racing",
            "Simulation"
        ]
    },
    {
        "id": 42,
        "title": "Bendy and the Ink Machine",
        "link": "https://www.mediafire.com/file/1k9rt7feaduiz5o/Bendy-and-the-Ink-Machine.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/644/64470b0ae9a1c5facd28ec204c437555.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Horror",
            "Puzzle"
        ]
    },
    {
        "id": 43,
        "title": "Bendy and the Dark Revival",
        "link": "https://www.mediafire.com/file/19yxcb1kjoxnqip/Bendy-and-the-Dark-Revival.rar/file",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/84f/84f1d4f189e5dd3772d2c01aee4e4922.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Horror",
            "Adventure"
        ]
    },
    {
        "id": 44,
        "title": "Bioshock",
        "link": "https://www.mediafire.com/file/w4q6qmdb5tt7828/Bioshock.rar/file",
        "releaseYear": 2007,
        "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "RPG"
        ]
    },
    {
        "id": 45,
        "title": "Black Myth: Wukong",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/779/77988e89f7862afeede524420aa251b0.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 46,
        "title": "Blasphemous",
        "link": "https://www.mediafire.com/file/8zrax87bh0a5eiw/Blasphemous.rar/file",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/b01/b01aa6b2d6d4f683203e9471a8b8d5b5.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 47,
        "title": "Blasphemous 2",
        "link": "https://www.mediafire.com/file/b0pmnrlm6brrkhi/Blasphemous-2.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/73b/73bcfec00beec38a3d3527db4f9b8c53.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Action",
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 48,
        "title": "Borderlands",
        "link": "#",
        "releaseYear": 2009,
        "image": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "RPG"
        ]
    },
    {
        "id": 49,
        "title": "Borderlands 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "RPG"
        ]
    },
    {
        "id": 50,
        "title": "Brothers (Remake)",
        "link": "https://www.mediafire.com/file/rb70ztrkqh14qfv/Brothers-A-Tale-of-Two-Sons-Remake.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/dae/dae322f5d859b49835f4259d0ea764b7.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Adventure",
            "Puzzle"
        ]
    },
    {
        "id": 51,
        "title": "Burnout Paradise",
        "link": "https://www.mediafire.com/file/e9b2qzl9zsg4hjo/Burnout-Paradise.rar/file",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/788/788b80cbc8c39167f7ed6dd89fd398dc.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Racing",
            "Action"
        ]
    },
    {
        "id": 52,
        "title": "Bully - Scholarship Edition",
        "link": "https://www.mediafire.com/file/svb6269zuc46aac/BuIIy.7z/file",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/e2b/e2b2bf36ff4af8f8495d2f4e08b1d392.jpg",
        "platforms": [
            "PC",
            "Xbox 360",
            "Wii"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 53,
        "title": "Call of Duty",
        "link": "https://www.mediafire.com/file/gakx1z2hbrwsdej/Call-of-Duty.rar/file",
        "releaseYear": 2003,
        "image": "img/call-of-duty.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 54,
        "title": "Call of Duty 2",
        "link": "https://www.mediafire.com/file/56snpjdc2o762or/Call-of-Duty-2.rar/file",
        "releaseYear": 2005,
        "image": "img/call-of-duty-2.jpg",
        "platforms": [
            "PC",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 55,
        "title": "Call of Duty - Advanced Warfare",
        "link": "https://datanodes.to/download",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/e05/e053aae547e0978ad90280a1a3d8f177.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 56,
        "title": "Call of Duty - Black Ops",
        "link": "https://www.mediafire.com/file/at4j4j9in1e0o5m/Call-of-Duty-Black-Ops.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 57,
        "title": "Call of Duty - Black Ops 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 58,
        "title": "Call of Duty - Black Ops 3",
        "link": "https://bzzhr.to/rea7jctc7a3u",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 59,
        "title": "Call of Duty - Ghosts",
        "link": "https://datanodes.to/download",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/eb2/eb24800b4491701eca481e7c990bce4a.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 60,
        "title": "Call of Duty - Infinite Warfare",
        "link": "https://datanodes.to/download",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/6f7/6f7341dd656910be2c2cda39193a7ec9.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 61,
        "title": "Call of Duty - Modern Warfare",
        "link": "https://www.mediafire.com/file/egmw7tevoxulamm/Call-of-Duty-4-Modern-Warfare.rar/file",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/509/509c81a5da92a8d0645d9e160d155017.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 62,
        "title": "Call of Duty - Modern Warfare 2",
        "link": "https://www.mediafire.com/file/l5dstp7klvbujsf/Call-of-Duty-Modern-Warfare-2.rar/file",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 63,
        "title": "Call of Duty - Modern Warfare 3",
        "link": "https://www.mediafire.com/file/n1fl9lwu25yasrg/Call-of-Duty-Modern-Warfare-3.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 64,
        "title": "Call of Duty - World At War",
        "link": "https://www.mediafire.com/file/cjfalif7qj2y24s/Call-of-Duty-World-at-War.rar/file",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 65,
        "title": "Call of Duty - WWII",
        "link": "https://datanodes.to/download",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 66,
        "title": "Celeste",
        "link": "https://bzzhr.to/fr8u2g2cbyus",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/594/59487800889ebac294c7c2c070d02356.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 67,
        "title": "Chrono Trigger",
        "link": "https://www.mediafire.com/file/hm39lsik4l1yg3u/Chrono-Trigger.rar/file",
        "releaseYear": 1995,
        "image": "https://media.rawg.io/media/games/ae4/ae404f4e0f504131199703c09111bb78.jpg",
        "platforms": [
            "SNES",
            "PC",
            "Mobile"
        ],
        "genres": [
            "RPG",
            "Adventure"
        ]
    },
    {
        "id": 68,
        "title": "Cities Skylines",
        "link": "https://www.mediafire.com/file/86by4mhfmnnnz2u/Cities-Skylines-Hotels-and-Retreats.7z/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Simulation",
            "Strategy"
        ]
    },
    {
        "id": 69,
        "title": "Cities Skylines 2",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/aa5/aa581a715c1afd3d3abdef4669e73852.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Simulation",
            "Strategy"
        ]
    },
    {
        "id": 70,
        "title": "Civilization V",
        "link": "https://www.mediafire.com/file/1mfd5o1ndla1epk/Sid-Meiers-Civilization-V.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
        "platforms": [
            "PC",
            "Mac"
        ],
        "genres": [
            "Strategy"
        ]
    },
    {
        "id": 71,
        "title": "Clair Obscur: Expedition 33",
        "link": "https://bzzhr.to/9iuly7k1m3vz",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/466/4667f17fdee9ebbcea2049e54f8e2b96.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "RPG",
            "Adventure"
        ]
    },
    {
        "id": 72,
        "title": "C&C - Generals Zero Hour",
        "link": "https://www.mediafire.com/file/uazk6swh36t0rio/C&C-Generals.rar/file",
        "releaseYear": 2003,
        "image": "https://media.rawg.io/media/screenshots/2e4/2e4c5fca0fcf411cd900df0f7919aa93.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 73,
        "title": "C&C - Red Alert 2",
        "link": "https://www.mediafire.com/file/ohnzo77qf3n4xlv/C%2526C-Red-Alert-2.rar/file",
        "releaseYear": 2000,
        "image": "https://media.rawg.io/media/screenshots/2e4/2e4c5fca0fcf411cd900df0f7919aa93.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 74,
        "title": "C&C - Red Alert 3",
        "link": "https://www.mediafire.com/file/nlx50m54ao1in1e/C-C-Red-Alert-3.rar/file",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/776/776e601c2c37f50bb11f9054f54c60da.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 75,
        "title": "C&C 3 - Tiberium Wars",
        "link": "https://www.mediafire.com/file/p7diow4op0gsa91/C%2526C-3-Tiberium-Wars%252BKane%2527s-Wrath.rar/file",
        "releaseYear": 2007,
        "image": "https://media.rawg.io/media/screenshots/2e4/2e4c5fca0fcf411cd900df0f7919aa93.jpg",
        "platforms": [
            "PC",
            "Xbox 360"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 76,
        "title": "Company of Heroes",
        "link": "https://www.mediafire.com/file/gs8t5n8l6n3mwg3/Company-Of-Heroes-Complete-Edition.rar/file",
        "releaseYear": 2006,
        "image": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 77,
        "title": "Company of Heroes 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 78,
        "title": "Company of Heroes 3",
        "link": "https://datanodes.to/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/079/079cbcafbbbe278a928dcb86dc3d58fa.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Strategy",
            "RTS"
        ]
    },
    {
        "id": 79,
        "title": "Contraband Police",
        "link": "https://www.mediafire.com/file/h1ejiyq4xaw3ay1/Contraband-Police.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/ff0/ff06a6ec7507a28a735fdd8a38ac8767.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Simulation"
        ]
    },
    {
        "id": 80,
        "title": "Counter Strike 1.6",
        "link": "https://www.mediafire.com/file/mea9l4cv1fkgvtz/Counter-Strike-1.6.rar/file",
        "releaseYear": 2000,
        "image": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 81,
        "title": "Counter Strike - Extreme",
        "link": "https://www.mediafire.com/file/y1fituhvq6v7p1j/CS-eXtreme.7z/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 82,
        "title": "Crash Bandicoot 4 - It's About Time",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/54a/54a14917b3298bbaacdf9873c3af7229.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Platformer",
            "Action"
        ]
    },
    {
        "id": 83,
        "title": "Cronos : The New Dawn",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/370/370a27962e860e9b01709ef3de60fffe.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Horror"
        ]
    },
    {
        "id": 84,
        "title": "Cult of the Lamb",
        "link": "https://www.mediafire.com/file/t7xjv4bezdn6ejp/Cult-of-the-Lamb.rar/file",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/ab8/ab8217a1fe2ced388a388722734e6d16.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Switch",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Strategy",
            "Indie"
        ]
    },
    {
        "id": 85,
        "title": "Cuphead",
        "link": "https://www.mediafire.com/file/d0px47xxm0muq98/Cuphead.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg",
        "platforms": [
            "PC",
            "Xbox One",
            "Switch",
            "PS4"
        ],
        "genres": [
            "Action",
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 86,
        "title": "Cyberpunk 2077",
        "link": "https://bzzhr.to/u33dxmmaozb6",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 87,
        "title": "Danganronpa - Trigger Happy Havoc",
        "link": "https://www.mediafire.com/file/lu2qclopy4l5msc/Danganronpa-THH.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/2fb/2fb35e31727f7ebc1f00bf998d0e22a7.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch",
            "Mobile"
        ],
        "genres": [
            "Adventure",
            "Visual Novel"
        ]
    },
    {
        "id": 88,
        "title": "Dark Souls",
        "link": "https://www.mediafire.com/file/wm4k712u77lnx5f/Dark-Souls-Remastered.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/582/582b5518a52f5086d15dde128264b94d.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "Switch"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 89,
        "title": "Dark Souls 2",
        "link": "https://bzzhr.to/qckuibkza9df",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/651/6512783a214618584d144d5d852ba595.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "PS4"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 90,
        "title": "Dark Souls 3",
        "link": "https://datanodes.to/download",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 91,
        "title": "Dave the Diver",
        "link": "https://www.mediafire.com/file/gl1m7ibyz7f2aga/DAVE-THE-DIVER.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/1ee/1eec43616e3ff00a674124d746926b23.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS5"
        ],
        "genres": [
            "Adventure",
            "RPG",
            "Simulation"
        ]
    },
    {
        "id": 92,
        "title": "Days Gone",
        "link": "https://datanodes.to/download",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg",
        "platforms": [
            "PC",
            "PS4"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 93,
        "title": "Deadpool",
        "link": "https://www.mediafire.com/file/bb5nmevyl4dpkz1/Deadpool.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/a2d/a2d80d32a35281c310a2b9d8cb02e5cf.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "PS4"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
    },
    {
        "id": 94,
        "title": "Dead Cells",
        "link": "https://www.mediafire.com/file/w6ga3m4ou687ejz/Dead-Cells.rar/file",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 95,
        "title": "Dead Island",
        "link": "https://www.mediafire.com/file/az6oqipuvbhb2e8/Dead-Island-Definitive-Collection.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/56e/56ed40948bebaf1968234aa6e3c74771.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "RPG",
            "Survival"
        ]
    },
    {
        "id": 96,
        "title": "Dead Island 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/9cd/9cd22ae5aebd922f96f2bc50efab83df.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG",
            "Survival"
        ]
    },
    {
        "id": 97,
        "title": "Dead Rising",
        "link": "https://www.mediafire.com/file/ca7to71x8lr90og/Dead-Rising.rar/file",
        "releaseYear": 2006,
        "image": "https://media.rawg.io/media/games/65d/65d65ee902f66bdc01d8b6c3d2a0a588.jpg",
        "platforms": [
            "PC",
            "Xbox 360",
            "PS4"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Horror"
        ]
    },
    {
        "id": 98,
        "title": "Dead Rising 2",
        "link": "https://www.mediafire.com/file/hoi17wh6xem2mwv/Dead-Rising-2.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "PS4"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Horror"
        ]
    },
    {
        "id": 99,
        "title": "Dead Rising 3",
        "link": "https://datanodes.to/download",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/d0d/d0dc606686338de79d9cbb418adb74bf.jpg",
        "platforms": [
            "PC",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Horror"
        ]
    },
    {
        "id": 100,
        "title": "Dead Rising 4",
        "link": "https://datanodes.to/download",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/7e0/7e09315d72e12b6cd8995ba18b5f70d0.jpg",
        "platforms": [
            "PC",
            "Xbox One",
            "PS4"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Horror"
        ]
    },
    {
        "id": 101,
        "title": "Death Stranding",
        "link": "https://datanodes.to/download",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        "platforms": [
            "PC",
            "PS4",
            "PS5"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 102,
        "title": "Death Stranding 2 - On The Beach",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/b85/b85bc300d42588af66fb516b7563f74f.jpg",
        "platforms": [
            "PS5"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 103,
        "title": "Deliver At All Costs",
        "link": "https://www.mediafire.com/file/bco9tnyg1ycxrdh/Deliver-At-All-Costs.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/373/37363edf69cee796c05a8394b09fdbbe.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Indie"
        ]
    },
    {
        "id": 104,
        "title": "Deltarune",
        "link": "https://www.mediafire.com/file/cv5wfz69dmuh63y/Deltarune.rar/file",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/7a9/7a907fb5e158c8dc34e783d9c22674c3.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch"
        ],
        "genres": [
            "RPG",
            "Indie"
        ]
    },
    {
        "id": 105,
        "title": "Detroit - Become Human",
        "link": "https://datanodes.to/download",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        "platforms": [
            "PC",
            "PS4"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Story"
        ]
    },
    {
        "id": 106,
        "title": "Devil May Cry",
        "link": "https://datanodes.to/download",
        "releaseYear": 2001,
        "image": "https://media.rawg.io/media/games/c98/c980484ebd10882788fc5e8fbabefbef.jpg",
        "platforms": [
            "PS2",
            "PC",
            "Switch"
        ],
        "genres": [
            "Action",
            "Hack and Slash"
        ]
    },
    {
        "id": 107,
        "title": "Devil May Cry 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2003,
        "image": "https://media.rawg.io/media/games/f68/f68ff2380793ac8e20e15b211c5d0201.jpg",
        "platforms": [
            "PS2",
            "PC",
            "Switch"
        ],
        "genres": [
            "Action",
            "Hack and Slash"
        ]
    },
    {
        "id": 108,
        "title": "Devil May Cry 3",
        "link": "https://datanodes.to/download",
        "releaseYear": 2005,
        "image": "https://media.rawg.io/media/games/912/9128672600b6f23f28c438fc4963e042.jpg",
        "platforms": [
            "PS2",
            "PC",
            "Switch"
        ],
        "genres": [
            "Action",
            "Hack and Slash"
        ]
    },
    {
        "id": 109,
        "title": "Devil May Cry 4",
        "link": "https://bzzhr.to/n42ceau5vruh",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/566/566f53f43aa1bd28c63cf3a4d21440ee.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Hack and Slash"
        ]
    },
    {
        "id": 110,
        "title": "Devil May Cry 5",
        "link": "https://datanodes.to/download",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "PS5"
        ],
        "genres": [
            "Action",
            "Hack and Slash"
        ]
    },
    {
        "id": 111,
        "title": "Diablo",
        "link": "https://www.mediafire.com/file/xsc5e2i4gs8azbh/Diablo.rar/file",
        "releaseYear": 1996,
        "image": "https://media.rawg.io/media/games/923/923a5dd13b6e79dd23ab2d09934f0e8d.jpg",
        "platforms": [
            "PC",
            "PS1"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 112,
        "title": "Diablo II",
        "link": "https://www.mediafire.com/file/7iwhk1vl3p3l6ml/Diablo-II.rar/file",
        "releaseYear": 2000,
        "image": "https://media.rawg.io/media/games/8f7/8f79c37b124822e59af54023ae6bb384.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 113,
        "title": "Dispatch",
        "link": "https://www.mediafire.com/file/zg94dexg8z4wiaq/Dispatch.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/2f6/2f6c45362818859574ac0e37edf3d3c4.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
    },
    {
        "id": 114,
        "title": "Doki Doki Literature Club",
        "link": "https://www.mediafire.com/file/p9btmse823v9fnf/Doki-Doki-Literature-Club-Plus.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/972/972aea3c9eb253e893947bec2d2cfbb9.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Xbox"
        ],
        "genres": [
            "Visual Novel",
            "Horror",
            "Indie"
        ]
    },
    {
        "id": 115,
        "title": "Doom Eternal",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 116,
        "title": "Dragon Ball - Sparkling Zero",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/64f/64fdee7e7b863fbc22460cb8e38614b9.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Fighting",
            "Anime"
        ]
    },
    {
        "id": 117,
        "title": "Dragon Ball - XenoVerse",
        "link": "https://www.mediafire.com/file/0vq9o57exuisy3m/Dragon-Ball-XenoVerse.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/729/729822a7ac978607241a310677c7775d.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "PS3"
        ],
        "genres": [
            "Action",
            "Fighting",
            "Anime"
        ]
    },
    {
        "id": 118,
        "title": "Dragon Ball Z - Kakarot",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/cf0/cf062fb221995e3e04294ba5f9dabbb9.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "RPG",
            "Anime"
        ]
    },
    {
        "id": 119,
        "title": "Dredge",
        "link": "https://www.mediafire.com/file/p3lb9y3ix8n8j26/DREDGE.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/c2c/c2c9f1c026b6c1be5bc2160baf7224ea.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Switch",
            "Xbox"
        ],
        "genres": [
            "Adventure",
            "RPG",
            "Indie"
        ]
    },
    {
        "id": 120,
        "title": "Driver San Fransisco",
        "link": "https://www.mediafire.com/file/xumhosa7pqblfmf/Driver-San-Francisco.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/cce/ccee39dd9977482f655f22ad35de61ce.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "Wii"
        ],
        "genres": [
            "Action",
            "Racing",
            "Open World"
        ]
    },
    {
        "id": 121,
        "title": "Dying Light",
        "link": "https://datanodes.to/download",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "RPG",
            "Survival"
        ]
    },
    {
        "id": 122,
        "title": "Dying Light 2",
        "link": "https://datanodes.to/download    ",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/73d/73db43df633477d4604c7248292f34b2.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG",
            "Survival"
        ]
    },
    {
        "id": 123,
        "title": "Dying Light - The Beast",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/b20/b2055f1b6d12a6342deec3565e465852.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG",
            "Survival"
        ]
    },
    {
        "id": 124,
        "title": "Elden Ring - Shadow of the Erdtree",
        "link": "https://datanodes.to/download",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/0ba/0bae7160eedc1f7d85a8d2db70cf1ec9.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 125,
        "title": "Euro Truck Simulator 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/1f5/1f5ddf7199f2778ff83663b93b5cb330.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Simulation",
            "Driving"
        ]
    },
    {
        "id": 126,
        "title": "F1 2020",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/cd6/cd64ec71d501de0eb32f6b1f50e4c060.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Racing",
            "Simulation"
        ]
    },
    {
        "id": 127,
        "title": "Fable Anniversary",
        "link": "https://bzzhr.to/4bcdxzwhap1w",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/071/0715f91a89d634d9183e2f23c0cb1a98.jpg",
        "platforms": [
            "PC",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 128,
        "title": "Factorio",
        "link": "https://www.mediafire.com/file/hwdvdejyixu7cn3/Factorio.rar/file",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/7e4/7e4e22b76da131e9690d5757555093c2.jpg",
        "platforms": [
            "PC",
            "Switch"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "Indie"
        ]
    },
    {
        "id": 129,
        "title": "Fallout 4",
        "link": "https://datanodes.to/download",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 130,
        "title": "Far Cry",
        "link": "https://www.mediafire.com/file/opnb6okgz0pehy7/Far-Cry.zip/file",
        "releaseYear": 2004,
        "image": "https://media.rawg.io/media/games/2ee/2eef5ed5e82c28d1299ecc2a0e60f2cb.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 131,
        "title": "Far Cry 2",
        "link": "https://www.mediafire.com/file/xqeygrco26pdd45/Far-Cry-2-Fortunes-Edition.zip/file",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/89e/89e913f4ba5260cfb8b775667f81c23a.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Open World"
        ]
    },
    {
        "id": 132,
        "title": "Far Cry 3",
        "link": "https://www.mediafire.com/file/7ycbt33pww5ric3/Far-Cry-3.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Open World"
        ]
    },
    {
        "id": 133,
        "title": "Far Cry 4",
        "link": "https://datanodes.to/download",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/b39/b396dac1f3e0f538841aa0355dd066d3.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Open World"
        ]
    },
    {
        "id": 134,
        "title": "Far Cry 5",
        "link": "https://datanodes.to/download",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Open World"
        ]
    },
    {
        "id": 135,
        "title": "Far Cry 6",
        "link": "https://datanodes.to/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Open World"
        ]
    },
    {
        "id": 136,
        "title": "Far Cry Primal",
        "link": "https://www.mediafire.com/file/cyuy4owm4z0awxy/Far-Cry-Primal.rar/file",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/119/119bb59e64c7956171a33df0d35aee6b.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 137,
        "title": "Fears to Fathom: Home Alone",
        "link": "https://www.mediafire.com/file/slkit7ws19qf4y8/Fears-to-Fathom-Home-Alone.zip/file",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/screenshots/b19/b198e89c8b494ff8d9231189da5edaa9.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Indie"
        ]
    },
    {
        "id": 138,
        "title": "Fears to Fathom: Northwood Hitchhike",
        "link": "https://www.mediafire.com/file/xpwqbawuxyoioen/Fears-to-Fathom-Norwood-Hitchhike.rar/file",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/screenshots/c98/c9885b427db154b008afa86f534b44ce.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Indie"
        ]
    },
    {
        "id": 139,
        "title": "Fears to Fathom: Carson House",
        "link": "https://www.mediafire.com/file/msbikuid0d6rvtd/Fears-to-Fathom-Carson-House.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/screenshots/d17/d17e782dcfbd38b66d2304957267e2a7.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Indie"
        ]
    },
    {
        "id": 140,
        "title": "Fears to Fathom: Ironbark Lookout",
        "link": "https://www.mediafire.com/file/rlcbfhukv37ptod/Fears-to-Fathom-Ironbark-Lookout.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/screenshots/f8d/f8d86ced0f97c6292ea5ed5600efdeab.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Indie"
        ]
    },
    {
        "id": 141,
        "title": "Fears to Fathom: Woodbury Getaway",
        "link": "https://www.mediafire.com/file/wi51x9tq7a4gfio/Fears-to-Fathom-Woodbury-Getaway.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/174/1743bc60159e1fc9d139bdc6162f48df.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Indie"
        ]
    },
    {
        "id": 142,
        "title": "FIFA 23",
        "link": "https://bzzhr.to/zmasjuexf733",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/screenshots/52a/52ad785b9d1514f100ec89c6d5f22e8c.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Sports",
            "Simulation"
        ]
    },
    {
        "id": 143,
        "title": "Final Fantasy I to VI Remastered",
        "link": "https://www.mediafire.com/file/dmncr1wk86hfr5a/Final-Fantasy-I-VI-Bundle-Pixel-Remaster.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/1ac/1ac050b86c87138ce6a3354aa90db894.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch",
            "Mobile"
        ],
        "genres": [
            "RPG"
        ]
    },
    {
        "id": 144,
        "title": "Final Fantasy VII - Remake Integrade",
        "link": "https://datanodes.to/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
        "platforms": [
            "PC",
            "PS5"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 145,
        "title": "Final Fantasy VII - Rebirth",
        "link": "https://bzzhr.to/os7f47rg33sa",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
        "platforms": [
            "PS5"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 146,
        "title": "Five Nights at Freddy's",
        "link": "https://www.mediafire.com/file/h3gzsrh1soedpl2/Five-Nights-at-Freddys.rar/file",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/bdc/bdcb4e528bdd91bc4b3ab75fedb31f7b.jpg",
        "platforms": [
            "PC",
            "Mobile",
            "Switch",
            "PS4"
        ],
        "genres": [
            "Horror",
            "Strategy",
            "Indie"
        ]
    },
    {
        "id": 147,
        "title": "Five Nights at Freddy's 2",
        "link": "https://www.mediafire.com/file/qka1ebefvm8xs9d/Five-Nights-at-Freddys-2.rar/file",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/screenshots/d15/d158c70eb8835a26a64509d29f42cc8d.jpeg",
        "platforms": [
            "PC",
            "Mobile",
            "Switch",
            "PS4"
        ],
        "genres": [
            "Horror",
            "Strategy",
            "Indie"
        ]
    },
    {
        "id": 148,
        "title": "Five Nights at Freddy's 3",
        "link": "https://www.mediafire.com/file/du8brelckcksmqa/Five-Nights-at-Freddys-3.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/screenshots/7e2/7e24e18e7584154d44c11db44b5c6b0a.jpeg",
        "platforms": [
            "PC",
            "Mobile",
            "Switch",
            "PS4"
        ],
        "genres": [
            "Horror",
            "Strategy",
            "Indie"
        ]
    },
    {
        "id": 149,
        "title": "Five Nights at Freddy's 4",
        "link": "https://www.mediafire.com/file/xuobel7doohtby3/Five-Nights-at-Freddys-4.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/screenshots/748/748e8b410abcaee51a7438639f040ee4.jpg",
        "platforms": [
            "PC",
            "Mobile",
            "Switch",
            "PS4"
        ],
        "genres": [
            "Horror",
            "Strategy",
            "Indie"
        ]
    },
    {
        "id": 150,
        "title": "Five Nights at Freddy's - Into the Pit",
        "link": "#https://www.mediafire.com/file/nr4l7jiiqixmj23/Five-Nights-At-Freddys-Into-The-Pit.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/140/140059c1a8d2e793c73e45eef454ebed.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Horror",
            "Adventure"
        ]
    },
    {
        "id": 151,
        "title": "Five Nights at Freddy's - Security Breach",
        "link": "https://datanodes.to/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/f5b/f5b0a8232e747c03aa6b56ce2d2af49a.jpg",
        "platforms": [
            "PC",
            "PS4",
            "PS5",
            "Switch"
        ],
        "genres": [
            "Horror",
            "Adventure",
            "Action"
        ]
    },
    {
        "id": 152,
        "title": "Five Nights at Freddy's - Sister Location",
        "link": "https://www.mediafire.com/file/fu4179afnp0p081/Five-Nights-at-Freddys-Sister-Location.rar/file",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/screenshots/c6e/c6eb418beab0a064347be8b890dea33f.jpeg",
        "platforms": [
            "PC",
            "Mobile",
            "Switch",
            "PS4"
        ],
        "genres": [
            "Horror",
            "Strategy",
            "Indie"
        ]
    },
    {
        "id": 153,
        "title": "Forager",
        "link": "https://www.mediafire.com/file/q5ddyqwmmewnpvg/Forager.rar/file",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/screenshots/467/467ec166bdb3c8f8232e205047194dba.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Adventure",
            "RPG",
            "Indie"
        ]
    },
    {
        "id": 154,
        "title": "Forza Horizon 5",
        "link": "https://datanodes.to/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg",
        "platforms": [
            "PC",
            "Xbox Series X",
            "Xbox One"
        ],
        "genres": [
            "Racing",
            "Simulation",
            "Open World"
        ]
    },
    {
        "id": 155,
        "title": "Frostpunk",
        "link": "https://www.mediafire.com/file/kgus2lmuvoe1fg9/Frostpunk.rar/file",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/a88/a886c37bf112d009e318b106db9d420a.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "Survival"
        ]
    },
    {
        "id": 156,
        "title": "Geometry Dash",
        "link": "https://www.mediafire.com/file/o058a9697x410iw/Geometry-Dash.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/screenshots/fba/fbad5c48939e7887872754c9167c3f68.jpeg",
        "platforms": [
            "PC",
            "Mobile"
        ],
        "genres": [
            "Platformer",
            "Action",
            "Indie"
        ]
    },
    {
        "id": 157,
        "title": "Get to Work",
        "link": "https://www.mediafire.com/file/y4sgn8qgdmt3e6y/Get-To-Work.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/screenshots/5a7/5a79a334e8cc8ee524645f387b369ec9.jpg",
        "platforms": [
            "PC",
            "Mac"
        ],
        "genres": [
            "Simulation"
        ]
    },
    {
        "id": 158,
        "title": "Getting It Over with Bennett Foddy",
        "link": "https://www.mediafire.com/file/bk2nawqwgd1fy0z/Getting-Over-It-with-Bennett-Foddy.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/941/941f173c573feebf92d62fad118d004e.jpg",
        "platforms": [
            "PC",
            "Mobile"
        ],
        "genres": [
            "Action",
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 159,
        "title": "Ghost of Tshushima",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/193/193c9fe23ca026914fdf41d551ff3df9.jpg",
        "platforms": [
            "PS4",
            "PS5",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 160,
        "title": "God Of War 4",
        "link": "https://datanodes.to/download",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/c13/c13815d4923dc9778ff959985ad4dd43.jpg",
        "platforms": [
            "PS4",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "RPG"
        ]
    },
    {
        "id": 161,
        "title": "God Of War Ragnarok",
        "link": "https://datanodes.to/download",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/screenshots/3c4/3c4c51b66741363d83b56ce66b1240ec.jpg",
        "platforms": [
            "PS4",
            "PS5",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "RPG"
        ]
    },
    {
        "id": 162,
        "title": "GTA III",
        "link": "https://www.mediafire.com/file/76d8vv7rax7aq8x/GTA-III.zip/file",
        "releaseYear": 2001,
        "image": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 163,
        "title": "GTA Vice City",
        "link": "https://www.mediafire.com/file/abphkyqpzb5nrqc/GTA-Vice-City.zip/file",
        "releaseYear": 2002,
        "image": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 164,
        "title": "GTA San Andreas",
        "link": "https://www.mediafire.com/file/azasvrjdu7yxa6x/GTA-San-Andreas.rar/file",
        "releaseYear": 2004,
        "image": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 165,
        "title": "GTA IV",
        "link": "https://www.mediafire.com/file/fcvyxq8wpeoo95c/GTA-IV.rar/file",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 166,
        "title": "GTA V",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        "platforms": [
            "PC",
            "PS4",
            "PS5",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 167,
        "title": "Hades",
        "link": "https://www.mediafire.com/file/ys5fxrtk7p784f1/Hades.zip/file",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Roguelike",
            "Indie"
        ]
    },
    {
        "id": 168,
        "title": "Halo - The Masterchief Collection",
        "link": "https://datanodes.to/download",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/c24/c24f4434882ae9c2c8d9d38de82cb7a5.jpg",
        "platforms": [
            "PC",
            "Xbox One",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 169,
        "title": "Happy Game",
        "link": "https://www.mediafire.com/file/003fk8fy9gz5gv7/Happy-Game.rar/file",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/751/75127366e445a0f6bbb730b3af6e7a7f.jpg",
        "platforms": [
            "PC",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Indie"
        ]
    },
    {
        "id": 170,
        "title": "Harvest Moon - One World",
        "link": "https://www.mediafire.com/file/b5beshp9xbhepmi/Harvest-Moon-One-World.rar/file",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/screenshots/31d/31deb33b648e39fa44be66e6cb5a7991.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Simulation",
            "RPG"
        ]
    },
    {
        "id": 171,
        "title": "Harvest Moon - Light of Hope",
        "link": "https://www.mediafire.com/file/1swjwt3dsx2a80l/Harvest-Moon-Light-of-Hope.zip/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/screenshots/da0/da0738506742ff90386a4f033b1bdc42.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Mobile"
        ],
        "genres": [
            "Simulation",
            "RPG"
        ]
    },
    {
        "id": 172,
        "title": "Harvest Moon - The Winds of Anthos",
        "link": "https://www.mediafire.com/file/n6ma9oum2zaay9x/Harvest-Moon-The-Winds-of-Anthos.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/screenshots/18b/18bf321d0286f3d988b7da1d33520e74.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Simulation",
            "RPG"
        ]
    },
    {
        "id": 173,
        "title": "Heretic + Hexen",
        "link": "https://www.mediafire.com/file/4l5fy2jl4yrri30/Heretic-Hexen.rar/file",
        "releaseYear": 1995,
        "image": "https://media.rawg.io/media/screenshots/bf2/bf206470757a0ac07afba20ab974e79c.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Fantasy"
        ]
    },
    {
        "id": 174,
        "title": "High on Life",
        "link": "https://datanodes.to/download",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/2e7/2e732a02c29c84ca177855848932a5aa.jpg",
        "platforms": [
            "PC",
            "Xbox Series X",
            "PS5"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Adventure"
        ]
    },
    {
        "id": 175,
        "title": "Hitman 3",
        "link": "https://datanodes.to/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/126/126fbd5ceacddc6ad16fc96e50b1265b.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Action",
            "Stealth",
            "Adventure"
        ]
    },
    {
        "id": 176,
        "title": "Hollow Knight",
        "link": "https://www.mediafire.com/file/6ogm3iq19xxfjvl/Hollow-Knight.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 177,
        "title": "Hollow Knight - Silksong",
        "link": "https://www.mediafire.com/file/s0ukw79agagdywh/Hollow-Knight-Silksong.rar/file",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/27c/27cd8b7dead05a870f8a514a9a1915ad.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS5",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 178,
        "title": "Hogwarts Legacy",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/044/044b2ee023930ca138deda151f40c18c.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 179,
        "title": "Horizon - Zero Dawn",
        "link": "https://datanodes.to/download",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/b0a/b0a6ef260b58ef99b40faddd0f9ebed3.jpg",
        "platforms": [
            "PS4",
            "PC"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 180,
        "title": "Horizon - Forbidden West",
        "link": "https://datanodes.to/download",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/bf7/bf73b105ccbba42107986bbcd96fcada.jpg",
        "platforms": [
            "PS4",
            "PS5",
            "PC"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 181,
        "title": "Hotline Miami",
        "link": "https://www.mediafire.com/file/0b9b8tovwqrxjly/Hotline-Miami.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch",
            "Mobile"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Indie"
        ]
    },
    {
        "id": 182,
        "title": "Hotline Miami 2 - Wrong Number",
        "link": "https://www.mediafire.com/file/cqh8twg6zlotec6/Hotline-Miami-2-Wrong-Number.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch",
            "Mobile"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Indie"
        ]
    },
    {
        "id": 183,
        "title": "House Flipper",
        "link": "https://www.mediafire.com/file/od6xnm82y5vqjgj/House-Flipper.rar/file",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/screenshots/dd9/dd91beec6add2a49038d62d67fd0733f.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Simulation",
            "Indie"
        ]
    },
    {
        "id": 184,
        "title": "IDLE BOSS RUSH",
        "link": "https://megadb.net/au9o5ziapb4a",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/931/931bcf7e8848c05304b0266500fbc6b1.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "RPG",
            "Indie"
        ]
    },
    {
        "id": 185,
        "title": "InZOI",
        "link": "https://datanodes.to/download",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/727/727ebb5c7711b6b6cbc1d4620ba58373.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Simulation",
            "Life Sim"
        ]
    },
    {
        "id": 186,
        "title": "Jump Force",
        "link": "https://datanodes.to/download",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/bac/bac558c863989fadc4fede908c15cd64.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Fighting",
            "Anime"
        ]
    },
    {
        "id": 187,
        "title": "Kingdoms of Amalur - Re-Reckoning",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/31c/31c3bc7e7296ac5ec6cca8407cd992e4.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 188,
        "title": "Kingdom Come: Deliverance II",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/d84/d842fec4ae7bbd782d330f678c980f7f.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG",
            "Historical"
        ]
    },
    {
        "id": 189,
        "title": "Legionbound",
        "link": "#",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/7e9/7e922e1052785f680bfa08e38891b91f.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "RPG",
            "Indie"
        ]
    },
    {
        "id": 190,
        "title": "LEGO City Undercover",
        "link": "https://www.mediafire.com/file/z2vbsa3a9ur1k53/LEGO-City-Undercover.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/1fa/1fa173b8507cab48b755eebfabeb9930.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 191,
        "title": "LEGO Marvel Super Heroes",
        "link": "https://www.mediafire.com/file/ttwgibmb3jqhpbp/LEGO-Marvel-Super-Heroes.7z/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/a87/a8743bdee8627c55bb9f2f01b9136ac1.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
    },
    {
        "id": 192,
        "title": "LEGO Star Wars The Complete Saga",
        "link": "https://www.mediafire.com/file/ao22m1o3asndjp2/LEGO-Star-Wars-The-Complete-Saga.rar/file",
        "releaseYear": 2007,
        "image": "https://media.rawg.io/media/games/cf3/cf39c637f18800b6d3f65d640a8ebbaa.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "Wii"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
    },
    {
        "id": 193,
        "title": "Lies of P",
        "link": "https://datanodes.to/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/458/45838becd01e929b6be8b88d655cebfc.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 194,
        "title": "Limbo",
        "link": "https://www.mediafire.com/file/yuzerrjmjiel9g4/LIMBO.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch",
            "Mobile"
        ],
        "genres": [
            "Adventure",
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 195,
        "title": "Left 4 Dead",
        "link": "https://www.mediafire.com/file/lp7jag0th5c980p/Left-4-Dead.rar/file",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg",
        "platforms": [
            "PC",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Survival"
        ]
    },
    {
        "id": 196,
        "title": "Left 4 Dead 2",
        "link": "https://www.mediafire.com/file/nl05byxf6aiyqqj/Left-4-Dead-2.rar/file",
        "releaseYear": 2009,
        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "platforms": [
            "PC",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Survival"
        ]
    },
    {
        "id": 197,
        "title": "Life is Strange",
        "link": "https://www.mediafire.com/file/8f8lldkqgxfnf88/Life-is-Strange-Remastered.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story"
        ]
    },
    {
        "id": 198,
        "title": "Life is Strange - Before the Storm",
        "link": "https://www.mediafire.com/file/7i1qpm4i9cmdvwd/Life-is-Strange-Before-the-Storm-Remastered.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/214/2140885d34e3a3398b45036e5d870971.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story"
        ]
    },
    {
        "id": 199,
        "title": "Life is Strange - True Colors",
        "link": "https://datanodes.to/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/278/2784fe67065c5095411f0d4c85205143.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story"
        ]
    },
    {
        "id": 200,
        "title": "Little Nightmares",
        "link": "https://www.mediafire.com/file/773978k2oq5vj5e/Little-Nightmares-Secrets-of-The-Maw.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Platformer"
        ]
    },
    {
        "id": 201,
        "title": "Little Nightmares II",
        "link": "https://www.mediafire.com/file/xlpo3l75e7a8sri/Little-Nightmares-II.rar/file",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/c2a/c2a7dc4540eb79aaff7099ae691105d3.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Platformer"
        ]
    },
    {
        "id": 202,
        "title": "Little Nightmares III",
        "link": "https://www.mediafire.com/file/e84l4dqwm8zrnc3/Little-Nightmares-III.rar/file",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/bc2/bc25f96263d3f206369fd16415688a53.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Platformer"
        ]
    },
    {
        "id": 203,
        "title": "Madden NFL 20",
        "link": "https://datanodes.to/download",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/0b8/0b8a262e733065e807995becfef6d9cc.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Sports",
            "Simulation"
        ]
    },
    {
        "id": 204,
        "title": "Mafia",
        "link": "https://datanodes.to/download",
        "releaseYear": 2002,
        "image": "https://media.rawg.io/media/games/345/3452d9d4483686c602372e0e6b3bb4cc.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 205,
        "title": "Mafia II",
        "link": "https://datanodes.to/download",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 206,
        "title": "Mafia III",
        "link": "https://datanodes.to/download",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/a34/a348e613424260bc7e034fb6031c762e.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 207,
        "title": "Manhunt",
        "link": "https://www.mediafire.com/file/59rjy0z2a6l6p37/Manhunt.rar/file",
        "releaseYear": 2003,
        "image": "https://media.rawg.io/media/games/c23/c23b578d6a9dd1c73ee403157184e793.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Horror",
            "Stealth"
        ]
    },
    {
        "id": 208,
        "title": "Manhunt 2",
        "link": "https://www.mediafire.com/file/vvz8k8q1er4a0pp/Manhunt-2.rar/file",
        "releaseYear": 2007,
        "image": "https://media.rawg.io/media/games/2a8/2a8e6acdf8cde8915920f568bd6f86b0.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Wii"
        ],
        "genres": [
            "Action",
            "Horror",
            "Stealth"
        ]
    },
    {
        "id": 209,
        "title": "Marvel's Gaurdians of the Galaxy",
        "link": "https://datanodes.to/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
    },
    {
        "id": 210,
        "title": "Marvel's Spider-Man Miles Morales",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/048/048b46cdc66cbc7e235e1f359c2a77ec.jpg",
        "platforms": [
            "PS4",
            "PS5",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 211,
        "title": "Marvel's Spider-Man Remastered",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/5f1/5f1399f755ed3a40b04a9195f4c06be5.jpg",
        "platforms": [
            "PS5",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 212,
        "title": "Marvel's Spider-Man 2",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/7ae/7ae5a14cdb4ab222a134c15f4629e430.jpg",
        "platforms": [
            "PS5"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 213,
        "title": "MARVEL vs CAPCOM - Fighting Collection",
        "link": "https://www.mediafire.com/file/8mfez63mjesntgh/MARVEL-vs-CAPCOM-Fighting-Collection-AC.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/725/725131e129692ec32ed62e9e405f5f4c.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch"
        ],
        "genres": [
            "Action",
            "Fighting"
        ]
    },
    {
        "id": 214,
        "title": "Max Payne",
        "link": "https://www.mediafire.com/file/tkkl8baz83v1u9n/Max-Payne.rar/file",
        "releaseYear": 2001,
        "image": "https://media.rawg.io/media/games/2f5/2f5eb72fe45540e93ac2726877551a20.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 215,
        "title": "Max Payne 2",
        "link": "https://www.mediafire.com/file/62bj2r4lwgfzl62/Max-Payne-2.rar/file",
        "releaseYear": 2003,
        "image": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 216,
        "title": "Medal of Honor: Airborne",
        "link": "https://www.mediafire.com/file/83ywjguodqijbah/Medal-of-Honor-Airborne.rar/file",
        "releaseYear": 2007,
        "image": "https://media.rawg.io/media/games/0d4/0d4508d6383dd6c63256b41f0aa35e6b.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 217,
        "title": "Medal of Honor (2010)",
        "link": "https://www.mediafire.com/file/0ej8xchuvliciax/Medal-Of-Honor.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 218,
        "title": "Metal Gear Rising - Revengeance",
        "link": "https://datanodes.to/download",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/8e6/8e699e91cf77c2060b6d515e2135b1b1.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Hack and Slash"
        ]
    },
    {
        "id": 219,
        "title": "Metal Gear Solid - Snake Eater",
        "link": "https://datanodes.to/download",
        "releaseYear": 2004,
        "image": "https://media.rawg.io/media/games/1c0/1c0548b761f7c4e4c0da71172b3362bf.jpg",
        "platforms": [
            "PS2",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Stealth",
            "Adventure"
        ]
    },
    {
        "id": 220,
        "title": "Metal Gear Solid V - The Phantom Pain",
        "link": "https://datanodes.to/download",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Stealth",
            "Open World"
        ]
    },
    {
        "id": 221,
        "title": "Metaphor: ReFantazio",
        "link": "https://datanodes.to/download",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/2cd/2cd2467a32aaaed0bdeb192c2831cfe0.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "RPG",
            "Strategy"
        ]
    },
    {
        "id": 222,
        "title": "Microsoft Flight Simulator",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/89c/89ceadfd42109aa0d80e9c5dbc86f277.jpg",
        "platforms": [
            "PC",
            "Xbox Series X"
        ],
        "genres": [
            "Simulation"
        ]
    },
    {
        "id": 223,
        "title": "Minecraft (Java Edition)",
        "link": "https://www.mediafire.com/file/0dosuo6cp2aiae2/Minecraft-Java-Edition.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Simulation",
            "Survival"
        ]
    },
    {
        "id": 224,
        "title": "Minecraft Dungeons",
        "link": "https://www.mediafire.com/file/k987259py1guevy/Minecraft-Dungeons.rar/file",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/c14/c146d28ceb14c84ea9fdbd7410701277.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "RPG",
            "Adventure"
        ]
    },
    {
        "id": 225,
        "title": "Minecraft Story Mode",
        "link": "https://www.mediafire.com/file/sbmt33a686sreqk/Minecraft-Story-Mode-Season-One.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/a5e/a5e718412ecc9fc7008b59b2e2a29da1.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story"
        ]
    },
    {
        "id": 226,
        "title": "Minecraft Story Mode Season 2",
        "link": "https://www.mediafire.com/file/w84m4y8n0r1b1dt/Minecraft-Story-Mode-Season-Two.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/5eb/5ebb2eff31f782b5ca986353dbfb8694.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story"
        ]
    },
    {
        "id": 227,
        "title": "Mirror's Edge",
        "link": "https://www.mediafire.com/file/8n7klk41dvb6co6/Mirrors-Edge.rar/file",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Platformer",
            "Adventure"
        ]
    },
    {
        "id": 228,
        "title": "Misao",
        "link": "#",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/screenshots/02f/02f555455a34faffac2db61a267fd081.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "RPG"
        ]
    },
    {
        "id": 229,
        "title": "Monster Hunter Rise: Sunbreak",
        "link": "https://datanodes.to/download",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/b09/b09dca67cbd73300040728da3e30dc88.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 230,
        "title": "Mortal Kombat 11",
        "link": "https://bzzhr.to/kqg860gm6uqh",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Fighting"
        ]
    },
    {
        "id": 231,
        "title": "MotoGP 25",
        "link": "https://steamrip.com/motogp-25-free-download-build-19022332/",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/screenshots/ac1/ac154af8e44b55b5db4227aedd7528b6.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Racing",
            "Simulation"
        ]
    },
    {
        "id": 232,
        "title": "Mount and Blade - Warband",
        "link": "https://www.mediafire.com/file/ccll2weakwfian6/Mount-and-Blade-Warband.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/ccd/ccd40e8f86c0ae10a082b610d31d4475.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "RPG",
            "Strategy"
        ]
    },
    {
        "id": 233,
        "title": "Mount and Blade II -  Bannerlord",
        "link": "https://datanodes.to/download",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/0aa/0aa81c3f82acec65b44e854352522cd6.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG",
            "Strategy"
        ]
    },
    {
        "id": 234,
        "title": "Mouse: P.I For Hire",
        "link": "https://www.mediafire.com/file/yahkip2gtel2gj3/MOUSE-PI-For-Hire.rar/file",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/cf1/cf13436dea02745b8844d98bfa887740.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Indie"
        ]
    },
    {
        "id": 235,
        "title": "Naruto Shippuden - Ultimate Ninja Storm",
        "link": "https://www.mediafire.com/file/z2ziw5sw8hr0ddz/Naruto-Ultimate-Ninja-Storm.rar/file",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/c5a/c5a7912a602518cb921324785fa73703.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Fighting",
            "Anime"
        ]
    },
    {
        "id": 236,
        "title": "Naruto Shippuden - Ultimate Ninja Storm 2",
        "link": "https://www.mediafire.com/file/yutw4ujwpb0phy1/Naruto-Shippuden-Ultimate-Ninja-Storm-2.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/screenshots/a77/a77ab903bb7dd2001cb17e821a9b6fc3.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Fighting",
            "Anime"
        ]
    },
    {
        "id": 237,
        "title": "Naruto Shippuden - Ultimate Ninja Storm 3",
        "link": "#",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/screenshots/993/993d8949c9cc2611219267291d77cf03.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Fighting",
            "Anime"
        ]
    },
    {
        "id": 238,
        "title": "Naruto Shippuden - Ultimate Ninja Storm 4",
        "link": "https://datanodes.to/download",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/b1f/b1f0b19226228555d8b93b2f42b22349.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Fighting",
            "Anime"
        ]
    },
    {
        "id": 239,
        "title": "NBA 2K14",
        "link": "https://www.mediafire.com/file/us601toe05p6zev/NBA-2K14.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/872/8721094b44212218051621bc6fbee27d.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "PS3"
        ],
        "genres": [
            "Sports",
            "Simulation"
        ]
    },
    {
        "id": 240,
        "title": "NBA 2K16",
        "link": "https://datanodes.to/download",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/8c7/8c77cb878b8cafe0b5ee5b21d488393b.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "PS3"
        ],
        "genres": [
            "Sports",
            "Simulation"
        ]
    },
    {
        "id": 241,
        "title": "NBA 2K19",
        "link": "https://datanodes.to/download",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/442/442792baf387bad3b99041be74276ba2.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Sports",
            "Simulation"
        ]
    },
    {
        "id": 242,
        "title": "NBA 2K23",
        "link": "https://datanodes.to/download",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/5f5/5f5803f27d278c46f524a72956f540e7.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Sports",
            "Simulation"
        ]
    },
    {
        "id": 243,
        "title": "Need for Speed: Carbon",
        "link": "https://www.mediafire.com/file/2n6nnyw0upx232e/Need-for-Speed-Carbon.zip/file",
        "releaseYear": 2006,
        "image": "https://media.rawg.io/media/games/35f/35f815a22c4678b4fe76073f0f56df8e.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "Wii"
        ],
        "genres": [
            "Racing",
            "Action"
        ]
    },
    {
        "id": 244,
        "title": "Need for Spead: Heat",
        "link": "https://datanodes.to/download",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Racing",
            "Action",
            "Open World"
        ]
    },
    {
        "id": 245,
        "title": "Need for Spead: Hot Pursuit",
        "link": "https://www.mediafire.com/file/mepoak9y24uqqnm/Need-for-Speed-Hot-Pursuit.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Racing",
            "Action"
        ]
    },
    {
        "id": 246,
        "title": "Need for Speed: Most Wanted (2012)",
        "link": "https://www.mediafire.com/file/uhrq411tohur54z/Need-for-Speed-Most-Wanted-Limited-Edition-2012.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/41b/41ba37b6a3e706dc1d27d49afbf0f72a.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "Wii U"
        ],
        "genres": [
            "Racing",
            "Action",
            "Open World"
        ]
    },
    {
        "id": 247,
        "title": "Need for Speed: Most Wanted (2005)",
        "link": "https://www.mediafire.com/file/o6559joyzn5p1qf/Need-for-Speed-Most-Wanted-2005.zip/file",
        "releaseYear": 2005,
        "image": "https://media.rawg.io/media/games/41b/41ba37b6a3e706dc1d27d49afbf0f72a.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox 360"
        ],
        "genres": [
            "Racing",
            "Action",
            "Open World"
        ]
    },
    {
        "id": 248,
        "title": "Need for Speed: ProStreet",
        "link": "https://www.mediafire.com/file/0zbtwztktcve19i/Need-For-Speed-ProStreet.rar/file",
        "releaseYear": 2007,
        "image": "https://media.rawg.io/media/games/269/269cd0c0a196e87ece216b534813df50.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "Wii"
        ],
        "genres": [
            "Racing",
            "Action"
        ]
    },
    {
        "id": 249,
        "title": "Need for Speed: Rivals",
        "link": "https://www.mediafire.com/file/inmyxn32g148q0i/Need-for-Speed-Rivals.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/1fa/1fa75f0895240b12fc65cc98ae9649fd.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Racing",
            "Action",
            "Open World"
        ]
    },
    {
        "id": 250,
        "title": "Need for Speed: Shift",
        "link": "https://www.mediafire.com/file/t2kqxttalfok7ke/Need-for-Speed-Shift.rar/file",
        "releaseYear": 2009,
        "image": "https://media.rawg.io/media/games/22b/22b61e8391b252cbd9be3317709cc68d.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Racing",
            "Simulation"
        ]
    },
    {
        "id": 251,
        "title": "Need for Speed: Underground",
        "link": "https://www.mediafire.com/file/v0mja8b5oo8r0yt/Need-for-Speed-Underground.rar/file",
        "releaseYear": 2003,
        "image": "https://media.rawg.io/media/games/7dd/7dd30ec2b261fa66c3567ddd845ec649.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox"
        ],
        "genres": [
            "Racing",
            "Action"
        ]
    },
    {
        "id": 252,
        "title": "Need for Speed: Underground 2",
        "link": "https://www.mediafire.com/file/r31tto6bzluwed9/Need-for-Speed-Underground-2.rar/file",
        "releaseYear": 2004,
        "image": "https://media.rawg.io/media/games/dc6/dc68ca77e06ad993aade7faf645f5ec2.jpg",
        "platforms": [
            "PC",
            "PS2",
            "Xbox"
        ],
        "genres": [
            "Racing",
            "Action",
            "Open World"
        ]
    },
    {
        "id": 253,
        "title": "NieR : Automata",
        "link": "https://www.mediafire.com/file/333zkr5867qmrsy/NieR-Automata.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/screenshots/81c/81c498e43b5d4565732b946cc768288a.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
    },
    {
        "id": 254,
        "title": "NINJA GAIDEN 2 Black",
        "link": "https://datanodes.to/download",
        "releaseYear": 2008,
        "image": "https://media.rawg.io/media/games/865/8658eee00be1f66861994e0c6a7260ed.jpg",
        "platforms": [
            "Xbox 360",
            "PC",
            "PS4"
        ],
        "genres": [
            "Action",
            "Hack and Slash"
        ]
    },
    {
        "id": 255,
        "title": "NINJA GAIDEN 4",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/9e8/9e8752c9e8ee0b5030b2851558506ecb.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Hack and Slash"
        ]
    },
    {
        "id": 256,
        "title": "NINJA GAIDEN - Ragebound",
        "link": "https://www.mediafire.com/file/h4wuopo2x38u38d/NINJA-GAIDEN-Ragebound.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/40c/40c911198ddaf503afa3a9674199b906.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Hack and Slash"
        ]
    },
    {
        "id": 257,
        "title": "No, I'm not a Human",
        "link": "https://www.mediafire.com/file/x17cn3z525mfdjx/No-Im-not-a-Human.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/e85/e852cfb26f6c58b80c442a5fc5afbcd8.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Indie"
        ]
    },
    {
        "id": 258,
        "title": "Not a Hero",
        "link": "https://www.mediafire.com/file/hc1yq3flte2bmu6/Not-A-Hero.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/screenshots/37f/37f58feca84811904d56a0ebfdc3531e.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Indie"
        ]
    },
    {
        "id": 259,
        "title": "OMORI",
        "link": "https://www.mediafire.com/file/w67onqu7u8t4xqo/OMORI.rar/file",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/2cb/2cb0d8e4cb57e7b03576619be68326c8.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "RPG",
            "Horror",
            "Indie"
        ]
    },
    {
        "id": 260,
        "title": "One Piece Odyssey",
        "link": "https://datanodes.to/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/cf8/cf8f731368240a2048b9f153b835f529.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "RPG",
            "Anime",
            "Adventure"
        ]
    },
    {
        "id": 261,
        "title": "Only Up!",
        "link": "https://www.mediafire.com/file/ripvkmx5jezysov/Only-Up.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/screenshots/e8c/e8c03319400d967bbbbf6fe059b05474.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Platformer",
            "Indie"
        ]
    },
    {
        "id": 262,
        "title": "Outlast",
        "link": "https://www.mediafire.com/file/ql967ldcwc0wa2m/Outlast.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 263,
        "title": "Outlast 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/880/880f6aa65fe9d786f1a455963df76180.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 264,
        "title": "Papers, Please",
        "link": "https://www.mediafire.com/file/2b1qf9lgtmyusos/Papers-Please.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg",
        "platforms": [
            "PC",
            "Mobile",
            "PS Vita"
        ],
        "genres": [
            "Simulation",
            "Indie",
            "Strategy"
        ]
    },
    {
        "id": 265,
        "title": "Pentiment",
        "link": "https://bzzhr.to/8yw4g37ibzvy",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/f1d/f1d25c007b9b45c98b57ff9ebbca9692.jpg",
        "platforms": [
            "PC",
            "Xbox Series X",
            "PS5",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "RPG",
            "Story"
        ]
    },
    {
        "id": 266,
        "title": "Portal",
        "link": "https://bzzhr.to/6klxm5xf3m3l",
        "releaseYear": 2007,
        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "Switch"
        ],
        "genres": [
            "Puzzle",
            "Action",
            "Adventure"
        ]
    },
    {
        "id": 267,
        "title": "Prince of Persia - The Forgotten Sands",
        "link": "https://www.mediafire.com/file/59axjbgxc2y9als/Prince-of-Persia-TFS.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/9a2/9a2e789046757af843ef0dd2a435adab.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "Wii"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Platformer"
        ]
    },
    {
        "id": 268,
        "title": "Project Zomboid",
        "link": "https://www.mediafire.com/file/owqtykirkhijr01/Project-Zomboid.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/screenshots/243/2436b84b99f1121c302367f0c5901b84.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "RPG",
            "Simulation",
            "Survival"
        ]
    },
    {
        "id": 269,
        "title": "Prototype",
        "link": "https://www.mediafire.com/file/04w3l8pc03az9ak/Prototype.rar/file",
        "releaseYear": 2009,
        "image": "https://media.rawg.io/media/games/b74/b74b15a48ac7bc37fbb42ee4afcc0b91.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 270,
        "title": "Prototype 2",
        "link": "https://www.mediafire.com/file/jhfou8gbamxysgx/Prototype-2.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/445/44507fdd60a8ec02b1c3c64a293ca754.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 271,
        "title": "Ready or Not",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/807/80722b59580f564352362b78cd53755b.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Simulation"
        ]
    },
    {
        "id": 272,
        "title": "Red Dead Redemption",
        "link": "https://www.mediafire.com/file/q8hcpujm0h6efs0/Red-Dead-Redemption.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg",
        "platforms": [
            "PS4",
            "Switch",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 273,
        "title": "Red Dead Redemption 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 274,
        "title": "Refuted Wind",
        "link": "#",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/74f/74f89d254e04f99bf6580b8c44a0ea7c.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Indie"
        ]
    },
    {
        "id": 275,
        "title": "Resident Evil 0",
        "link": "https://www.mediafire.com/file/e7xd0pk50hornv9/Resident-Evil-0.rar/file",
        "releaseYear": 2002,
        "image": "https://media.rawg.io/media/games/955/9554440f1c17236c0233b644e47909d2.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 276,
        "title": "Resident Evil HD",
        "link": "https://www.mediafire.com/file/4mwzioyj7ps5emm/Resident-Evil-HD-Remaster.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/3cf/3cf4e76bfd5283331c83958c830a761c.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 277,
        "title": "Resident Evil 2 (Remake)",
        "link": "https://datanodes.to/download",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 278,
        "title": "Resident Evil 3 (Remake)",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/screenshots/de3/de3a30ea61f93a5634674977dc623ec8.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 279,
        "title": "Resident Evil 4 (Remake)",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/games/51a/51a404b9918a0b19fc704a3ca248c69f.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 280,
        "title": "Resident Evil 5",
        "link": "https://www.mediafire.com/file/yiwfqe0yska5dul/Resident-Evil-5-Gold-Edition.zip/file",
        "releaseYear": 2009,
        "image": "https://media.rawg.io/media/games/974/974342a3959981a17bdbbff2fd7f97b0.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 281,
        "title": "Resident Evil 6",
        "link": "https://www.mediafire.com/file/dfp89tg65i4iw9h/Resident-Evil-6.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 282,
        "title": "Resident Evil 7",
        "link": "https://datanodes.to/download",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 283,
        "title": "Resident Evil Village",
        "link": "https://datanodes.to/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "PS4"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 284,
        "title": "Resident Evil Requiem",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/ed6/ed613937e113a4d43fa0db771e527a2f.jpg",
        "platforms": [
            "PC",
            "PS5"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 285,
        "title": "Resident Evil: Revalations",
        "link": "https://www.mediafire.com/file/2ftqjut063jjgp9/Resident-Evil-Revelations.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/89a/89ac2742fcfeba3b95ac94457af766ef.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 286,
        "title": "Resident Evil Revelations 2",
        "link": "https://www.mediafire.com/file/d1lk6f5ath63bvf/Resident-Evil-Revelations-2.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/ea3/ea3228b5c6c749019a9ed42e90a4e7c6.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 287,
        "title": "Rimworld",
        "link": "https://www.mediafire.com/file/re3uvkqgaokql88/Rimworld.rar/file",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/screenshots/4d8/4d85fbe90066fdbef295a618640c4a82.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "Survival"
        ]
    },
    {
        "id": 288,
        "title": "Rise of the Tomb Raider",
        "link": "https://datanodes.to/download",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Stealth"
        ]
    },
    {
        "id": 289,
        "title": "Schedule 1",
        "link": "https://www.mediafire.com/file/0dyptmmbpu4k05d/Schedule+I.7z/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/fe2/fe21b112ec5c6d10d3690472f37c63ca.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Indie"
        ]
    },
    {
        "id": 290,
        "title": "Sekiro: Shadows Die Twice",
        "link": "https://www.mediafire.com/file/ebhqi217lqv95kb/Sekiro-Shadows-Die-Twice.rar/file",
        "releaseYear": 2019,
        "image": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "RPG"
        ]
    },
    {
        "id": 291,
        "title": "SIFU",
        "link": "https://bzzhr.to/fx56v77o7kqx",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/3a9/3a9ea2db24f879e61fe7b824f5888d2a.jpg",
        "platforms": [
            "PC",
            "PS4",
            "PS5",
            "Switch",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Fighting",
            "Indie"
        ]
    },
    {
        "id": 292,
        "title": "Silent Hill",
        "link": "https://www.mediafire.com/file/muy1jo3647ayybp/Silent-Hill-Homecoming.rar/file",
        "releaseYear": 1999,
        "image": "https://media.rawg.io/media/games/15d/15db2360d1130ba8c10573586588b0bd.jpg",
        "platforms": [
            "PS1"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 293,
        "title": "Silent Hill 2 (Remake)",
        "link": "https://datanodes.to/download",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/09b/09b41c1a2c5761c5b1772a4ae238bb0e.jpg",
        "platforms": [
            "PC",
            "PS5"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 294,
        "title": "Silent Hill f",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/e7f/e7f2f571761abd7b3c0598c719ae8893.jpg",
        "platforms": [
            "PC",
            "PS5"
        ],
        "genres": [
            "Adventure",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 295,
        "title": "Sixty Four",
        "link": "#",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/ab3/ab3cce0e9cfb72cb138a370f1871c820.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "Puzzle"
        ]
    },
    {
        "id": 296,
        "title": "Shadow of the Tomb Raider",
        "link": "https://datanodes.to/download",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Stealth"
        ]
    },
    {
        "id": 297,
        "title": "Sleeping Dogs",
        "link": "https://www.mediafire.com/file/vesgajoacra73ox/Sleeping-Dogs-Definitive-Edition.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/3d9/3d9bac98d79bcd2d445f829e8d6be902.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "PS3"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 298,
        "title": "Sons of the Forest",
        "link": "https://bzzhr.to/xb7r5vhvz6ir",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/7a0/7a092fa63811a7f6ed90f456a8887e91.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Action",
            "Survival",
            "Horror"
        ]
    },
    {
        "id": 299,
        "title": "SNK vs. Capcom: SVC Chaos",
        "link": "https://www.mediafire.com/file/n9o3u90rrpix97x/SNK-vs-Capcom-SVC-Chaos.rar/file",
        "releaseYear": 2003,
        "image": "https://media.rawg.io/media/screenshots/c25/c25bd5f517ac92c834c052b1c6a8278d.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch"
        ],
        "genres": [
            "Action",
            "Fighting"
        ]
    },
    {
        "id": 300,
        "title": "Spec Ops: The Line",
        "link": "https://www.mediafire.com/file/92cyw84e3c715iq/Spec-Ops-The-Line.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 301,
        "title": "Splinter Cell - Chaos Theory",
        "link": "https://www.mediafire.com/file/e502gonuhbbqiyc/Tom-Clancys-Splinter-Cell-Chaos-Theory.rar/file",
        "releaseYear": 2005,
        "image": "https://media.rawg.io/media/games/83b/83b59a9d512bec8bc8bda6b539b215b2.jpg",
        "platforms": [
            "PC",
            "Xbox",
            "PS2"
        ],
        "genres": [
            "Action",
            "Stealth"
        ]
    },
    {
        "id": 302,
        "title": "Stardew Valley",
        "link": "https://www.mediafire.com/file/mla196g6dce76jr/Stardew-Valley.rar/file",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Mobile"
        ],
        "genres": [
            "RPG",
            "Simulation",
            "Indie"
        ]
    },
    {
        "id": 303,
        "title": "State of Decay",
        "link": "https://bzzhr.to/pusidkl87ebk",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/a34/a34a8c9e1798ef82ee3734719d3c60d3.jpg",
        "platforms": [
            "PC",
            "Xbox 360",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Simulation",
            "Survival"
        ]
    },
    {
        "id": 304,
        "title": "State of Decay 2",
        "link": "https://bzzhr.to/gzdcobt07a10",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/20a/20a1892c6dbe9b820a2f0d79f9ed47a2.jpg",
        "platforms": [
            "PC",
            "Xbox One",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Simulation",
            "Survival"
        ]
    },
    {
        "id": 305,
        "title": "Steins;Gate",
        "link": "https://bzzhr.to/8k88nfhvij0i",
        "releaseYear": 2009,
        "image": "https://media.rawg.io/media/games/c60/c60be8ddf91ede65c65b13eff2e06c37.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Switch",
            "Mobile"
        ],
        "genres": [
            "Visual Novel",
            "Adventure",
            "Sci-Fi"
        ]
    },
    {
        "id": 306,
        "title": "Stray",
        "link": "https://www.mediafire.com/file/m74q7ymzcm5io8x/Stray.rar/file",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg",
        "platforms": [
            "PC",
            "PS5",
            "PS4",
            "Xbox"
        ],
        "genres": [
            "Adventure",
            "Indie",
            "Action"
        ]
    },
    {
        "id": 307,
        "title": "Street Fighter 30th Anniversary Collection",
        "link": "https://www.mediafire.com/file/ptq6v90bzugbtld/Street-Fighter-30th-AC.rar/file",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/940/9402ce92d212bd2cae9ff99dea6d4fb8.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Fighting"
        ]
    },
    {
        "id": 308,
        "title": "Street Fighter V",
        "link": "https://datanodes.to/download",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/a32/a32c9c299488ca99afc3fcea605a7718.jpg",
        "platforms": [
            "PC",
            "PS4"
        ],
        "genres": [
            "Action",
            "Fighting"
        ]
    },
    {
        "id": 309,
        "title": "Stronghold Definitive Edition",
        "link": "https://www.mediafire.com/file/k16nbfjcln2wc9r/Stronghold-Definitive-Edition.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/screenshots/23d/23d8c2aa292a8a7c4a24cb78aa3204e9.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "RTS"
        ]
    },
    {
        "id": 310,
        "title": "Stronghold Crusader Definitive Edition",
        "link": "https://www.mediafire.com/file/apzmw678vp1uo6m/Stronghold-Crusader-DE.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/bec/bec6d3c0e53258a705e48bb34216fb96.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "RTS"
        ]
    },
    {
        "id": 311,
        "title": "Subnautica",
        "link": "https://www.mediafire.com/file/7lyqvi0jgj4kkh0/Subnautica.rar/file",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Survival",
            "Indie"
        ]
    },
    {
        "id": 312,
        "title": "Subnautica - Below Zero",
        "link": "https://www.mediafire.com/file/qurulfk3swmaajn/Subnautica-Below-Zero.rar/file",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/games/437/4377bf00ded8a2ba781aa74d8bff9220.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Survival",
            "Indie"
        ]
    },
    {
        "id": 313,
        "title": "Supermarket Simulator",
        "link": "https://bzzhr.to/5wsl01m993dk",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/a82/a825a12bddb138128a048486dfc2080c.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Simulation",
            "Strategy",
            "Indie"
        ]
    },
    {
        "id": 314,
        "title": "Suikoden I & II HD Remaster",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/abc/abc14abd760982ce10c59837c6bde58d.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS5",
            "Xbox"
        ],
        "genres": [
            "RPG",
            "Adventure",
            "Strategy"
        ]
    },
    {
        "id": 315,
        "title": "TEKKEN 8",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/ed3/ed3a5e9fab79022979de9ef420137f73.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Fighting"
        ]
    },
    {
        "id": 316,
        "title": "Terraria",
        "link": "https://www.mediafire.com/file/hl81c90596o26gr/Terraria.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Mobile"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Indie"
        ]
    },
    {
        "id": 317,
        "title": "Tetris Forever",
        "link": "https://www.mediafire.com/file/zu02hm39o7l5ufa/Tetris-Forever.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/01c/01cf3471856fb5aefab27aac442c664b.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS5",
            "Xbox"
        ],
        "genres": [
            "Puzzle",
            "Strategy"
        ]
    },
    {
        "id": 318,
        "title": "The Binding of Isaac",
        "link": "https://www.mediafire.com/file/650ngyafpzevo9d/The-Binding-of-Isaac.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/cef/cefedf18016cbab466861eb698daf988.jpg",
        "platforms": [
            "PC",
            "Mac",
            "Linux"
        ],
        "genres": [
            "Action",
            "Roguelike",
            "Indie"
        ]
    },
    {
        "id": 319,
        "title": "The Crew",
        "link": "https://bzzhr.to/r9e266moyveu",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/screenshots/b79/b797325a14fc62444ca6032d59aa1c75.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Racing",
            "Action",
            "Open World"
        ]
    },
    {
        "id": 320,
        "title": "The Elder Scrolls IV: Oblivion Remastered",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/games/e56/e56b78444369c6b3ae92ae7f669bf8cd.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 321,
        "title": "The Elder Scrolls V: Skyrim Legendary Edition",
        "link": "https://www.mediafire.com/file/f7j3qb7y3fbgpur/The-Elders-Scrolls-V-Skyrim-Legendary-Edition.rar/file",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/6db/6db2d022f77b1c99116bbf6750ec2c7d.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 322,
        "title": "The Escapists",
        "link": "https://www.mediafire.com/file/drpo7ia7n2almlo/The-Escapists.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/screenshots/bc4/bc46fd9543044b48ce87929f3e0d28a2.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "Indie"
        ]
    },
    {
        "id": 323,
        "title": "The Evil Within",
        "link": "https://datanodes.to/download",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/157/1570121f5c4d240504f1eae5c3854733.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "PS3"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 324,
        "title": "The Evil Within 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/d5f/d5fd2f970f48d0877a53aec98825faba.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Horror",
            "Survival"
        ]
    },
    {
        "id": 325,
        "title": "The Forest",
        "link": "https://www.mediafire.com/file/0dsj741675y0zkg/The-Forest.rar/file",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/1be/1be575aa6de86de328433a63fb534d9a.jpg",
        "platforms": [
            "PC",
            "PS4"
        ],
        "genres": [
            "Action",
            "Survival",
            "Horror"
        ]
    },
    {
        "id": 326,
        "title": "The House of the Dead (Remake)",
        "link": "https://www.mediafire.com/file/rs6k7qkmed2ff2i/The-House-Of-The-Dead-Remake.rar/file",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/screenshots/afa/afa033ebee8e18662f3680ed111b98d2.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 327,
        "title": "The King is Watching",
        "link": "https://www.mediafire.com/file/50qnzgkf3uwlrtj/The-King-is-Watching.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/960/960e8896e0a8da66ec5e19a95cdc1da2.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "Indie"
        ]
    },
    {
        "id": 328,
        "title": "The Last of Us Part I",
        "link": "https://datanodes.to/download",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg",
        "platforms": [
            "PS5",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Story"
        ]
    },
    {
        "id": 329,
        "title": "The Last of Us Part II",
        "link": "https://datanodes.to/download",
        "releaseYear": 2020,
        "image": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
        "platforms": [
            "PS4",
            "PS5"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Story"
        ]
    },
    {
        "id": 330,
        "title": "The Lord of the Rings - The Battle for Middle Earth",
        "link": "https://www.mediafire.com/file/lcc1rqvmv8uw1ja/The-Lord-of-the-Rings-The-Battle-for-Middle-Earth.rar/file",
        "releaseYear": 2004,
        "image": "https://media.rawg.io/media/screenshots/48c/48c80c9207a128996cd704b8d4f42c61.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "RTS",
            "Fantasy"
        ]
    },
    {
        "id": 331,
        "title": "The Lord of the Rings - The Battle for Middle Earth II",
        "link": "https://www.mediafire.com/file/65pogv3qj2mhh4w/The-Lord-of-the-Rings-The-Battle-for-Middle-Earth-II.rar/file",
        "releaseYear": 2006,
        "image": "https://media.rawg.io/media/screenshots/48c/48c80c9207a128996cd704b8d4f42c61.jpg",
        "platforms": [
            "PC",
            "Xbox 360"
        ],
        "genres": [
            "Strategy",
            "RTS",
            "Fantasy"
        ]
    },
    {
        "id": 332,
        "title": "The NOexistenceN of you AND me",
        "link": "https://www.mediafire.com/file/xt67gbvkk196j1r/The.NOexistenceN.of.you.AND.me.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/aec/aec4375f15bc6712117b5665d96169ad.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Visual Novel",
            "Indie"
        ]
    },
    {
        "id": 333,
        "title": "The Precint",
        "link": "https://www.mediafire.com/file/q870adkh8ry6kb8/The-Precinct.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/5c4/5c45b0255e1bc2b89c44b114278a6891.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Simulation"
        ]
    },
    {
        "id": 334,
        "title": "The Sims 1 - Legacy Collection",
        "link": "https://www.mediafire.com/file/rs9t7h8577340os/The-Sims-Legacy-Collection.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/4a1/4a14b0dd8f0a53c14e6435d5707db582.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Simulation",
            "Life Sim",
            "Strategy"
        ]
    },
    {
        "id": 335,
        "title": "The Sims 2 - Legacy Collection",
        "link": "https://www.mediafire.com/file/r9rj7g6flpbemji/The-Sims-2-Legacy-Collection.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/d26/d263d8d035027185193ddd253a6e3479.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Simulation",
            "Life Sim",
            "Strategy"
        ]
    },
    {
        "id": 336,
        "title": "The Sims 3",
        "link": "https://bzzhr.to/vlkr0ltfrkam",
        "releaseYear": 2009,
        "image": "https://media.rawg.io/media/games/369/36914d895c20e35f273286145c267764.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "Wii"
        ],
        "genres": [
            "Simulation",
            "Life Sim",
            "Strategy"
        ]
    },
    {
        "id": 337,
        "title": "The Sims 4",
        "link": "https://datanodes.to/download",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Simulation",
            "Life Sim",
            "Strategy"
        ]
    },
    {
        "id": 338,
        "title": "The Walking Dead",
        "link": "#",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story",
            "Horror"
        ]
    },
    {
        "id": 339,
        "title": "The Walking Dead Season 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story",
            "Horror"
        ]
    },
    {
        "id": 340,
        "title": "The Walking Dead Season 3",
        "link": "https://bzzhr.to/usghd6058bty",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story",
            "Horror"
        ]
    },
    {
        "id": 341,
        "title": "The Walking Dead - The Final Season",
        "link": "https://bzzhr.to/usghd6058bty",
        "releaseYear": 2018,
        "image": "https://media.rawg.io/media/games/6c1/6c1eecf30e3c34e79bbf86698b1e6515.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story",
            "Horror"
        ]
    },
    {
        "id": 342,
        "title": "The Walking Dead - Michonne",
        "link": "#",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/b30/b30d472a13528007721f4a236b04ae7f.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story",
            "Horror"
        ]
    },
    {
        "id": 343,
        "title": "The Witcher 3 - Wild Hunt",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "RPG",
            "Open World"
        ]
    },
    {
        "id": 344,
        "title": "This War of Mine",
        "link": "https://www.mediafire.com/file/7mvc6hinq1e2il6/This-War-of-Mine.rar/file",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "Survival"
        ]
    },
    {
        "id": 345,
        "title": "To the Moon",
        "link": "https://www.mediafire.com/file/8yrzh2vj5shihlj/To-the-Moon.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/fae/faebf3c8cbf30db3f46bfbecf6ada3d6.jpg",
        "platforms": [
            "PC",
            "Switch",
            "Mobile"
        ],
        "genres": [
            "Adventure",
            "RPG",
            "Indie"
        ]
    },
    {
        "id": 346,
        "title": "Tomb Raider",
        "link": "https://datanodes.to/download",
        "releaseYear": 2013,
        "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "PS4"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Stealth"
        ]
    },
    {
        "id": 347,
        "title": "Totally Accurate Battle Simulator",
        "link": "https://www.mediafire.com/file/0jdbkfrl5dbhedi/Totally-Accurate-Battle-Simulator.7z/file",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/screenshots/c76/c7664fff1b8665c1be4c665950d85878.jpg",
        "platforms": [
            "PC",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Strategy",
            "Simulation",
            "Indie"
        ]
    },
    {
        "id": 348,
        "title": "Transformers - Fall of Cybertron",
        "link": "https://www.mediafire.com/file/zkhjkpdbzrltwkb/Transformers-Fall-of-Cybertron.rar/file",
        "releaseYear": 2012,
        "image": "https://media.rawg.io/media/games/5f4/5f44810c864fa054da5e0b84dc16267d.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360",
            "PS4"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 349,
        "title": "Transformers - War for Cybertron",
        "link": "https://www.mediafire.com/file/jlr3buut3e4o7fa/Transformers-War-for-Cybertron.rar/file",
        "releaseYear": 2010,
        "image": "https://media.rawg.io/media/games/dd4/dd43f221a21fce6eb3d27381569779d5.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
    },
    {
        "id": 350,
        "title": "Ultimate Marvel VS. Capcom 3",
        "link": "https://www.mediafire.com/file/c9nsj9abnjldni6/Ultimate-Marvel-vs-Capcom-3.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/106/10679840f87dba8f493612d9d542d566.jpeg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "PS Vita"
        ],
        "genres": [
            "Action",
            "Fighting"
        ]
    },
    {
        "id": 351,
        "title": "Uncharted - Legacy of Thieves Collection",
        "link": "https://datanodes.to/download",
        "releaseYear": 2022,
        "image": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg",
        "platforms": [
            "PS5",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Story"
        ]
    },
    {
        "id": 352,
        "title": "Undertale",
        "link": "https://www.mediafire.com/file/ei8keldxshtlb2l/Undertale.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
        "platforms": [
            "PC",
            "Switch",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "RPG",
            "Adventure",
            "Indie"
        ]
    },
    {
        "id": 353,
        "title": "Unleaving",
        "link": "https://www.mediafire.com/file/b81j4jk7oxaaecn/Unleaving.rar/file",
        "releaseYear": 2023,
        "image": "https://media.rawg.io/media/screenshots/881/88150a4b4d7831c9890bbb603bfa2d28.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Adventure",
            "Puzzle",
            "Indie"
        ]
    },
    {
        "id": 354,
        "title": "Until Then",
        "link": "https://www.mediafire.com/file/jicswajsd0l5sfc/Until-Then.rar/file",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/screenshots/59e/59ef0d956e5aabf5b43af2fc271a93b9.jpg",
        "platforms": [
            "PC",
            "PS5"
        ],
        "genres": [
            "Adventure",
            "Story",
            "Indie"
        ]
    },
    {
        "id": 355,
        "title": "Warcraft III",
        "link": "https://www.mediafire.com/file/s7gegxj8wmfdu1d/WarCraft-III-Complete-Edition.rar/file",
        "releaseYear": 2002,
        "image": "https://media.rawg.io/media/games/667/667b4447a90c4896bfd48400ae76af28.jpg",
        "platforms": [
            "PC"
        ],
        "genres": [
            "Strategy",
            "RTS",
            "Fantasy"
        ]
    },
    {
        "id": 356,
        "title": "Warhammer 40,000 - Space Marines",
        "link": "https://www.mediafire.com/file/uw7vq1h821rpxv5/Warhammer-40000-Space-Marine.rar/file",
        "releaseYear": 2011,
        "image": "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg",
        "platforms": [
            "PC",
            "PS3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Sci-Fi"
        ]
    },
    {
        "id": 357,
        "title": "Warhammer 40,000 - Space Marines 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2024,
        "image": "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Sci-Fi"
        ]
    },
    {
        "id": 358,
        "title": "Watch Dogs",
        "link": "https://www.mediafire.com/file/w5v67hn63cw9bfy/Watch-Dogs.rar/file",
        "releaseYear": 2014,
        "image": "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "PS3"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 359,
        "title": "Watch Dogs 2",
        "link": "https://datanodes.to/download",
        "releaseYear": 2016,
        "image": "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Open World"
        ]
    },
    {
        "id": 360,
        "title": "What Remains of Edith Finch",
        "link": "https://www.mediafire.com/file/o3rvgf96f4zrxtd/What-Remains-of-Edith-Finch.rar/file",
        "releaseYear": 2017,
        "image": "https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Adventure",
            "Story",
            "Indie"
        ]
    },
    {
        "id": 361,
        "title": "World War Z - Aftermath",
        "link": "https://filekeeper.net/download",
        "releaseYear": 2021,
        "image": "https://media.rawg.io/media/screenshots/165/16592cd7d9131ed0af249fd814a5c7e3.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X",
            "Switch"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Survival"
        ]
    },
    {
        "id": 362,
        "title": "WWE 2K25",
        "link": "https://datanodes.to/download",
        "releaseYear": 2025,
        "image": "https://media.rawg.io/media/screenshots/75c/75ca72f55bbf12059fd17e650bdf8c0f.jpg",
        "platforms": [
            "PC",
            "PS5",
            "Xbox Series X"
        ],
        "genres": [
            "Sports",
            "Action",
            "Simulation"
        ]
    },
    {
        "id": 363,
        "title": "Zombie Army Trilogy",
        "link": "https://www.mediafire.com/file/30qpxvafy12cuhy/Zombie-Army-Trilogy.rar/file",
        "releaseYear": 2015,
        "image": "https://media.rawg.io/media/games/2ea/2ea9a19c60a97c3b164020aa1328f429.jpg",
        "platforms": [
            "PC",
            "PS4",
            "Xbox One",
            "Switch"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Horror"
        ]
    }
];