let yd = {
    hometown: "Brooklyn, New York",
    age: 19,
    favTracks: "To You, Straight To It, Act Bad",
    rank: 2,
    ETA: "2022-2025",
    comp: "22Gz, Tory Lanez"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + yd.hometown + "<br>" + "Age: " + yd.age + "<br>" + "My Favorite Tracks: " + yd.favTracks + "<br>" + "Freshman Rank: " + yd.rank + "<br>" + "ETA: " + yd.ETA + "<br>" + "Draft Day Comparison: " + yd.comp;

artistInfo.appendChild(text);