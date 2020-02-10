// Task 1
(a, b) => {
  a - b;
};

// Task 2
const baseUrl = "https://api.rawg.io/api/games?genres=sports";
const gamesUrl = `${baseUrl}games`;

fetch("https://api.rawg.io/api/games?genres=sports")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    loopThroughGames(json);
  })
  .catch(function() {
    document.location.href = "/error.html";
  });

function loopThroughGames(json) {
  const games = json.results;

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name);
  }
}

// Task 3
const catsText = "All cats are outragous";
const replaceCats = catsText.replace(/cats/g, "giraffes");

// Task 4
const newUrl = new URL("https://my.site.com/?userId=");
const params = new URLSearchParams(newUrl.search);

let id;

id = params.get("userId");

if (params.get("userId")) {
  ifId();
} else {
  document.location = "third.html";
}

function ifId() {
  if (10 <= id) {
    document.location = "second.html";
  } else if (10 > id) {
    document.location = "first.html";
  }
}

// Task 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
container.removeChild(button);

// Task 6
const animals = document.querySelector(".animals");
const cows = document.querySelector(".cows");
const li = document.createElement("li");
li.className = "parrots";
const liContent = document.createTextNode("Parrots");

li.appendChild(liContent);
animals.appendChild(li);
cows.after(li);

// Task 7
fetch("https://api.rawg.io/api/games/3801")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    document.querySelector(".rating").innerText = json.rating;
  })
  .catch(function(error) {
    console.log(error);
  });
