const rawDinos = [
  {
    species: "Triceratops",
    weight: 13000,
    height: 114,
    diet: "herbavor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "First discovered in 1889 by Othniel Charles Marsh",
  },
  {
    species: "Tyrannosaurus Rex",
    weight: 11905,
    height: 144,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "The largest known skull measures in at 5 feet long.",
  },
  {
    species: "Anklyosaurus",
    weight: 10500,
    height: 55,
    diet: "herbavor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Anklyosaurus survived for approximately 135 million years.",
  },
  {
    species: "Brachiosaurus",
    weight: 70000,
    height: "372",
    diet: "herbavor",
    where: "North America",
    when: "Late Jurasic",
    fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
  },
  {
    species: "Stegosaurus",
    weight: 11600,
    height: 79,
    diet: "herbavor",
    where: "North America, Europe, Asia",
    when: "Late Jurasic to Early Cretaceous",
    fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
  },
  {
    species: "Elasmosaurus",
    weight: 16000,
    height: 59,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
  },
  {
    species: "Pteranodon",
    weight: 44,
    height: 20,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
  },
  {
    species: "Pigeon",
    weight: 0.5,
    height: 9,
    diet: "herbavor",
    where: "World Wide",
    when: "Holocene",
    fact: "All birds are living dinosaurs.",
  },
];

// Create Dino Constructor
function Dino(dinoInfo) {
  this.species = dinoInfo.species;
  this.weight = dinoInfo.weight;
  this.height = dinoInfo.height;
  this.diet = dinoInfo.diet;
  this.where = dinoInfo.where;
  this.when = dinoInfo.when;
  this.fact = dinoInfo.fact;
  this.url = `images/${this.species.toLowerCase()}.png`;
}

// Create Dino Objects
(function createDinoObjects() {
  const arrayDinos = [];
  for (const dino of rawDinos) {
    arrayDinos.push(new Dino(dino));
  }
  window.arrayDinos = arrayDinos;
})();

// Create Human Object
function Human(humanInfo) {
  this.name = humanInfo.name;
  this.url = `images/human.png`;
}

function hideForm() {
  const form = document.getElementById("dino-compare");
  form.style.display = "none";
}

function prepareData() {
  return {
    heightDiff: compareHeight(),
    weightDiff: compareWeight(),
    dietDiff: compareDiet(),
  };
}

// Use IIFE to get human data from form
(function () {
  const grid = document.getElementById("grid");
  const button = document.getElementById("btn");
  console.log(" 123 ", grid);
  window.grid = grid;

  button.addEventListener("click", () => {
    // showTiles();
    const nameInput = document.getElementById("name");
    const feetHeight = document.getElementById("feet");
    const inchHeight = document.getElementById("inches");
    const weight = document.getElementById("weight");
    const diet = document.getElementById("diet");
    const userInfo = {
      name: nameInput.value,
      feetHeight: feetHeight.value,
      inchHeight: inchHeight.value,
      weight: weight.value,
      diet: diet.value,
    };
    window.userInfo = userInfo;

    hideForm();
    const { heightDiff, weightDiff, dietDiff } = prepareData();
  });
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight() {
  const heightDiff = {};
  for (const dino of arrayDinos) {
    heightDiff[dino.species] =
      (dino.height * 12 - userInfo.feetHeight * 12 - userInfo.inchHeight) / 12;
  }
  return heightDiff;
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight() {
  const weightDiff = {};
  for (const dino of arrayDinos) {
    weightDiff[dino.species] = dino.weight - userInfo.weight;
  }
  return weightDiff;
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet() {
  const dietDiff = {};
  for (const dino of arrayDinos) {
    dietDiff[dino.species] = dino.diet;
  }
  return dietDiff;
}

// Generate Tiles for each Dino in Array
function showTiles() {
  const gridItem = document.createElement("div");
  const para = document.createElement("p");
  para.innerText = "This is a paragraph.";
  gridItem.appendChild(para);
  gridItem.classList.add("grid-item");
  grid.appendChild(gridItem);
}

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
