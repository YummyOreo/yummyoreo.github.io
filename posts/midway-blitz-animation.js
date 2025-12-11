// add document.addEventListener("DOMContentLoad") if shit isn't working to only start after loaded
let changeDot = "-40%"
let changeP = "40%"

let smallerMobile = window.screen.width <= 768;
let smallestMobile = window.screen.width <= 650;

if (mobile) {
	changeDot = "-45%";
	changeP = "45%"
	console.log("reg")
}
if (smallerMobile) {
	console.log("smaller")
}
if (smallestMobile) {
	// changeDot = "-40%";
	// changeP = "40%"
	console.log("smallest")
}


const dotTl = gsap.timeline();
dotTl.to("#dot", { x: changeDot })
dotTl.from(".dot p", {scale: 0})
dotTl.to(".dot p", {scale: 1, x: changeP})

// const textTl = gsap.timeline();
// textTl.to(".dot p", { scale: 1" })

gsap.to("#dot", {
	scrollTrigger: {
		trigger: "#dot",
		scrub: true,
		start: "20% center",
		end: "20%",
		// markers: true
	},
	scale: 0.5,
})

ScrollTrigger.create({
	animation: dotTl,
	trigger: "#dot",
	start: "50% center",
	end: "+=400",
	scrub: true,
	pin: true
})

ScrollTrigger.create({
	trigger: "#dot",
	start: "50% center",
	end: "+=400",
	pin: ".dot p",
})

// ScrollTrigger.create({
// 	animation: textTl,
// 	trigger: "#dot",
// 	start: "60% center",
// 	end: "70%",
// 	markers: true,
// 	pin: ".dot p",
// 	scrub: true
// })
