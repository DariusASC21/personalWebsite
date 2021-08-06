let mel = {
    hometown: "Harlem, New York",
    age: 24,
    favTracks: "HML with A Boogie Wit Da Hoodie",
    rank: 10,
    ETA: "Now or Never",
    comp: "N/A"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + mel.hometown + "<br>" + "Age: " + mel.age + "<br>" + "My Favorite Tracks: " + mel.favTracks + "<br>" + "Freshman Rank: " + mel.rank + "<br>" + "ETA: " + mel.ETA + "<br>" + "Draft Day Comparison: " + mel.comp;

artistInfo.appendChild(text);