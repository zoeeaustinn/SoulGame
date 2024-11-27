




let player;
let floor;
let floorImage;
let backgroundImage;
let cloudsImage;
let fronthouseImage;
let livingroomImage;
let windowClicked = false; // rob
let lampClicked = false;
let umbrellaClicked = false;

let floralClicked = false;
let selfieClicked = false;
let babyClicked = false;
let beachClicked = false;
let balletClicked = false;
let drawerClicked = false;


let livingroom2Image;
let button1Clicked = false;
let button2Clicked = false;
let button3Clicked = false;
let button4Clicked = false;
let vhs1Clicked = false;
let vhs5Clicked = false;
let vhs11Clicked = false;
let pearlplantClicked = false;
let book1Clicked = false;
let book2Clicked = false;
let book3Clicked = false;
let ball8Clicked = false;
let board1Clicked = false;
let board2Clicked = false;
let NESClicked = false;
let vidgameClicked = false;

let kitchenImage;
let calendarClicked = false;
let letterClicked = false;
let rainbowClicked = false;
let stickfigureClicked = false;
let flowerdrawClicked = false;
let paintingonwallClicked = false;
let todoClicked = false;

let kitchen2Image;
let microwaveClicked = false;
let cookiejarClicked = false;
let faucetClicked = false;
let drawer1Clicked = false;
let drawer2Clicked = false;
let cabinet1Clicked = false;
let cabinet2Clicked = false;

let bedroomImage;
let tvClicked = false;
let roomlampClicked = false;
let dsClicked = false;
let vhsrow1Clicked = false;
let vhsrow2Clicked = false;
let vhsrow3Clicked = false;
let radioClicked = false;
let bookrow1Clicked = false;
let bookrow2Clicked = false;

