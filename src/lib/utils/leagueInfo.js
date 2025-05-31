/*   STEP 1   */
export const leagueID = "1180354171184619520"; // your league ID
export const leagueName = "Free Market Economy"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Free Market Economy Year 3</p>
  <p>This week's side pot (Week 1): Most Efficient Manager. Least amount of points left on the bench.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  
    {
      "roster": 0, 
      "managerID": "998320730313973760",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "KG",
      "location": "Scituate", // (optional)
      "bio": "Draft pick connoisseur",
      "photo": "https://sleepercdn.com/uploads/117e3b49c2efbd78acffb26249453bdb.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Bobson Dugnutt", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "https://sleepercdn.com/uploads/f0b35bd6479d7aaa261cdea96737b66d.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11623, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "Picks", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Draft picks and roster slots", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 1, 
      "managerID": "784114203505045504", 
      "name": "Lou",
      "location": "Milton", // (optional)
      "bio": "Kyle Pitts' biggest fan",
      "photo": "https://sleepercdn.com/uploads/f0b35bd6479d7aaa261cdea96737b66d.jpg", 
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", 
      "mode": "Win Now", 
      "rival": {
        name: "Wagonsack", 
        link: 0, 
        image: "https://sleepercdn.com/uploads/117e3b49c2efbd78acffb26249453bdb.jpg", 
      },
      "favoritePlayer": 7553, 
      "valuePosition": "WR",
      "rookieOrVets": "Rookies", 
      "philosophy": "Wait for Kyle Pitts to breakout", 
      "tradingScale": 10, 
      "preferredContact": "Sleeper",  
    }
  //   ,
  //     {
  //     "roster": 2,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "managerID": "999508495307362304",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
  //     "name": "Derek",
  //     "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Unknown", // (optional)
  //     "bio": "",
  //     "photo": "https://sleepercdn.com/avatars/thumbs/b3338675f635c2c1f42b469621d38ec6", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Wagonsack", // Can be anything (usually your rival's name)
  //       link: 0, // manager array number within this array, or null to link back to all managers page
  //       image: "https://sleepercdn.com/uploads/117e3b49c2efbd78acffb26249453bdb.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 5859, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "", // (optional)
  //     "tradingScale": 1, // 1 - 10 (optional)
  //     "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  // {
  //     "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "managerID": "996440232788652032",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
  //     "name": "Pat",
  //     "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "The Town", // (optional)
  //     "bio": "",
  //     "photo": "https://sleepercdn.com/uploads/448d605340610174e85c7ab30cadaffe.jpg", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Nick", // Can be anything (usually your rival's name)
  //       link: 4, // manager array number within this array, or null to link back to all managers page
  //       image: "https://sleepercdn.com/avatars/thumbs/8eb8f8bf999945d523f2c4033f70473e", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 11632, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "", // (optional)
  //     "tradingScale": 10, // 1 - 10 (optional)
  //     "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "roster": 4,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "managerID": "999505927994777600",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
  //     "name": "Nick",
  //     "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "The Big Apple", // (optional)
  //     "bio": "",
  //     "photo": "https://sleepercdn.com/avatars/thumbs/8eb8f8bf999945d523f2c4033f70473e", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Pat", // Can be anything (usually your rival's name)
  //       link: 3, // manager array number within this array, or null to link back to all managers page
  //       image: "https://sleepercdn.com/uploads/117e3b49c2efbd78acffb26249453bdb.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 4034, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "", // (optional)
  //     "tradingScale": 5, // 1 - 10 (optional)
  //     "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //     {
  //     "roster": 5,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
  //     "managerID": "1000056433774346240",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
  //     "name": "Andrew",
  //     "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
  //     "location": "Boston", // (optional)
  //     "bio": "",
  //     "photo": "https://sleepercdn.com/avatars/thumbs/b3338675f635c2c1f42b469621d38ec6", // square ratio recommended (no larger than 500x500)
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Pat", // Can be anything (usually your rival's name)
  //       link: 3, // manager array number within this array, or null to link back to all managers page
  //       image: "https://sleepercdn.com/uploads/117e3b49c2efbd78acffb26249453bdb.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 9052, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  //     "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
  //     "philosophy": "", // (optional)
  //     "tradingScale": 10, // 1 - 10 (optional)
  //     "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  //   },
  //   {
  //     "roster": 6, 
  //     "managerID": "1180354171184619520", 
  //     "name": "Sav",
  //     "location": "Eastie", 
  //     "bio": "In the lab",
  //     "photo": "https://sleepercdn.com/avatars/thumbs/b3338675f635c2c1f42b469621d38ec6", 
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "ne", 
  //     "mode": "Rebuild", 
  //     "rival": {
  //       name: "Pat", 
  //       link: 3, 
  //       image: "https://sleepercdn.com/uploads/117e3b49c2efbd78acffb26249453bdb.jpg", 
  //     },
  //     "favoritePlayer": 7606, 
  //     "valuePosition": "WR",
  //     "rookieOrVets": "Vets", 
  //     "philosophy": "", 
  //     "tradingScale": 0, 
  //     "preferredContact": "Text",  
  //   },
  //   {
  //     "roster": 7, 
  //     "managerID": "784114203505045504", 
  //     "name": "Jackson",
  //     "location": "Pawtucket", 
  //     "bio": "Bama",
  //     "photo": "https://sleepercdn.com/uploads/55fb8b16c9c9e32881404f56f24b5f9a.jpg", 
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "ne", 
  //     "mode": "Dynasty", 
  //     "rival": {
  //       name: "Pat", 
  //       link: 3, 
  //       image: "https://sleepercdn.com/uploads/117e3b49c2efbd78acffb26249453bdb.jpg", 
  //     },
  //     "favoritePlayer": 8148, 
  //     "valuePosition": "WR",
  //     "rookieOrVets": "Vets", 
  //     "philosophy": "", 
  //     "tradingScale": 0, 
  //     "preferredContact": "Discord",  
  //   },
  //   {
  //     "roster": 8, 
  //     "managerID": "1091818329884545024", 
  //     "name": "Evan",
  //     "location": "Canton", 
  //     "bio": "",
  //     "photo": "https://sleepercdn.com/avatars/thumbs/b319fdf8b7b5b0359d3c78622ba4d70c", 
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "ne", 
  //     "mode": "Rebuild", 
  //     "rival": {
  //       name: "Pat", 
  //       link: 3, 
  //       image: "https://sleepercdn.com/uploads/117e3b49c2efbd78acffb26249453bdb.jpg", 
  //     },
  //     "favoritePlayer": 2028, 
  //     "valuePosition": "K",
  //     "rookieOrVets": "Vets", 
  //     "philosophy": "", 
  //     "tradingScale": 0, 
  //     "preferredContact": "Carrier Pigeon",  
  //   },
  //   {
  //     "roster": 9, 
  //     "managerID": "784114203505045504", 
  //     "name": "Waldman",
  //     "location": "Cali", 
  //     "bio": "",
  //     "photo": "https://sleepercdn.com/uploads/5d164843bf77df1fb750ea196c6a76d2.jpg", 
  //     "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
  //     "favoriteTeam": "ne", 
  //     "mode": "Win Now", 
  //     "rival": {
  //       name: "Pat", 
  //       link: 3, 
  //       image: "https://sleepercdn.com/uploads/117e3b49c2efbd78acffb26249453bdb.jpg", 
  //     },
  //     "favoritePlayer": 11604, 
  //     "valuePosition": "WR",
  //     "rookieOrVets": "Vets", 
  //     "philosophy": "", 
  //     "tradingScale": 0, 
  //     "preferredContact": "Carrier Pigeon",  
  //   }

  ]
    
