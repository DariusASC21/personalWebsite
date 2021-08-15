let ysn = {
    hometown: "Cleveland, Ohio",
    age: 17,
    favTracks: "Bad Vibe feat. Lil Tjay, Illegal Guns, Roll Off, Back For My Ends feat. Melvoni",
    rank: 4,
    ETA: "2022-2023",
    comp: "Lil Baby, Lil Tjay"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + ysn.hometown + "<br>" + "Age: " + ysn.age + "<br>" + "My Favorite Tracks: " + ysn.favTracks + "<br>" + "Freshman Rank: " + ysn.rank + "<br>" + "ETA: " + ysn.ETA + "<br>" + "Draft Day Comparison: " + ysn.comp;

artistInfo.appendChild(text);