let bedroom2Image;
let posterClicked = false;
let pillowClicked = false;

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
	livingroom1offImage = loadImage('img/livingroom1off.png')
	livingroom2offImage = loadImage('img/livingroom2off.png')
	umbrellaImage = loadImage('img/umbrella.png')
	umbrellaoffImage = loadImage('img/umbrellaoff.png')
	floralImage = loadImage('img/floralhighlight.png')
	selfieImage = loadImage('img/selfiehighlight.png')
	babyImage = loadImage ('img/babyhighlight.png')
	beachImage = loadImage ('img/beachhighlight.png')
	balletImage = loadImage ('img/ballethighlight.png')
	button1Image = loadImage ('img/button1.png')
	button2Image =loadImage('img/button2.png')
	button3Image = loadImage('img/button3.png')
    button4Image =loadImage('img/button4.png')
	microwaveImage = loadImage('img/microwave.png')
	faucetImage = loadImage('img/faucet.png')
	tvonImage = loadImage('img/tvon.png')
	dsonImage = loadImage('img/dson.png')



	kitchenImage = loadImage('img/Kitchen1.png');
	kitchen2Image = loadImage('img/Kitchen2.png');
	kitchen1offImage = loadImage('img/kitchen1off.png');
	kitchen2offImage = loadImage('img/kitchen2off.png');
	bedroomImage = loadImage('img/bedroom1.png');
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
		

		if (drawerClicked) {
			rect(391,437, 10,10);
		
		}else if (lampClicked && umbrellaClicked) {
			// if both umbrella and lamp are clicked it shows lampoff & umbrella shifted
			if (umbrellaoffImage) {
				image(umbrellaoffImage, 0, 0, canvasWidth, canvasHeight);
			}
		} else if (floralClicked) {
			// if floral picture is clicked, it highlights
			if (floralImage) {
				image(floralImage, 0, 0, canvasWidth, canvasHeight);
			}

		} else if (selfieClicked) {
			// if selfie picture is clicked, it highlights
			if (selfieImage) {
				image(selfieImage, 0, 0, canvasWidth, canvasHeight);
			}
		} else if (babyClicked) {
			// if baby picture is clicked, it highlights
			if (babyImage) {
				image(babyImage, 0, 0, canvasWidth, canvasHeight);
			}

		} else if (beachClicked) {
			// if beach picture is clicked, it highlights
			if (beachImage) {
				image(beachImage, 0, 0, canvasWidth, canvasHeight);
			}
		} else if (balletClicked) {
			// if ballet picture is clicked, it highlights
			if (balletImage) {
				image(balletImage, 0, 0, canvasWidth, canvasHeight);
			}
		} else if (lampClicked) {
			// if lamp is clicked, lights will turn off
			if (livingroom1offImage) {
				image(livingroom1offImage, 0, 0, canvasWidth, canvasHeight);
			}
		} else if (umbrellaClicked) {
			// if umbrella is clicked, umbrella shifts to other side
			if (umbrellaImage) {
				image(umbrellaImage, 0, 0, canvasWidth, canvasHeight);
				//displayText("this is an umbrella!");
			}
			//displayText("The umbrella has been clicked", 10, 10, 24);

		} else {
			// base living room 
			if (livingroomImage) {
				image(livingroomImage, 0, 0, canvasWidth, canvasHeight);
			}
		}

	



		//registers users location to move on to next case 
		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 2; // Switch to Living Room part 2
			player.resetPosition(); // Reset player position when transitioning
		
		} 



	} else if (gameState === 2){

		//living room part 2
		displayLivingRoom2();
		player.update();
		
		if (button1Clicked) {
        
            if (button1Image) {
                image(button1Image, 0, 0, canvasWidth, canvasHeight);
            }
		}
		if (button2Clicked) {
        
            if (button2Image) {
                image(button2Image, 0, 0, canvasWidth, canvasHeight);
            }
		}
		if (button3Clicked) {
        
            if (button3Image) {
                image(button3Image, 0, 0, canvasWidth, canvasHeight);
            }
		}
		if (button4Clicked) {
        
            if (button4Image) {
                image(button4Image, 0, 0, canvasWidth, canvasHeight);
            }
		}

		if (vhs1Clicked) {
			rect(255,469, 70,40);
		}

		if (vhs5Clicked) {
			rect(297,504, 70,40);
		}

		if (vhs11Clicked) {
			rect(344,473, 70,40);
		}

		if (pearlplantClicked) {
			rect(547,328, 70,40);
		}

		if (book1Clicked) {
			rect(545,260, 70,40);
		}

		if (book2Clicked) {
			rect(611,251, 70,40);
		}

		if (book3Clicked) {
			rect(693,256, 70,40);
		}

		if (ball8Clicked) {
			rect(664,341, 70,40);
		}

		if (board1Clicked) {
			rect(544,450, 70,40);
		}

		if (board2Clicked) {
			rect(631,454, 70,40);
		}

		if (NESClicked) {
			rect(260,527, 70,40);
		}

		if (vidgameClicked) {
			rect(336,523, 70,40);
		}




		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 3; // Switch to Kitchen
			player.resetPosition(); // Reset player position when transitioning
		  }


	}else if (gameState === 3){

		//kitchen
		displayKitchen();
		player.update();



		if (calendarClicked) {
			rect(627,225, 70,40);
		}

		if (letterClicked) {
			rect(707,404, 70,40);
		}

		if (rainbowClicked) {
			rect(673,348, 70,40);
		}

		if (stickfigureClicked) {
			rect(604,382, 70,40);
		}

		if (flowerdrawClicked) {
			rect(634,445, 70,40);
		}

		if (paintingonwallClicked) {
			rect(61,85, 70,40);
		}

		if (todoClicked) {
			rect(692,486, 70,40);
		}






		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 4; // Switch to Kitchen part 2
			player.resetPosition(); // Reset player position when transitioning
		  }
		
	}else if (gameState === 4){

		//kitchen part 2
		displayKitchen2();
		player.update();


		if (microwaveClicked) {

		if (microwaveImage) {
			image(microwaveImage, 0, 0, canvasWidth, canvasHeight);
		}
	}
		if (cookiejarClicked) {
			rect(345,295, 70,40);
		}

		if (faucetClicked) {

			if (faucetImage) {
				image(faucetImage, 0, 0, canvasWidth, canvasHeight);
		}
	}

		if (drawer1Clicked) {
			rect(42,383, 70,40);
		}

		if (drawer2Clicked) {
			rect(258,386, 70,40);
		}

		if (cabinet1Clicked) {
			rect(66,88, 70,40);
		}

		if (cabinet2Clicked) {
			rect(172,89, 70,40);
		}




		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 5; // Switch to bedroom
			player.resetPosition(); // Reset player position when transitioning
		  }

	}else if (gameState === 5){
	
		//bedroom
		displayBedroom();
		player.update();

		if (roomlampClicked) {

			if (bedroom2offImage) {
				image(bedroom2offImage, 0, 0, canvasWidth, canvasHeight);
			}
		}
		if (tvClicked) {

			if (tvonImage) {
				image(tvonImage, 0, 0, canvasWidth, canvasHeight);
			}
		}
		if (dsClicked) {

			if (dsonImage) {
				image(dsonImage, 0, 0, canvasWidth, canvasHeight);
			}
		}
		if (vhsrow1Clicked) {
			rect(107,529, 70,40);
		}

		if (vhsrow2Clicked) {
			rect(167,529, 70,40);
		}

		if (vhsrow3Clicked) {
			rect(231,528, 70,40);
		}

		if (radioClicked) {
			rect(425,534, 70,40);
		}
		if (bookrow1Clicked) {
			rect(309,466, 70,40);
		}

		if (bookrow2Clicked) {
			rect(410,478, 70,40);
		}





		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 6; // Switch to bedroom part 2
			player.resetPosition(); // Reset player position when transitioning
		  }

	}else if (gameState === 6){
	
		//bedroom part 2
		displayBedroom2();
		player.update();

		if (posterClicked) {
			rect(238,119, 70,40);
		}
		if (pillowClicked) {
			rect(432,373, 70,40);
		}


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
			console.log("player reached the door, Changing gameState.");
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
	
	if (gameState == 0) {
		if (mouseX > 691 && mouseX < 734 && mouseY > 209 && mouseY < 280) {
			console.log("someone clicked the window on the front of the house!");
			windowClicked = true;
		}
	}

	if (gameState == 1) {

		//lamp in living room 
		if (mouseX > 381 && mouseX < 455 && mouseY > 301 && mouseY < 419) {
			console.log("someone clicked on the lamp!");
			lampClicked = !lampClicked;
		}
		//umbrella in living room
		if (mouseX > 210 && mouseX < 283 && mouseY > 357 && mouseY < 567) {
			console.log("someone clicked on the umbrella!");
			umbrellaClicked = !umbrellaClicked;
		}
		//floral picture 
		if (mouseX > 203 && mouseX < 343 && mouseY > 251 && mouseY < 343) {
			console.log("someone clicked on the floral picture!");
			floralClicked = !floralClicked;
		}
		//selfie picture 
		if (mouseX > 326 && mouseX < 423 && mouseY > 107 && mouseY < 216) {
			console.log("someone clicked on the selfie photo!");
			selfieClicked = !selfieClicked;
		}
		//baby picture 
		if (mouseX > 410 && mouseX < 525 && mouseY > 255 && mouseY < 322) {
			console.log("someone clicked on the baby photo!");
			babyClicked = !babyClicked;
		}
		//beach picture 
		if (mouseX > 537 && mouseX < 680 && mouseY > 82 && mouseY < 251) {
			console.log("someone clicked on the beach picture!");
			beachClicked = !beachClicked;
		}
		//ballet picture 
		if (mouseX > 702 && mouseX < 779 && mouseY > 233 && mouseY < 332) {
			console.log("someone clicked on the umbrella!");
			balletClicked = !balletClicked;
		}
		//drawer
		if (mouseX > 391 && mouseX < 441 && mouseY > 437 && mouseY < 472) {
			console.log("someone clicked on the drawer!");
			drawerClicked = !drawerClicked;
		}


	}
	if (gameState == 2) {


			//button 1
        if (mouseX > 423 && mouseX < 431 && mouseY > 350 && mouseY < 360) {
            console.log("someone clicked on button 1!");
            button1Clicked = !button1Clicked;
        }
		    //button 2
		if (mouseX > 423 && mouseX < 432 && mouseY > 369 && mouseY < 379) {
			console.log("someone clicked on button 2!");
			button2Clicked = !button2Clicked;
		}
			//button 3
		if (mouseX > 422 && mouseX < 432 && mouseY > 387 && mouseY < 396) {
			console.log("someone clicked on button 3!");
			button3Clicked = !button3Clicked;
		}
			//button 4
		if (mouseX > 419 && mouseX < 431 && mouseY > 405 && mouseY < 414) {
			console.log("someone clicked on button 4");
			button4Clicked = !button4Clicked;
		}
			//VHS 1
        if (mouseX > 255 && mouseX < 265 && mouseY > 469 && mouseY < 506) {
            console.log("someone clicked on VHS1!");
            vhs1Clicked = !vhs1Clicked;
        }
		    //VHS 5
		if (mouseX > 297 && mouseX < 304 && mouseY > 473 && mouseY < 504) {
			console.log("someone clicked on VHS5!");
			vhs5Clicked = !vhs5Clicked;
		}
			//VHS 11
		if (mouseX > 344 && mouseX < 356 && mouseY > 473 && mouseY < 504) {
			console.log("someone clicked on VHS11!");
			vhs11Clicked = !vhs11Clicked;
		}
			//Plant on shelf
		if (mouseX > 547 && mouseX < 588 && mouseY > 328 && mouseY < 373) {
			console.log("someone clicked on the plant on the shelf");
			pearlplantClicked = !pearlplantClicked;
		}
			//books 1 on shelf green - pink
        if (mouseX > 545 && mouseX < 689 && mouseY > 260 && mouseY < 299) {
            book1Clicked = !book1Clicked;
        }
		    //books 2 on shelf grey - purple
		if (mouseX > 611 && mouseX < 690 && mouseY > 251 && mouseY < 299) {
			book2Clicked = !book2Clicked;
		}
			//books 3 on the shelf light red - green 
		if (mouseX > 693 && mouseX < 766 && mouseY > 256 && mouseY < 299) {
			book3Clicked = !book3Clicked;
		}
			//8 ball
		if (mouseX > 664 && mouseX < 685 && mouseY > 341 && mouseY < 365) {
			ball8Clicked = !ball8Clicked;
		}
			//board games on the left
        if (mouseX > 544 && mouseX < 626 && mouseY > 450 && mouseY < 492) {
            board1Clicked = !board1Clicked;
        }
		    //board games on the right 
		if (mouseX > 631 && mouseX < 705 && mouseY > 454 && mouseY < 489) {
			board2Clicked = !board2Clicked;
		}
			//NES under tv
		if (mouseX > 260 && mouseX < 321 && mouseY > 527 && mouseY < 556) {
			NESClicked = !NESClicked;
		}
			//video games next to NES
		if (mouseX > 336 && mouseX < 399 && mouseY > 523 && mouseY < 558) {
			vidgameClicked = !vidgameClicked;
		}

	}






	if (gameState == 3) {

			//Calendar
		if (mouseX > 627 && mouseX < 739 && mouseY > 225 && mouseY < 310) {
			calendarClicked = !calendarClicked;
		}
			//letter on fridge
		if (mouseX > 707 && mouseX < 743 && mouseY > 404 && mouseY < 447) {
			letterClicked = !letterClicked;
		}
			//rainbow drawing on fridge
        if (mouseX > 673 && mouseX < 695 && mouseY > 348 && mouseY < 371) {
            rainbowClicked = !rainbowClicked;
        }
		    //stick figure drawing on fridge
		if (mouseX > 604 && mouseX < 634 && mouseY > 382 && mouseY < 406) {
			stickfigureClicked = !stickfigureClicked;
		}
			//flower drawing on fridge
		if (mouseX > 634 && mouseX < 663 && mouseY > 445 && mouseY < 475) {
			flowerdrawClicked = !flowerdrawClicked;
		}
			//random painting on the wall
		if (mouseX > 61 && mouseX < 215 && mouseY > 85 && mouseY < 303) {
			paintingonwallClicked = !paintingonwallClicked;
		}
			//to-do list
		if (mouseX > 692 && mouseX < 720 && mouseY > 486 && mouseY < 523) {
			todoClicked = !todoClicked;
		}
	}

	if (gameState == 4) {


		
			//microwave
		if (mouseX > 40 && mouseX < 207 && mouseY > 281 && mouseY < 367) {
			microwaveClicked = !microwaveClicked;
		}
			//cookie jar
		if (mouseX > 345 && mouseX < 393 && mouseY > 295 && mouseY < 364) {
			cookiejarClicked = !cookiejarClicked;
		}
			//faucet
        if (mouseX > 670 && mouseX < 695 && mouseY > 299 && mouseY < 346) {
            faucetClicked = !faucetClicked;
        }
		    //1st drawer
		if (mouseX > 42 && mouseX < 234 && mouseY > 383 && mouseY < 434) {
			drawer1Clicked = !drawer1Clicked;
		}
			//2nd drawer
		if (mouseX > 258 && mouseX < 480 && mouseY > 386 && mouseY < 437) {
			drawer2Clicked = !drawer2Clicked;
		}
			//1st cabinet
		if (mouseX > 66 && mouseX < 154 && mouseY > 88 && mouseY < 243) {
			cabinet1Clicked = !cabinet1Clicked;
		}
			//2nd cabinet 
		if (mouseX > 172 && mouseX < 263 && mouseY > 89 && mouseY < 244) {
			cabinet2Clicked = !cabinet2Clicked;
		}
	}
			
	if (gameState == 5) {

			//room lamp
		if (mouseX > 110 && mouseX < 165 && mouseY > 344 && mouseY < 442) {
			roomlampClicked = !roomlampClicked;
		}
			//tv 
        if (mouseX > 208 && mouseX < 389 && mouseY > 304 && mouseY < 439) {
            tvClicked = !tvClicked;
        }
		    //ds
		if (mouseX > 425 && mouseX < 487 && mouseY > 408 && mouseY < 439) {
			dsClicked = !dsClicked;
		}
			//vhs row 1  
		if (mouseX > 107 && mouseX < 161 && mouseY > 529 && mouseY < 560) {
			vhsrow1Clicked = !vhsrow1Clicked;
		}
			//vhs row 2 
		if (mouseX > 167 && mouseX < 226 && mouseY > 529 && mouseY < 559) {
			vhsrow2Clicked = !vhsrow2Clicked;
		}
			//vhs row 3 
        if (mouseX > 231 && mouseX < 286 && mouseY > 528 && mouseY < 558) {
            vhsrow3Clicked = !vhsrow3Clicked;
        }
		    //radio
		if (mouseX > 425 && mouseX < 485 && mouseY > 534 && mouseY < 556) {
			radioClicked = !radioClicked;
		}
			//book row 1 
		if (mouseX > 309 && mouseX < 402 && mouseY > 466 && mouseY < 509) {
			bookrow1Clicked = !bookrow1Clicked;
		}
			//book row 2
		if (mouseX > 410 && mouseX < 513 && mouseY > 478 && mouseY < 506) {
			bookrow2Clicked = !bookrow2Clicked;
		}

		
	}

	if (gameState == 6) {

			//poster
		if (mouseX > 238 && mouseX < 370 && mouseY > 119 && mouseY < 313) {
			posterClicked = !posterClicked;
		}
			//pillow
        if (mouseX > 432 && mouseX < 547 && mouseY > 373 && mouseY < 450) {
            pillowClicked = !pillowClicked;
        }



}
}
