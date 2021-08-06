let xxel = {
    hometown: "Weehawken, New Jersey",
    age: 20,
    favTracks: "LMK, Where Do We Start, Monopoly, IDK",
    rank: 7,
    ETA: "Now or Never",
    comp: "Luh Kel"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + xxel.hometown + "<br>" + "Age: " + xxel.age + "<br>" + "My Favorite Tracks: " + xxel.favTracks + "<br>" + "Freshman Rank: " + xxel.rank + "<br>" + "ETA: " + xxel.ETA + "<br>" + "Draft Day Comparison: " + xxel.comp;

artistInfo.appendChild(text)