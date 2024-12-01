




let player;
let floor;
let floorImage;
let backgroundImage;
let cloudsImage;
let fronthouseImage;
let carImage;
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
	carImage = loadImage('img/car.png')
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
	movingrightImage = loadImage('img/movingright.png');
	movingleftImage = loadImage('img/movingleft.png');
}





function setup() {
	new Canvas(canvasWidth, canvasHeight);
	displayMode('centered');
	world.gravity.y = 10;

	imageMode(CORNER);



	player = new Player(50, 360, 50);
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
		image(carImage, -150, 330, 400, 300);
		text("Use key arrows to move left or right,", 15, 25);
		text("and the mouse to click on objects to explore more.", 15, 55);
		textSize(20);
		fill(0);
	
		// rob
		if (windowClicked) {
			rect(691,209, 70,40);
		}
		if (player.sprite.x > 150){
			text("Hello? hello? nobody is picking up....", 20, 200);
			textSize(20);
		} if (player.sprite.x > 550){
			text("I guess no one is home right now.", 20, 220);
			textSize(20);
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
			text("Just a drawer, with some pens, and some stitching needles...", 25, 60);
			textSize(20);
			fill(255);
		
		}else if (lampClicked && umbrellaClicked) {
			// if both umbrella and lamp are clicked it shows lampoff & umbrella shifted
			if (umbrellaoffImage) {
				image(umbrellaoffImage, 0, 0, canvasWidth, canvasHeight);
			}
		} else if (floralClicked) {
			// if floral picture is clicked, it highlights
			if (floralImage) {
				image(floralImage, 0, 0, canvasWidth, canvasHeight);
				text("Sunflower and roses are mom's favorite...", 25, 60);
				textSize(20);
				fill(255);
			}

		} else if (selfieClicked) {
			// if selfie picture is clicked, it highlights
			if (selfieImage) {
				image(selfieImage, 0, 0, canvasWidth, canvasHeight);
				text("I remember this, me and mom took a girl's day.", 20, 65);
				text("she even picked me up early from school.", 20, 85);
				textSize(20);
				fill(255);
			}
		} else if (babyClicked) {
			// if baby picture is clicked, it highlights
			if (babyImage) {
				image(babyImage, 0, 0, canvasWidth, canvasHeight);
				text("Awe, I remember that photo. That was my first time swimming.", 25, 60);
				textSize(20);
				fill(255);
				
			}

		} else if (beachClicked) {
			// if beach picture is clicked, it highlights
			if (beachImage) {
				image(beachImage, 0, 0, canvasWidth, canvasHeight);
				text("The first time at the beach was so much fun, ", 30, 65);
				text("I remember we spent hours collecting seashells.", 30, 85);
				textSize(20);
				fill(255);
			}
		} else if (balletClicked) {
			// if ballet picture is clicked, it highlights
			if (balletImage) {
				image(balletImage, 0, 0, canvasWidth, canvasHeight);
				text("My first ballet solo...I remember being nervous,", 30, 66);
				text("but mom and dad were so proud.", 30, 85);
				textSize(20);
				fill(255);
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
				text("I remember coming to the living room, when I didn't feel good", 30, 25);
				text("or couldn't sleep, and this show was always on in the mornings.", 30, 45);
				textSize(20);
				fill(255);
            }
		}
		if (button3Clicked) {
        
            if (button3Image) {
                image(button3Image, 0, 0, canvasWidth, canvasHeight);
				text("Awee my favorite cartoon...The Flintstones", 30, 25);
				textSize(20);
				fill(255);
				
            }
		}
		if (button4Clicked) {
        
            if (button4Image) {
                image(button4Image, 0, 0, canvasWidth, canvasHeight);
				text("This is what I watched Spongebob on alot too...", 30, 25);
				textSize(20);
				fill(255);
				
            }
		}

		if (vhs1Clicked) {
			text("VHS tapes of The Little Mermaid, Toy Story...", 30, 25);
			textSize(20);
			fill(255);
		}

		if (vhs11Clicked) {
			text("More VHS tapes of Cars, Pocahontas ...", 30, 25);
			textSize(20);
			fill(255);
		}

		if (pearlplantClicked) {
			text("Mom always tends to her plants, like they are her children too.",30, 25);
			textSize(20);
			fill(255);
				
		}

		if (book1Clicked) {
			text("The Help...The Bible...Crossword puzzles....", 30, 25);
			textSize(20);
			fill(255);
		}

		if (book2Clicked) {
			text("Diary of a wimpy kid...Goosebumps...Junie B. Jones", 25, 25);
			textSize(20);
			fill(255);
		}

		if (book3Clicked) {
			text("The Shining...word search...and some random magazines...", 30, 25);
			textSize(20);
			fill(255);
		}

		if (ball8Clicked) {
			text("My favorite 8 ball! I was obssessed with letting,", 30, 25);
			text("this make decisions for me.", 30, 45);
			textSize(20);
			fill(255);
		}

		if (board1Clicked) {
			text("Baby albums, and school photos...", 25, 25);
			textSize(20);
			fill(255);
		}

		if (board2Clicked) {
			text("Monopoly....Scrabble...", 25, 25);
			textSize(20);
			fill(255);
		}

		if (NESClicked) {
			text("Mom kept her NES, and all her games. My favorite game was Dr. Mario,", 25, 25);
			text("we use to play all night... ", 25, 45);
			textSize(20);
			fill(255);		}

		if (vidgameClicked) {
			text("Dvds of Polar Express...Monsters Inc...The Chronicles of Narnia...", 25, 25);
			textSize(20);
			fill(255);
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
			text("I loved flipping the calendar pages each month when I was little, ",25, 25);
			text("always decorating in markers and stickers...",25, 45);
			textSize(20);
			fill(0);
		}

		if (letterClicked) {
			text("...Congratulations on making the Honor Roll this semester!...", 25, 25);
			textSize(20);
			fill(0);
		}

		if (rainbowClicked) {
			text("This was the rainbow I drew in kindergarten...", 25, 25);
			textSize(20);
			fill(0);
		}

		if (stickfigureClicked) {
			text("haha, I remember making this doodle of grampa...", 25, 25);
			textSize(20);
			fill(0);
		}

		if (flowerdrawClicked) {
			text("...I made this drawing for Mom, and she has always kept it.", 25, 25);
			textSize(20);
			fill(0);
		}

		if (paintingonwallClicked) {
			text("...I don't really know where this painting is from..", 25, 25);
			textSize(20);
			fill(0);
		}

		if (todoClicked) {
			text("Groceries List...milk,cheese,noodles,cream,juice...", 25, 25);
			textSize(20);
			fill(0);
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
			text("*beep*", 25, 25);
			textSize(20);
			fill(0);
		}
	}
		if (cookiejarClicked) {
			text("Grandma always collected cookie jars, and it has become family tradition now.", 25, 25);
			text("Her cookies were the best", 25, 45);
			textSize(20);
			fill(0);
		}

		if (faucetClicked) {

			if (faucetImage) {
				image(faucetImage, 0, 0, canvasWidth, canvasHeight);
		}
	}

		if (drawer1Clicked) {
			text("..Just the silverware drawer...", 25, 25);
			textSize(20);
			fill(0);
		}

		if (drawer2Clicked) {
			text("Everyone has a junk drawer....right?", 25, 25);
			textSize(20);
			fill(0);
		}

		if (cabinet1Clicked) {
			text("...Cups and water bottles in here.", 25, 25);
			textSize(20);
			fill(0);
		}

		if (cabinet2Clicked) {
			text("...Bowls and plates in here.", 25, 25);
			textSize(20);
			fill(0);
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

			if (bedroom1offImage) {
				image(bedroom1offImage, 0, 0, canvasWidth, canvasHeight);
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
			text("VHS tapes of Hercules, Lilo & Stitch, and Snow White...", 30, 45);
			textSize(20);
			fill(0);
		}

		if (vhsrow2Clicked) {
			text("VHS tapes of Tarzan, Anastasia, and Mulan...", 30, 45);
			textSize(20);
			fill(0);
		}

		if (vhsrow3Clicked) {
			text("VHS tapes of Casper, Nightmare Before Christmas, and Scooby-Doo...", 30, 45);
			textSize(20);
			fill(0);
		}

		if (radioClicked) {
			text("My old radio player! I definitely did not take care of my music dvds...", 30, 45);
			textSize(20);
			fill(0);
		}
		if (bookrow1Clicked) {
			text("Shel Silversteins A Light in the Attic, The Giving Tree,", 30, 45);
			text("and Falling up...", 30, 85);
			textSize(20);
			fill(0);
		}

		if (bookrow2Clicked) {
			text("Hi Fly Guy, Frog and Toad, and Fancy Nancy...", 30, 45);
			textSize(20);
			fill(0)
		}

		
		if (player.sprite.x > 600){
		roomlampClicked = false;
 		tvClicked = false;
 		dsClicked = false;
 		vhsrow1Clicked = false;
 		vhsrow2Clicked = false;
 		vhsrow3Clicked = false;
 		radioClicked = false;
 		bookrow1Clicked = false;
 		bookrow2Clicked = false;
		text("All my old books, and movies, and things are still here after all....", 20, 45);
		textSize(20);
		fill(0);
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
			text("My obssession with peace signs was... interesting,", 30, 45);
			text("that's how I ended up with this.", 30, 85);
			textSize(20);
			fill(0)
		}
		if (pillowClicked) {
			text("The same ol stuff, as I left it....", 20, 45);
			textSize(20);
			fill(0);
		}
		if (player.sprite.x > 500){

			posterClicked = false;
			pillowClicked = false;

			text("I didn't realize that I forgot how my childhood life was like....", 20, 45);
			text("It was nice to see all my old things again....", 20, 65);
			textSize(20);
			fill(0);


		if (player.sprite.x + player.sprite.diameter / 2 >= canvasWidth) {
			gameState = 7; // Switch to ending
			player.resetPosition(); // Reset player position when transitioning
		 }
		}
		
	}else if (gameState === 7){
		
		
		backgroundObj.draw();
		displayEnding();
		cloudsObj.draw();
		player.update();
		
		fill(0); // Ensure text is visible
		textSize(20); // Default text size for all text
		
		if (player.sprite.x > 795) {
		  textSize(50);
		  text("THE END", 100, 185);
		} else if (player.sprite.x > 650) {
		  text("Life was so different back then, I didn't realize how much I missed it....", 45, 170);
		} else if (player.sprite.x > 500) {
		  text("I guess I'll try calling again, and let them know I stopped by....", 45, 170);
		} else if (player.sprite.x > 200) {
		  text("I came to surprise Mom and Dad, It's been so long since I went off to college....", 45, 170);
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
			this.sprite.vel.x = -3;
		} else if (kb.pressing('right')) {
			this.sprite.vel.x = 3;
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
			resetAllToggles();
			windowClicked = true;
		}
	}

	if (gameState == 1) {

		//lamp in living room 
		if (mouseX > 381 && mouseX < 455 && mouseY > 301 && mouseY < 419) {
			console.log("someone clicked on the lamp!");
			resetAllToggles();
			lampClicked = !lampClicked;
		}
		//umbrella in living room
		if (mouseX > 210 && mouseX < 283 && mouseY > 357 && mouseY < 567) {
			console.log("someone clicked on the umbrella!");
			resetAllToggles();
			umbrellaClicked = !umbrellaClicked;
		}
		//floral picture 
		if (mouseX > 203 && mouseX < 343 && mouseY > 251 && mouseY < 343) {
			console.log("someone clicked on the floral picture!");
			resetAllToggles();
			floralClicked = !floralClicked;
		}
		//selfie picture 
		if (mouseX > 326 && mouseX < 423 && mouseY > 107 && mouseY < 216) {
			console.log("someone clicked on the selfie photo!");
			resetAllToggles();
			selfieClicked = !selfieClicked;
		}
		//baby picture 
		if (mouseX > 410 && mouseX < 525 && mouseY > 255 && mouseY < 322) {
			console.log("someone clicked on the baby photo!");
			resetAllToggles();
			babyClicked = !babyClicked;
		}
		//beach picture 
		if (mouseX > 537 && mouseX < 680 && mouseY > 82 && mouseY < 251) {
			console.log("someone clicked on the beach picture!");
			resetAllToggles();
			beachClicked = !beachClicked;
		}
		//ballet picture 
		if (mouseX > 702 && mouseX < 779 && mouseY > 233 && mouseY < 332) {
			console.log("someone clicked on the umbrella!");
			resetAllToggles();
			balletClicked = !balletClicked;
		}
		//drawer
		if (mouseX > 391 && mouseX < 441 && mouseY > 437 && mouseY < 472) {
			console.log("someone clicked on the drawer!");
			resetAllToggles();
			drawerClicked = !drawerClicked;
		}


	}
	if (gameState == 2) {


			//button 1
        if (mouseX > 423 && mouseX < 431 && mouseY > 350 && mouseY < 360) {
            console.log("someone clicked on button 1!");
			resetAllToggles();
            button1Clicked = !button1Clicked;
        }
		    //button 2
		if (mouseX > 423 && mouseX < 432 && mouseY > 369 && mouseY < 379) {
			console.log("someone clicked on button 2!");
			resetAllToggles();
			button2Clicked = !button2Clicked;
		}
			//button 3
		if (mouseX > 422 && mouseX < 432 && mouseY > 387 && mouseY < 396) {
			console.log("someone clicked on button 3!");
			resetAllToggles();
			button3Clicked = !button3Clicked;
		}
			//button 4
		if (mouseX > 419 && mouseX < 431 && mouseY > 405 && mouseY < 414) {
			console.log("someone clicked on button 4");
			resetAllToggles();
			button4Clicked = !button4Clicked;
		}
			//VHS 1
        if (mouseX > 255 && mouseX < 302 && mouseY > 469 && mouseY < 506) {
            console.log("someone clicked on VHS1!");
			resetAllToggles();
            vhs1Clicked = !vhs1Clicked;
        }
		    //VHS 5
		if (mouseX > 310 && mouseX < 350 && mouseY > 475 && mouseY < 506) {
			console.log("someone clicked on VHS5!");
			rresetAllToggles();
			vhs5Clicked = !vhs5Clicked;
		}
			//VHS 11
		if (mouseX > 360 && mouseX < 388 && mouseY > 473 && mouseY < 506) {
			console.log("someone clicked on VHS11!");
			resetAllToggles();
			vhs11Clicked = !vhs11Clicked;
		}
			//Plant on shelf
		if (mouseX > 547 && mouseX < 588 && mouseY > 328 && mouseY < 373) {
			console.log("someone clicked on the plant on the shelf");
			resetAllToggles();
			pearlplantClicked = !pearlplantClicked;
		}
			//books 1 on shelf green - pink
        if (mouseX > 545 && mouseX < 607 && mouseY > 260 && mouseY < 299) {
			resetAllToggles();
            book1Clicked = !book1Clicked;
        }
		    //books 2 on shelf grey - purple
		if (mouseX > 611 && mouseX < 690 && mouseY > 251 && mouseY < 299) {
			resetAllToggles();
			book2Clicked = !book2Clicked;
		}
			//books 3 on the shelf light red - green 
		if (mouseX > 693 && mouseX < 766 && mouseY > 256 && mouseY < 299) {
			resetAllToggles();
			book3Clicked = !book3Clicked;
		}
			//8 ball
		if (mouseX > 664 && mouseX < 685 && mouseY > 341 && mouseY < 365) {
			resetAllToggles();
			ball8Clicked = !ball8Clicked;
		}
			//board games on the left
        if (mouseX > 544 && mouseX < 626 && mouseY > 450 && mouseY < 492) {
			resetAllToggles();
            board1Clicked = !board1Clicked;
        }
		    //board games on the right 
		if (mouseX > 631 && mouseX < 705 && mouseY > 454 && mouseY < 489) {
			resetAllToggles();
			board2Clicked = !board2Clicked;
		}
			//NES under tv
		if (mouseX > 260 && mouseX < 321 && mouseY > 527 && mouseY < 556) {
			resetAllToggles();
			NESClicked = !NESClicked;
		}
			//video games next to NES
		if (mouseX > 336 && mouseX < 399 && mouseY > 523 && mouseY < 558) {
			resetAllToggles();
			vidgameClicked = !vidgameClicked;
		}

	}

	if (gameState == 3) {

			//Calendar
		if (mouseX > 627 && mouseX < 739 && mouseY > 225 && mouseY < 310) {
			resetAllToggles();
			calendarClicked = !calendarClicked;
		}
			//letter on fridge
		if (mouseX > 707 && mouseX < 743 && mouseY > 404 && mouseY < 447) {
			resetAllToggles();
			letterClicked = !letterClicked;
		}
			//rainbow drawing on fridge
        if (mouseX > 673 && mouseX < 695 && mouseY > 348 && mouseY < 371) {
			resetAllToggles();
            rainbowClicked = !rainbowClicked;
        }
		    //stick figure drawing on fridge
		if (mouseX > 604 && mouseX < 634 && mouseY > 382 && mouseY < 406) {
			resetAllToggles();
			stickfigureClicked = !stickfigureClicked;
		}
			//flower drawing on fridge
		if (mouseX > 634 && mouseX < 663 && mouseY > 445 && mouseY < 475) {
			resetAllToggles();
			flowerdrawClicked = !flowerdrawClicked;
		}
			//random painting on the wall
		if (mouseX > 61 && mouseX < 215 && mouseY > 85 && mouseY < 303) {
			resetAllToggles();
			paintingonwallClicked = !paintingonwallClicked;
		}
			//to-do list
		if (mouseX > 692 && mouseX < 720 && mouseY > 486 && mouseY < 523) {
			resetAllToggles();
			todoClicked = !todoClicked;
		}
	}

	if (gameState == 4) {


		
			//microwave
		if (mouseX > 40 && mouseX < 207 && mouseY > 281 && mouseY < 367) {
			resetAllToggles();
			microwaveClicked = !microwaveClicked;
		}
			//cookie jar
		if (mouseX > 345 && mouseX < 393 && mouseY > 295 && mouseY < 364) {
			resetAllToggles();
			cookiejarClicked = !cookiejarClicked;
		}
			//faucet
        if (mouseX > 670 && mouseX < 695 && mouseY > 299 && mouseY < 346) {
			resetAllToggles();
            faucetClicked = !faucetClicked;
        }
		    //1st drawer
		if (mouseX > 42 && mouseX < 234 && mouseY > 383 && mouseY < 434) {
			resetAllToggles();
			drawer1Clicked = !drawer1Clicked;
		}
			//2nd drawer
		if (mouseX > 258 && mouseX < 480 && mouseY > 386 && mouseY < 437) {
			resetAllToggles();
			drawer2Clicked = !drawer2Clicked;
		}
			//1st cabinet
		if (mouseX > 66 && mouseX < 154 && mouseY > 88 && mouseY < 243) {
			resetAllToggles();
			cabinet1Clicked = !cabinet1Clicked;
		}
			//2nd cabinet 
		if (mouseX > 172 && mouseX < 263 && mouseY > 89 && mouseY < 244) {
			resetAllToggles();
			cabinet2Clicked = !cabinet2Clicked;
		}
	}
			
	if (gameState == 5) {

			//room lamp
		if (mouseX > 110 && mouseX < 165 && mouseY > 344 && mouseY < 442) {
			resetAllToggles();
			roomlampClicked = !roomlampClicked;
		}
			//tv 
        if (mouseX > 208 && mouseX < 389 && mouseY > 304 && mouseY < 439) {
			resetAllToggles();
            tvClicked = !tvClicked;
        }
		    //ds
		if (mouseX > 425 && mouseX < 487 && mouseY > 408 && mouseY < 439) {
			resetAllToggles();
			dsClicked = !dsClicked;
		}
			//vhs row 1  
		if (mouseX > 107 && mouseX < 161 && mouseY > 529 && mouseY < 560) {
			resetAllToggles();
			vhsrow1Clicked = !vhsrow1Clicked;
		}
			//vhs row 2 
		if (mouseX > 167 && mouseX < 226 && mouseY > 529 && mouseY < 559) {
			resetAllToggles();
			vhsrow2Clicked = !vhsrow2Clicked;
		}
			//vhs row 3 
        if (mouseX > 231 && mouseX < 286 && mouseY > 528 && mouseY < 558) {
			resetAllToggles();
            vhsrow3Clicked = !vhsrow3Clicked;
        }
		    //radio
		if (mouseX > 425 && mouseX < 485 && mouseY > 534 && mouseY < 556) {
			resetAllToggles();
			radioClicked = !radioClicked;
		}
			//book row 1 
		if (mouseX > 309 && mouseX < 402 && mouseY > 466 && mouseY < 509) {
			resetAllToggles();
			bookrow1Clicked = !bookrow1Clicked;
		}
			//book row 2
		if (mouseX > 410 && mouseX < 513 && mouseY > 478 && mouseY < 506) {
			resetAllToggles();
			bookrow2Clicked = !bookrow2Clicked;
		}

		
	}

	if (gameState == 6) {

			//poster
		if (mouseX > 238 && mouseX < 370 && mouseY > 119 && mouseY < 313) {
			resetAllToggles();
			posterClicked = !posterClicked;
		}
			//pillow
        if (mouseX > 432 && mouseX < 547 && mouseY > 373 && mouseY < 450) {
			resetAllToggles();
            pillowClicked = !pillowClicked;
        }



}
}

