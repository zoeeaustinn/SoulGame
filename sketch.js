




let player;
let floor;
let floorImage;
let backgroundImage;
let cloudsImage;

let scrollOffset = 0;
let backgroundOffset = 0;
let cloudOffset = 0;
const canvasWidth = 1024;
const canvasHeight = 576;

function preload() {
	floorImage = loadImage('img/floor.png')
	backgroundImage = loadImage('img/background.png')
	cloudsImage = loadImage('img/clouds.png')

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


	backgroundObj.draw();

	player.update();
	scrollCanvas();
	floor.update();

	cloudsObj.draw();

}

function scrollCanvas() {

	if (player.sprite.x > 300) {
		scrollOffset -= 3;
		backgroundOffset -= 1;
		cloudOffset -= 2;
	} else if (player.sprite.x < 100) {
		scrollOffset += 3;
		backgroundOffset += 1;
		cloudOffset += 2;
	}

	scrollOffset = constrain(scrollOffset, -canvasWidth, canvasWidth);
	backgroundOffset = constrain(backgroundOffset, -canvasWidth, 0);
	cloudOffset = constrain(cloudOffset, -canvasWidth, 0);
}


class Player {
	constructor(x, y, size) {

		this.sprite = new Sprite(x, y, size, size);
		this.sprite.diameter = size;
		this.sprite.color = 'pink';
	}

	update() {

		//moving 
		if (kb.pressing('left')) {
			this.sprite.vel.x = -3;
		} else if (kb.pressing('right')) {
			this.sprite.vel.x = 3;
		} else {
			this.sprite.vel.x = 0;
		}

		//keeps player from going off canvas
		if (this.sprite.x < 50) {
			this.sprite.x = 50;
			this.sprite.vel.x = 0;
		} else if (this.sprite.x > canvasWidth - 50) {
			this.sprite.x = canvasWidth - 50;
			this.sprite.vel.x = 0;
		}



		// checks if player is touching floor 
		if (this.sprite.y + this.sprite.diameter / 2 >= floor.y) {

			this.sprite.y = floor.y - this.sprite.diameter / 2;
			this.sprite.vel.y = 0;
		} else {

			this.sprite.y += world.gravity.y;
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
		let startX = this.x + scrollOffset;

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
			const cloudHeight = 525; // Set the desired height for clouds




			//draw image at 0 	
			image(this.image, cloudOffset, this.position.y, canvasWidth * 10, cloudHeight);
			//draw a second image for tiling 
			image(this.image, cloudOffset + canvasWidth * 10, this.position.y, canvasWidth * 10, cloudHeight);
		} else {
			//draw image at 0 
			image(this.image, backgroundOffset, this.position.y, canvasWidth, canvasHeight);

			image(this.image, backgroundOffset + canvasWidth, this.position.y, canvasWidth, canvasHeight);
		}
	}
}









//function animate(){
//player.update();


//animate()
