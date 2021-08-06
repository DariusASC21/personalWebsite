let szn = {
    hometown: "Rochester, New York",
    age: 17,
    favTracks: "So Wrong with Jordan Knows & Brandon ThaKidd, Ride For Me, Hills, Chosen",
    rank: 8,
    ETA: "2nd Half of 2022-2024",
    comp: "24KGoldn"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + szn.hometown + "<br>" + "Age: " + szn.age + "<br>" + "My Favorite Tracks: " + szn.favTracks + "<br>" + "Freshman Rank: " + szn.rank + "<br>" + "ETA: " + szn.ETA + "<br>" + "Draft Day Comparison: " + szn.comp;

artistInfo.appendChild(text);