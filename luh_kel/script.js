let kel = {
    hometown: "St. Louis, Missouri",
    age: 19,
    favTracks: "Wrong feat. Lil Tjay, Feen feat. Trippie Redd",
    rank: 6,
    ETA: "By the end of 2022",
    comp: "YK Osiris & Lil Tjay"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + kel.hometown + "<br>" + "Age: " + kel.age + "<br>" + "My Favorite Tracks: " + kel.favTracks + "<br>" + "Freshman Rank: " + kel.rank + "<br>" + "ETA: " + kel.ETA + "<br>" + "Draft Day Comparison: " + kel.comp;

artistInfo.appendChild(text)