let xxel = {
    hometown: "Weehawken, New Jersey",
    age: 20,
    favTracks: "LMK, MNU, Where Do I Start, Monopoly with DJ Diddy, IDK (Imperfect) with R3HAB",
    rank: 8,
    ETA: "Now or Never",
    comp: "Pop-Oriented Luh Kel"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + xxel.hometown + "<br>" + "Age: " + xxel.age + "<br>" + "My Favorite Tracks: " + xxel.favTracks + "<br>" + "Freshman Rank: " + xxel.rank + "<br>" + "ETA: " + xxel.ETA + "<br>" + "Draft Day Comparison: " + xxel.comp;

artistInfo.appendChild(text)