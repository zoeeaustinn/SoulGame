




let player;
let floor;
let floorImage;
let backgroundImage;
let cloudsImage;
let fronthouseImage;


const canvasWidth = 800;
const canvasHeight = 576;
const houseWidth = 500;
const houseHeight = 500;
const houseDoorX = canvasWidth - houseWidth + 450;
const doorWidth = 50;

let gameState = 0; //0: front of house

function preload() {
	floorImage = loadImage('img/floor.png')
	backgroundImage = loadImage('img/background.png')
	cloudsImage = loadImage('img/clouds.png')
	fronthouseImage = loadImage('img/fronthouse.png')
       
}





function setup() {
	new Canvas(canvasWidth, canvasHeight);
	displayMode('centered');
	world.gravity.y = 10;

	imageMode(CORNER);



	player = new Player(250, 0, 50);
	floor = new Floor(canvasWidth / 2, canvasHeight - 50, canvasWidth, 50);

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

	if (gameState === 0) {
	backgroundObj.draw();
	player.update();
	floor.update();
	cloudsObj.draw();
	drawHouse();
	} else if (gameState === 1){
		displayNewCanvas();
}

}

function drawHouse(){

	let houseX = canvasWidth - houseWidth;
	let houseY = 30; // where the house should appear
	//let houseX = 500;
	

	if (fronthouseImage) {
        image(fronthouseImage, houseX, houseY, houseWidth, houseHeight); 
    } else {
        console.log("fronthouseImage not loaded");

}
}

function displayNewCanvas (){
	background (0);
	fill (255);
	textSize(32);
	textAlign(CENTER, CENTER);
	text("New Scene", canvasWidth/ 2, canvasHeight / 2);
}


class Player {
	constructor(x, y, size) {

		this.sprite = new Sprite(x, y, size, size);
		this.sprite.diameter = size;
		this.sprite.color = 'black';
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
		} else if (this.sprite.x > houseDoorX - 50) {
			this.sprite.x = houseDoorX - 50;
			this.sprite.vel.x = 0;
		}

		console.log("Player X Position:" + this.sprite.x);
		this.checkDoor();

		// checks if player is touching floor 
		if (this.sprite.y + this.sprite.diameter / 2 >= floor.y) {
			this.sprite.y = floor.y - this.sprite.diameter / 2;
			this.sprite.vel.y = 0;
		} else {
			this.sprite.y += world.gravity.y;
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







