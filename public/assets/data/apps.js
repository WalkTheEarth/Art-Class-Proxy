var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
      
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "https://discord.com/app",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "telegram",
      "title": "Telegram",
      "url": "https://web.telegram.org/a/",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png'
    }, 
    {
      "id": "guilded",
      "title": "Guilded",
      "url": "https://www.guilded.gg/",
      'image': 'https://yt3.googleusercontent.com/cPlwwgZkQQgHRLAg7jvJG4yKGLDId6NH7H_S87TCoEV_dbsF9Me_4YSBL5DyMsndx6hzoZxHUw=s176-c-k-c0x00ffffff-no-rj'
    },
    {
      "id": "geforce",
      "title": "GeForce NOW (may not work)",
      "url": "https://play.geforcenow.com",
      'image': 'https://raw.githubusercontent.com/proudparrot2/cdn/main/8z9zeDIT_400x400-removebg-preview.png'
    },
    {
      'id': 'vscode',
      'title': 'Visual Studio Code',
      'url': 'https://vscode.dev/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
    },
    {
      "id": "reddit",
      "title": "Reddit",
      "url": "https://reddit.com",
      'image': 'https://www.redditinc.com/assets/images/site/reddit-logo.png'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://m.youtube.com",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png'
    },
    {
      "id": "twitter",
      "title": "Twitter",
      "url": "https://twitter.com",
      'image': 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'
    },
    {
      'id': 'chess',
      'title': 'Chess.com',
      'url': 'https://chess.com',
      'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
    },
    {
      'id': 'movie-web',
      'title': 'movie-web',
      'url': 'http://movie-web.us/',
      'image': 'https://github.com/movie-web/movie-web/blob/dev/public/android-chrome-512x512.png?raw=true'
    },
    {
      'id': 'coolmathgames',
      'title': 'Cool Math Games',
      'url': 'https://coolmathgames.com',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512'
    },
    {
      'id': 'win11',
      'title': 'Windows 11 in React',
      'url': 'https://win11.blueedge.me/',
      "image": "https://cdn.upload.systems/uploads/lnysPmIS.png",
      "description": "A remake of the Windows 11 UI in React.js"
    },
    {
      'id': 'win10',
      'title': 'Windows 10 in React',
      'url': 'https://win-10.vercel.app/',
      "image": "https://downlody.com/windows/files/image/Windows-10-icon.png",
      "description": "Windows 10 recreation in React.js"
    },
    {
      'id': 'winxp',
      'title': 'Windows XP in React',
      'url': 'https://www.oonjaa.com/',
      "image": "https://archive.org/services/img/1d9464dbff7a1630882d0e2090cb714c",
      "description": "Windows XP recreation in React.js"
    },
    {
      'id': 'gbaemulator',
      'title': 'GBA Emulator',
      'url': 'https://cattn.github.io/gba',
      "image": "https://cattn.github.io/gba/pwa/apple-icon-180.png",
      "description": "A Game Boy Advance retro emulator with over 3000 games, and other consoles as well"
    },
    {
     'id': 'classubl',
     'title': 'Class Unblocked',
     'url': 'https://sites.google.com/view/classunblocked',
      "image": "data:image/jpeg;base64,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",
      "description": "My Other Game Site :3"
    }
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
