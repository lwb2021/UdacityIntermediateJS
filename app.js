const HUMAN_INDEX = 4;
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
  this.comparedDetails = dinoInfo.comparedDetails;
}

// Create Dino Objects
function createDinoObjects() {
  const arrayDinos = [];
  for (const dino of rawDinos) {
    const heightDiff = compareHeight(dino);
    const weightDiff = compareWeight(dino);
    const dietDiff = compareDiet(dino);
    dino.comparedDetails =
      dino.species === "Pigeon"
        ? `<h3>Species: ${dino.species}</h3> <br> 
           All birds are Dinosaurs.`
        : `
      <h3>Species: ${dino.species}</h3> <br>
      Weight Difference: ${weightDiff} lbs than you <br>
      Height Difference: ${heightDiff} inches than you <br>
      Diet Difference: ${humanInfo.diet}(You) VS ${dietDiff} <br>
      Fact: ${generateRandomFacts(dino)}
    `;
    arrayDinos.push(new Dino(dino));
  }
  window.arrayDinos = arrayDinos;
}

// generate random facts about the species
function generateRandomFacts(dino) {
  const randomFactsArray = [
    `${dino.species} was found at ${dino.where}`,
    `${dino.species} was found during ${dino.when}`,
    `${dino.fact}`,
  ];
  return randomFactsArray[Math.floor(Math.random() * randomFactsArray.length)];
}

// Create Human Object
function Human(humanInfo) {
  this.comparedDetails = humanInfo.comparedDetails;
  this.feetHeight = humanInfo.feetHeight;
  this.inchHeight = humanInfo.inchHeight;
  this.centimeterHeight = humanInfo.centimeterHeight;
  this.weight = humanInfo.weight;
  this.diet = humanInfo.diet;
  this.url = humanInfo.url;
}

// Switch the display status of the element
function switchUnitDisplayStatus(element, isDisplayed = true) {
  if (isDisplayed) {
    element.style.setProperty("display", "inline");
  } else {
    element.style.setProperty("display", "none");
  }
}

// Use IIFE to get human data from form
(function () {
  const unitSwitch = document.getElementById("unitSwitch");
  unitSwitch.addEventListener("change", () => {
    const feetLabel = document.getElementById("feetLabel");
    const inchLabel = document.getElementById("inchLabel");
    const metricLabel = document.getElementById("metricLabel");

    const feetInput = document.getElementById("feet");
    const inchInput = document.getElementById("inches");
    const metricInput = document.getElementById("centimeter");
    const inputArray = [feetInput, inchInput, metricInput];

    // Display or hide the elements based on the selected choice
    if (unitSwitch.value === "Metric") {
      switchUnitDisplayStatus(feetLabel, false);
      switchUnitDisplayStatus(inchLabel, false);
      switchUnitDisplayStatus(metricLabel);
    } else {
      switchUnitDisplayStatus(metricLabel, false);
      switchUnitDisplayStatus(feetLabel);
      switchUnitDisplayStatus(inchLabel);
    }

    // Add or remove 'required' attributes to the shown and hidden input elements
    inputArray.forEach((elem) => elem.toggleAttribute("required"));
  });

  const form = document.getElementById("dino-compare");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const feetHeight = document.getElementById("feet");
    const inchHeight = document.getElementById("inches");
    const centimeterHeight = document.getElementById("centimeter");
    const weight = document.getElementById("weight");
    const diet = document.getElementById("diet");
    const humanInfo = new Human({
      comparedDetails: `<h3>${nameInput.value}</h3>`,
      feetHeight: feetHeight.value,
      inchHeight: inchHeight.value,
      centimeterHeight: centimeterHeight.value,
      weight: weight.value,
      diet: diet.value,
      url: `images/human.png`,
    });
    window.humanInfo = humanInfo;

    // Hide the form
    hideForm();

    // Create all the elements for the grid
    createDinoObjects();

    // Add all the previously created elements to the grid
    generateTiles();
  });
})();

// Create height compare method
function compareHeight(dino) {
  const unitSwitch = document.getElementById("unitSwitch");
  if (unitSwitch.value === "Metric") {
    return dino.height - humanInfo.centimeterHeight / 30.48;
  }
  return (
    (dino.height * 12 - humanInfo.feetHeight * 12 - humanInfo.inchHeight) / 12
  );
}

// Create weight compare method
function compareWeight(dino) {
  return dino.weight - humanInfo.weight;
}

// Create diet compare method
function compareDiet(dino) {
  return dino.diet;
}

// Create each single element for the grid
function createSingleElement(currentObj) {
  const gridItem = document.createElement("div");
  const fullText = document.createElement("p");
  const grid = document.getElementById("grid");

  // Append comparison details to each element
  fullText.innerHTML = currentObj.comparedDetails;
  gridItem.appendChild(fullText);
  gridItem.classList.add("grid-item");

  // Insert the image to each element
  const img = document.createElement("img");
  img.src = currentObj.url;

  gridItem.appendChild(img);

  // verify the current object is a Dinosaur
  if (currentObj.where && currentObj.when) {
    const additionalText = document.createElement("p");
    additionalText.innerHTML = `
      Where: ${currentObj.where} <br>
      When: ${currentObj.when}
    `;
    additionalText.classList.add("hidden-p");
    gridItem.appendChild(additionalText);
  }

  grid.appendChild(gridItem);
}

// Generate Tiles for each Dino in Array
function generateTiles() {
  let i = 0;
  while (arrayDinos.length !== 0) {
    const currentObj =
      i === HUMAN_INDEX
        ? humanInfo
        : arrayDinos.splice(Math.random() * arrayDinos.length, 1)[0];
    createSingleElement(currentObj);
    i++;
  }
}

// Remove form from screen
function hideForm() {
  const form = document.getElementById("dino-compare");
  form.style.display = "none";
}
