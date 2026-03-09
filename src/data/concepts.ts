export interface VideoConcept {
  id: number;
  hook: string;
  visual: string;
  caption: string;
  question: string;
  category: 'Prototype Stalling' | 'Art Block' | 'Speed' | 'Quality';
}

export const concepts: VideoConcept[] = [
  {
    id: 1,
    category: 'Prototype Stalling',
    hook: "Your game prototype is dying because of a gray cube.",
    visual: "Split screen: Left side shows a boring gray cube jumping. Right side shows a fully rigged, high-quality VOID48 character doing the same jump.",
    caption: "Stop letting placeholders kill your motivation. A gray cube isn't a game, it's a funeral for your idea. Get production-ready characters in 48 hours. 🚀 #indiedev #gamedev #VOID48",
    question: "What's the longest you've spent staring at a placeholder asset?"
  },
  {
    id: 2,
    category: 'Speed',
    hook: "I got a custom character rigged and ready in 48 hours. No, seriously.",
    visual: "Fast-paced montage: A rough sketch -> 3D model progress bar -> Character walking in Unreal/Unity. Ending with a '48:00' timer hitting zero.",
    caption: "The 'Indie Dev Time' myth is real, but VOID48 is the cheat code. From concept to engine-ready in two days. ⏱️ #3dart #characterdesign #gamedevlife",
    question: "If you had a character ready by Wednesday, what feature would you build next?"
  },
  {
    id: 3,
    category: 'Art Block',
    hook: "POV: You're a solo dev who can code anything but can't draw a circle.",
    visual: "Close up of a developer looking stressed at a blank Blender screen. Cut to them clicking 'Order' on VOID48 and suddenly their game looks professional.",
    caption: "You don't need to be a master artist to make a masterpiece. Focus on the code, let VOID48 handle the soul of your game. 🎨 #solodev #indiegame #coding",
    question: "Code or Art: Which one is your 'final boss' in game dev?"
  },
  {
    id: 4,
    category: 'Quality',
    hook: "Stop using the same asset store characters as everyone else.",
    visual: "A 'line-up' of 5 identical generic asset store characters. Then, a VOID48 character walks in front of them, looking unique and stylized.",
    caption: "Your game deserves an identity, not a recycled asset. Custom characters built for YOUR world in 48 hours. Stand out. 🌟 #unity3d #unrealengine #gamedesign",
    question: "Can you spot a 'Synty' asset from a mile away? (No hate, we love them, but custom is king!)"
  },
  {
    id: 5,
    category: 'Prototype Stalling',
    hook: "How to go from 'Idea' to 'Steam Page' 10x faster.",
    visual: "Screen recording of a Steam page being set up. The 'Screenshots' section is empty until a VOID48 character is dropped into a scene.",
    caption: "Wishlists are driven by visuals. If your hero looks like a bean, nobody is clicking. VOID48 gets you 'Steam-ready' in 48 hours. 📈 #steam #indiedev #marketing",
    question: "How many wishlists are you aiming for this year?"
  },
  {
    id: 6,
    category: 'Speed',
    hook: "The weekend challenge: Build a game around THIS character.",
    visual: "A reveal of a super unique VOID48 character (e.g., a steampunk cat). The dev starts coding mechanics based on the character's look.",
    caption: "Sometimes the character inspires the mechanics. Get a custom hero in 48 hours and let the creativity flow. 🐈‍⬛ #gamejam #creativeprocess #VOID48",
    question: "Does the character come first, or the mechanics?"
  },
  {
    id: 7,
    category: 'Art Block',
    hook: "Why your 'Dream Game' is still just a folder on your desktop.",
    visual: "A folder named 'MyDreamGame_v2' being opened to reveal only code files and no art. Then showing a VOID48 character being imported.",
    caption: "Art is the bridge between a project and a product. Don't let your dream stall because you're waiting on a freelancer who ghosted you. 👻 #gamedevproblems #indiegame",
    question: "How many 'unfinished' projects do you have right now?"
  },
  {
    id: 8,
    category: 'Quality',
    hook: "3 things that make your indie game look 'cheap'.",
    visual: "Text overlays: 1. Default lighting. 2. Stiff animations. 3. Generic characters. Show a VOID48 character with custom rigging fixing #3.",
    caption: "First impressions are everything. High-quality, custom characters signal to players that your game is worth their time. 💎 #quality #gamedevtips #VOID48",
    question: "What's the first thing you notice in an indie game trailer?"
  },
  {
    id: 9,
    category: 'Prototype Stalling',
    hook: "Stop wasting months on 'temporary' art.",
    visual: "A timelapse of a dev spending 3 weeks on a 'simple' character that still looks bad. Cut to VOID48 delivering a pro version in 48 hours.",
    caption: "Your time is worth more than $0/hr. Outsource the heavy lifting and keep your momentum. 48 hours is all it takes. ⏳ #productivity #indiedevlife",
    question: "How much is one hour of your development time worth?"
  },
  {
    id: 10,
    category: 'Speed',
    hook: "I ordered a character on Monday, I'm playtesting on Wednesday.",
    visual: "Calendar view showing 'Order' on Monday and 'Playtest' on Wednesday. Show the character moving perfectly in-game.",
    caption: "Speed is the only advantage indie devs have. Use it. VOID48: Production-ready in 48 hours. ⚡ #speedrun #gamedev #VOID48",
    question: "What's the fastest you've ever built a playable level?"
  },
  {
    id: 11,
    category: 'Art Block',
    hook: "The 'Solo Dev' burnout is real. Here's how to fix it.",
    visual: "A dev looking exhausted. They outsource one character to VOID48, and their energy returns as they see their world come to life.",
    caption: "You don't have to do everything yourself. Delegating art to experts like VOID48 saves your sanity and your game. 🧠 #burnout #mentalhealth #solodev",
    question: "What part of game dev burns you out the most?"
  },
  {
    id: 12,
    category: 'Quality',
    hook: "Is your character 'Engine-Ready' or just a 3D model?",
    visual: "Showing a messy topology mesh vs. a clean VOID48 topology with proper weight painting and rigging.",
    caption: "Rigging is a nightmare. VOID48 delivers characters that are actually ready to move. No more 'spaghetti' arms. 🍝 #3dmodeling #rigging #gamedev",
    question: "Do you prefer rigging yourself or using Auto-Rig tools?"
  },
  {
    id: 13,
    category: 'Prototype Stalling',
    hook: "The secret to finishing your game in 2024.",
    visual: "A checklist: 1. Solid Core Loop. 2. VOID48 Characters. 3. Ship it. Show a 'Success' screen on Steam.",
    caption: "Finishing is a skill. VOID48 helps you cross the finish line by removing the biggest bottleneck: Art. 🏁 #finishyourgame #gamedevgoals",
    question: "What is your #1 goal for your game this year?"
  },
  {
    id: 14,
    category: 'Speed',
    hook: "48 hours to change your game's future.",
    visual: "A 'Before' shot of a boring scene. A '48 Hours Later' shot with a hero character that changes the entire vibe.",
    caption: "One character can change how investors, publishers, and players see your game. Make it count. 🚀 #pitchdeck #gamedev #VOID48",
    question: "Are you planning to pitch to a publisher or self-publish?"
  },
  {
    id: 15,
    category: 'Art Block',
    hook: "Why your 'programmer art' is holding you back.",
    visual: "Funny montage of 'bad' programmer art vs. the 'intended' look. Then VOID48 delivers the 'intended' look perfectly.",
    caption: "We love programmer art for memes, but not for sales. Upgrade your hero in 48 hours. 📉📈 #programmerart #indiegame #VOID48",
    question: "Show us your best (worst) programmer art! Tag us."
  },
  {
    id: 16,
    category: 'Quality',
    hook: "Custom characters for the price of a coffee (almost).",
    visual: "Showing a 'Price Comparison' chart: Traditional Studio (Months/$$$$) vs. VOID48 (48 Hours/$$).",
    caption: "High-end character design is finally accessible for indies. No more breaking the bank for one model. 💰 #budgetgamedev #indiebiz",
    question: "What's your biggest expense in game development?"
  },
  {
    id: 17,
    category: 'Prototype Stalling',
    hook: "Don't let 'Feature Creep' hide the lack of art.",
    visual: "A dev adding 50 new mechanics to a cube. Cut to them realizing they just need a good character to make it feel like a game.",
    caption: "Mechanics are great, but characters are who we play as. Get your hero sorted in 48 hours. 🎮 #featurecreep #gamedesign",
    question: "Have you ever added a feature just because you didn't have art ready?"
  },
  {
    id: 18,
    category: 'Speed',
    hook: "The 48-hour character delivery is here.",
    visual: "A delivery box 'opening' in a game engine, and a character steps out, ready to play.",
    caption: "The fastest character service in the industry. Production-ready. Engine-ready. VOID48. 📦 #delivery #gamedev #3dart",
    question: "If you could have any character delivered in 48 hours, what would they look like?"
  },
  {
    id: 19,
    category: 'Art Block',
    hook: "POV: You found the missing piece of your game.",
    visual: "A puzzle with one missing piece labeled 'Character Art'. VOID48 slides the piece in, and the whole picture glows.",
    caption: "The final piece of the puzzle is often the hardest to find. We build it in 48 hours. 🧩 #puzzle #indiedev #VOID48",
    question: "What's the 'missing piece' in your current project?"
  },
  {
    id: 20,
    category: 'Quality',
    hook: "Your game, but professional.",
    visual: "A quick 'Glow Up' transition from a rough prototype to a polished scene using a VOID48 character.",
    caption: "Professional results don't have to take professional timelines. 48 hours. VOID48. Let's build. 🛠️ #glowup #gamedev #indiegame",
    question: "Ready to take your game to the next level? Link in bio."
  }
];
