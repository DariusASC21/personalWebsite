let mel = {
    hometown: "Harlem, New York",
    age: 24,
    favTracks: "HML with A Boogie Wit Da Hoodie, Nena, No Hard Feelings",
    rank: 10,
    ETA: "Too hard to tell",
    comp: "No one"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + mel.hometown + "<br>" + "Age: " + mel.age + "<br>" + "My Favorite Tracks: " + mel.favTracks + "<br>" + "Freshman Rank: " + mel.rank + "<br>" + "ETA: " + mel.ETA + "<br>" + "Draft Day Comparison: " + mel.comp;

artistInfo.appendChild(text);