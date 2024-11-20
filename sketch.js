




let player;
let floor;
let floorImage;
let backgroundImage;
let cloudsImage;
let fronthouseImage;
let livingroomImage;
let windowClicked = false; // rob


let livingroom2Image;

let kitchenImage;
let kitchen2Image;
let bedroomImage;
let bedroom2Image;
let endingImage;



const canvasWidth = 800;
const canvasHeight = 576;
const houseWidth = 600;
const houseHeight = 500;
const houseDoorX = canvasWidth - houseWidth + 550; // 550 changes position of housedoorX
const doorWidth = 50;

let gameState = 0; //0: front of house 1: Living Room 2: Living room 2 3:kitchen 4: kitchen 2 5: bedroom
// 6: bedroom 2 7:ending

function preload() {

	floorImage = loadImage('img/floor.png')
	backgroundImage = loadImage('img/background.png')
	cloudsImage = loadImage('img/clouds.png')
	fronthouseImage = loadImage('img/fronthouse.png')
	livingroomImage = loadImage('img/livingroom.png')
	livingroom2Image = loadImage('img/livingroom2.png')
	livingroom1offImage = loadImage('img.livingroom1off.png')
	livingroom2offImage = loadImage('img.livingroom2off.png')
	kitchenImage = loadImage('img/Kitchen1.png');
	kitchen2Image = loadImage('img/Kitchen2.png');
	kitchen1offImage = loadImage('img/kitchen1off.png');
	kitchen2offImage = loadImage('img/kitchen2off.png');
	bedroomImage = loadImage('img/bedroom.png');
	bedroom2Image = loadImage('img/bedroom2.png');
	bedroom1offImage = loadImage ('img/bedroom1off.png');
	bedroom2offImage = loadImage ('img/bedroom2off.png');
	endingImage = loadImage('img/ending.png');
       
}





function setup() {
	new Canvas(canvasWidth, canvasHeight);
	displayMode('centered');
	world.gravity.y = 10;

	imageMode(CORNER);



	player = new Player(50, 0, 50);
	floor = new Floor(canvasWidth / 2, canvasHeight - 10, canvasWidth, 50);

	backgroundObj = new GenericObjects({
		x: 0,
		y: 0,
		image: backgroundImage

	});

	cloudsObj = new GenericObjects({
		x: 0,
		y: 0,
		image: cloudsImage

	});







}



function draw() {

	background(0);
	console.log("Current gameState:" + gameState + " x:"+mouseX + " y:" + mouseY);



	if (gameState === 0) {

		//front of house
		backgroundObj.draw();
		player.update();
		floor.update();
		cloudsObj.draw();
		drawHouse();

		// rob
		if (windowClicked) {
			rect(691,209, 70,40);
		}

		if (player.sprite.x + player.sprite.diameter / 2 >= houseDoorX - doorWidth) {
			gameState = 1; // Switch to Living Room state
			player.resetPosition(); // Reset player position when transitioning
		  }

	} else if (gameState === 1){

		//living room part 1
		displayLivingRoom();
		player.update();
		


		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 2; // Switch to Living Room part 2
			player.resetPosition(); // Reset player position when transitioning
		
		  }
	

	}else if (gameState === 2){

		//living room part 2
		displayLivingRoom2();
		player.update();
		
		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 3; // Switch to Kitchen
			player.resetPosition(); // Reset player position when transitioning
		  }


	}else if (gameState === 3){

		//kitchen
		displayKitchen();
		player.update();

		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 4; // Switch to Kitchen part 2
			player.resetPosition(); // Reset player position when transitioning
		  }
		
	}else if (gameState === 4){

		//kitchen part 2
		displayKitchen2();
		player.update();


		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 5; // Switch to bedroom
			player.resetPosition(); // Reset player position when transitioning
		  }

	}else if (gameState === 5){
	
		//bedroom
		displayBedroom();
		player.update();

		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 6; // Switch to bedroom part 2
			player.resetPosition(); // Reset player position when transitioning
		  }

	}else if (gameState === 6){
	
		//bedroom part 2
		displayBedroom2();
		player.update();

		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 7; // Switch to ending
			player.resetPosition(); // Reset player position when transitioning
		 }

	}else if (gameState === 7){
		displayEnding();
		player.update();
		


		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 2; // Switch to Living Room part 2
			player.resetPosition(); // Reset player position when transitioning
		
		  }
	}
}

function drawHouse(){

	let houseX = canvasWidth - houseWidth;
	const houseY = canvasHeight - 5 - houseHeight; // where the house should appear
	//let houseX = 500;
	

	if (fronthouseImage) {
		image(fronthouseImage, canvasWidth - houseWidth, houseY, houseWidth, houseHeight);    
	 } else {
        console.log("fronthouseImage not loaded");

}
}

function displayLivingRoom (){
	background (0);

	if (livingroomImage){
		image(livingroomImage, 0, 0, canvasWidth, canvasHeight);
	}else{
		console.log("living room image not loaded.")
	}

	player.update();
}

