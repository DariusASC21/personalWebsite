let dc = {
    hometown: "Milwaukee, Wisconsin",
    age: 22,
    favTracks: "Wait Your Turn, Jesus Can't Save You, Rag3 Kidd, Rock Out",
    rank: 1,
    ETA: "Late 2021 - Early 2023",
    comp: "XXXTentacion, Trippie Redd"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + dc.hometown + "<br>" + "Age: " + dc.age + "<br>" + "My Favorite Tracks: " + dc.favTracks + "<br>" + "Freshman Rank: " + dc.rank + "<br>" + "ETA: " + dc.ETA + "<br>" + "Draft Day Comparison: " + dc.comp;

artistInfo.appendChild(text)
