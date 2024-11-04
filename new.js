console.log("test")
console.log(_)

function resizeBody() {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.body.style.setProperty('--vh', `${vh}px`);
}
resizeBody();

// We listen to the resize event
window.addEventListener('resize', _.debounce(resizeBody, 300));

function createHiPPICanvas(width, height) {
	const ratio = window.devicePixelRatio;
	const canvas = document.createElement("canvas");

	canvas.width = width * ratio;
	canvas.height = height * ratio;
	canvas.style.width = width + "px";
	canvas.style.height = height + "px";
	canvas.getContext("2d").scale(ratio, ratio);

	return canvas;
}

let canvas = createHiPPICanvas(window.innerWidth, window.innerHeight);
document.body.append(canvas);
let canvasCTX = canvas.getContext("2d");

let boundingBoxes = document.getElementById("nav-inner").getBoundingClientRect();
function drawBackgroundRect() {
	canvasCTX.roundRect(boundingBoxes.x, boundingBoxes.y, boundingBoxes.width, boundingBoxes.height, 0);
	canvasCTX.fillStyle = "#d17b0f"
	canvasCTX.fill();

}

function initScrolling() {
	canvasCTX.font = "2em 'Playwrite GB S', serif";
	fillScreen("YummyOreo")
}

function setFont(word) {
	if (word == "blogs") {
		canvasCTX.font = "2em 'Merriweather', serif";
	} else if (word == "notes") {
		canvasCTX.font = "2em 'Caveat', serif";
	} else if (word == "projects") {
		canvasCTX.font = "2em 'Monoton', serif";
	} else if (word == "about") {
		canvasCTX.font = "2em 'Playwrite GB S', serif";

	} else if (word == "now") {
		canvasCTX.font = "2em 'Bakbak One', serif";
	}
}

function fillScreen(word) {
	canvasCTX.fillStyle = "#d9dac9";
	canvasCTX.clearRect(0, 0, canvas.width, canvas.height);
	setFont(word);
	let wordDimentions = canvasCTX.measureText(word);
	let spaceWidth = canvasCTX.measureText(" ").width;
	let width = wordDimentions.width;
	let height = wordDimentions.actualBoundingBoxAscent + wordDimentions.fontBoundingBoxDescent;

	let neededWidth = Math.ceil(window.innerWidth / width + spaceWidth) + 1;
	let neededHeight = Math.ceil(window.innerHeight / height + (height * 0.2));

	for (let h = 0.7; h <= neededHeight; h++) {
		let rndOffset = (Math.random() * width);
		for (let w = 0; w < neededWidth; w++) {
			canvasCTX.fillText(word, (w * (width + spaceWidth)) - rndOffset, (height + (height * 0.2)) * h);
		}
	}
	drawBackgroundRect()
}

initScrolling()

let h2s = document.querySelectorAll("h2");
let preSelected = "";

function changed(h2) {
	document.getElementById(preSelected).classList.toggle("not-hovered");
	document.getElementById(preSelected).classList.toggle("hovered");
	h2.classList.toggle("not-hovered");
	h2.classList.toggle("hovered");
	fillScreen(h2.id);

	let pfp = document.getElementById("pfp");
	if (h2.id == "about") {
		pfp.classList.add("active")
		pfp.classList.remove("inactive")
		positionPfp(+0.1, 0.1);
	} else {
		pfp.classList.remove("active")
		pfp.classList.add("inactive")
		positionPfp(0, 0);
	}
}


function entered(h2) {
	h2s.forEach((el) => {
		if (el.id != h2.id) {
			el.classList.toggle("not-hovered");
		} else {
			el.classList.toggle("hovered");
		}
	})
	fillScreen(h2.id);

	if (h2.id == "about") {
		let pfp = document.getElementById("pfp");
		pfp.classList.add("active")
		pfp.classList.remove("inactive")
		positionPfp(+0.1, 0.1);
	}
}

function left() {
	h2s.forEach((el) => {
		el.classList.remove("not-hovered");
		el.classList.remove("hovered");
	})
	fillScreen("YummyOreo");
	let pfp = document.getElementById("pfp");
	if (pfp.classList.contains("active")) {
		pfp.classList.remove("active")
		pfp.classList.add("inactive")
		positionPfp(0, 0);
	}
}

function handleMouseOver(e) {
	let selected = ""
	for (let i = 0; i < h2s.length; i++) {
		let h2 = h2s.item(i);
		let rect = h2.getBoundingClientRect();
		let widthDiff = Math.abs(Math.min(Math.max(rect.left, e.clientX), rect.right) - e.clientX);
		let heightDiff = Math.abs(Math.min(Math.max(rect.top, e.clientY), rect.bottom) - e.clientY);
		if (widthDiff <= 2 && heightDiff <= 2) {
			selected = h2.id
			break;
		}
	}
	if (selected != preSelected) {
		if (selected == "") {
			left()
		} else {
			let h2 = document.getElementById(selected);
			if (preSelected != "") {
				changed(h2);
			} else {
				entered(h2)
			}
		}

		preSelected = selected;
	}
}


let nav = document.querySelector("main");
nav.addEventListener("mousemove", _.throttle(handleMouseOver, 10))

let about = document.getElementById("about");
let pfp = document.getElementById("pfp");

let boundsAb = about.getBoundingClientRect();
let rightAb = boundsAb.right;
let topAb = boundsAb.top;

let boundsPfp = pfp.getBoundingClientRect();
let rightPfp = boundsPfp.right;
let topPfp = boundsPfp.top;

let topDiff = topAb - topPfp;
let rightDiff = rightAb - rightPfp;

function positionPfp(offsetX, offsetY) {

	pfp.style.transform = "translate(" + (rightDiff + (rightDiff * (0.5 + offsetX))) + "px, " + (topDiff + (topDiff * (0.5 + offsetY))) + "px) rotate(20deg)";
}

positionPfp(0, 0)
