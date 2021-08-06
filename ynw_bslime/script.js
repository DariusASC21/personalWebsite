let ynw = {
    hometown: "Gifford, Florida",
    age: 14,
    favTracks: "Hot Sauce feat. Lil Tjay, Slime Dreams, Just Want You, Nobody Else",
    rank: 5,
    ETA: "Late 2022 - Early 2024",
    comp: "Young Thug, Lil Uzi Vert, YNW Melly"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + ynw.hometown + "<br>" + "Age: " + ynw.age + "<br>" + "My Favorite Tracks: " + ynw.favTracks + "<br>" + "Freshman Rank: " + ynw.rank + "<br>" + "ETA: " + ynw.ETA + "<br>" + "Draft Day Comparison: " + ynw.comp;

artistInfo.appendChild(text);