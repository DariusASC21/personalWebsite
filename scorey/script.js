let scorey = {
    hometown: "Syracuse, New York",
    age: 22,
    favTracks: "Moods, Guardian Angel, Rock N Roll, Love Letter",
    rank: 9,
    ETA: "2022 - Early 2023",
    comp: "Polo G"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + scorey.hometown + "<br>" + "Age: " + scorey.age + "<br>" + "My Favorite Tracks: " + scorey.favTracks + "<br>" + "Freshman Rank: " + scorey.rank + "<br>" + "ETA: " + scorey.ETA + "<br>" + "Draft Day Comparison: " + scorey.comp;

artistInfo.appendChild(text)