function resetAllToggles(){

	windowClicked= false;
	floralClicked = false;
	selfieClicked = false;
	babyClicked = false;
	beachClicked = false;
	balletClicked = false;
	drawerClicked = false;
	button1Clicked = false;
	button2Clicked = false;
	button3Clicked = false;
	button4Clicked = false;
	vhs1Clicked = false;
	vhs5Clicked = false;
	vhs11Clicked = false;
	pearlplantClicked = false;
	book1Clicked = false;
	book2Clicked = false;
	book3Clicked = false;
	ball8Clicked = false;
	board1Clicked = false;
	board2Clicked = false;
	NESClicked = false;
	vidgameClicked = false;
	calendarClicked = false;
	letterClicked = false;
	rainbowClicked = false;
	stickfigureClicked = false;
	flowerdrawClicked = false;
	paintingonwallClicked = false;
	todoClicked = false;
	microwaveClicked = false;
	cookiejarClicked = false;
	faucetClicked = false;
	drawer1Clicked = false;
	drawer2Clicked = false;
	cabinet1Clicked = false;
	cabinet2Clicked = false;
	tvClicked = false;
	roomlampClicked = false;
	dsClicked = false;
	vhsrow1Clicked = false;
	vhsrow2Clicked = false;
	vhsrow3Clicked = false;
	radioClicked = false;
	bookrow1Clicked = false;
	bookrow2Clicked = false;
	posterClicked = false;
	pillowClicked = false;

}

