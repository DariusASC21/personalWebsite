let curlyJ = {
    hometown: "West Hempstead, New York",
    age: 21,
    favTracks: "Star, Bag Different 3.0, One of the Best" ,
    rank: 3,
    ETA: "2022-2024",
    comp: "Lil Tjay"
};

let artistInfo = document.querySelector("#info");
let text = document.createElement("ul");

text.innerHTML = "Hails From: " + curlyJ.hometown + "<br>" + "Age: " + curlyJ.age + "<br>" + "My Favorite Tracks: " + curlyJ.favTracks + "<br>" + "Freshman Rank: " + curlyJ.rank + "<br>" + "ETA: " + curlyJ.ETA + "<br>" + "Draft Day Comparison: " + curlyJ.comp;

artistInfo.appendChild(text)
