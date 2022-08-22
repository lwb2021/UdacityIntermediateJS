// import { Dinos } from './dino.json';

// Create Dino Constructor
function Dino(dinoInfo) {
	this.species = dinoInfo.species;
	this.weight = dinoInfo.weight;
	this.height = dinoInfo.height;
	this.diet = dinoInfo.diet;
	this.where = dinoInfo.where;
	this.when = dinoInfo.when;
	this.fact = dinoInfo.fact;
	this.url = `images/${this.species.toLowerCase()}.png`
}

// Create Dino Objects
(function createDinoObjects() {
	const data = require( "./dino.json").Dinos;
	console.log('data ', data);
	const arrayDinos = [];
	for (const dino of data) {
		arrayDinos.push(new Dino(dino));
	}	
	window.arrayDinos = arrayDinos;
})();

// Create Human Object
function Human(humanInfo) {
	this.name = humanInfo.name;
	this.url = `images/human.png`;
}

// Use IIFE to get human data from form
(function() {
	const form = document.getElementById("dino-compare");
	const nameInput = document.getElementById("name");
	const feetHeight = document.getElementById("feet"); 
	const inchHeight = document.getElementById("inches"); 
	const weight = document.getElementById("weight"); 
	const diet = document.getElementById("diet"); 
	const button = document.getElementById("btn"); 
	
	const enteredInfo = {
		name: nameInput.value,
		feetHeight: feetHeight.value,
		inchHeight: inchHeight.value,
		weight: weight.value,
		diet: diet.value
	};
	console.log(123);
	window.enteredInfo = enteredInfo;
	console.log('d ', Dinos);
	
	button.addEventListener('click', () => {
		// hideForm();
		// prepareData();
		// showTiles();
		console.log(this);
	});
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
function compareHeight() {
	console.log();
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