function displayLivingRoom2 (){
	background (0);

	if (livingroom2Image){
		image(livingroom2Image, 0, 0, canvasWidth, canvasHeight);
		
	}else{
		console.log("living room 2 image not loaded.")
	}


	
}

function displayKitchen (){
	
if (kitchenImage){
	image(kitchenImage, 0, 0, canvasWidth, canvasHeight);

}else{
	console.log("Kitchen Image 1 not loading.");
}
}

function displayKitchen2 (){
	
	if (kitchen2Image){
		image(kitchen2Image, 0, 0, canvasWidth, canvasHeight);
	
	}else{
		console.log("Kitchen Image 2 not loading.");
	}
	}

function displayBedroom(){

	if (bedroomImage){
		image(bedroomImage, 0, 0, canvasWidth, canvasHeight);
	}else{
		console.log('Bedroom Image not loading');
	}
	}
	
function displayBedroom2(){

	if (bedroom2Image){
		image(bedroom2Image, 0, 0, canvasWidth, canvasHeight);
	}else{
		console.log('Bedroom Image 2 not loading');
	}
	}

function displayEnding(){

	if (endingImage){
		image(endingImage, 0, 0, canvasWidth, canvasHeight);
	}else{
		console.log('Ending Image not loading');
	}
	}






class Player {
	constructor(x, y, size) {

		this.sprite = new Sprite(x, y, size, size);
		this.sprite.diameter = size;
		this.sprite.color = 'blue';
		this.positionReset = false;
	}

	update() {

		//moving 
		if (kb.pressing('left')) {
			this.sprite.vel.x = -5;
		} else if (kb.pressing('right')) {
			this.sprite.vel.x = 5;
		} else {
			this.sprite.vel.x = 0;
		}

		//restrains player from going too far off canvas
		if (this.sprite.x < 50) {
            this.sprite.x = 50;
            this.sprite.vel.x = 0;
		}

		

		if (this.sprite.y + this.sprite.diameter / 2 >= floor.y) {
			this.sprite.y = floor.y - this.sprite.diameter / 2; // Ensure player stays above floor
			this.sprite.vel.y = 0; // Stop downward velocity when touching floor
		} else {
			this.sprite.y += world.gravity.y; // Apply gravity
		}

		if (gameState ===1){
		this.checkDoor();
		}
	}

	checkDoor(){

		 //checks to see if player is in door area
		 let doorBuffer = 50;
		 console.log("Checking Door...");

		if (this.sprite.x >= houseDoorX - doorBuffer && this.sprite.x <= houseDoorX + doorWidth + doorBuffer){
			console.log("player reached the door! Changing gameState.");
			gameState = 1;
		}
	}
	resetPosition() {
        this.sprite.x = 50; 
		this.positionReset = true;
}

}



class Floor {
	constructor(x, y, width, height) {

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	update() {

		//adjusts position of the floor with scrolling element.
		let startX = this.x ;

		for (let i = -1; i <= 1; i++) {
			image(floorImage, startX + i * this.width, this.y, this.width, this.height);
	}
}
}

class GenericObjects {

		constructor({ x, y, image }) {
		this.position = { x, y };
		this.image = image;
		this.width = image.width;
		this.height = image.height;
	}

	draw() {

		if (this.image === cloudsImage) {
            const cloudHeight = 525;
            image(this.image, 0, this.position.y, canvasWidth * 10, cloudHeight);
            image(this.image, canvasWidth * 10, this.position.y, canvasWidth * 10, cloudHeight);
        } else {
            image(this.image, 0, this.position.y, canvasWidth, canvasHeight);
            image(this.image, canvasWidth, this.position.y, canvasWidth, canvasHeight);
        }
    }
}


function mouseClicked() {
	// rob
	if (gameState == 0) {
		if (mouseX > 691 && mouseX < 734 && mouseY > 209 && mouseY < 280) {
			console.log("someone clicked the window on the front of the house!")
			windowClicked = true;
		}
	}

	if (gameState == 1) {
		//if (mouseX > 691 && mouseX < 734 && mouseY > 209 && mouseY < 280) {
			//console.log("someone clicked the window on the front of the house!")
			//windowClicked = true;
		}
	if (gameState == 2) {
		//if (mouseX > 691 && mouseX < 734 && mouseY > 209 && mouseY < 280) {
			//console.log("someone clicked the window on the front of the house!")
			//windowClicked = true;
		}
	if (gameState == 3) {
			//if (mouseX > 691 && mouseX < 734 && mouseY > 209 && mouseY < 280) {
					//console.log("someone clicked the window on the front of the house!")
					//windowClicked = true;
		}
	if (gameState == 4) {
			//if (mouseX > 691 && mouseX < 734 && mouseY > 209 && mouseY < 280) {
					//console.log("someone clicked the window on the front of the house!")
					//windowClicked = true;
		}
	if (gameState == 5) {
			//if (mouseX > 691 && mouseX < 734 && mouseY > 209 && mouseY < 280) {
					//console.log("someone clicked the window on the front of the house!")
					//windowClicked = true;
		}














}




