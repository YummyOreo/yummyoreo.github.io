mobile = screen.width <= 992;

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
function registerSlideshow(id) {
	let slideshow = document.getElementById(id);
	let children = slideshow.children
	let width = 0
	let widthArray = []
	let count = 0
	for (const child of children) {
		count += 1
		width -= child.getBoundingClientRect().width
		width -= rem
		widthArray.push(child.getBoundingClientRect().width)
	}
	width += window.innerWidth
	width -= rem
	let height = count * 300


	let snap = false;
	if (!mobile) {
		let rollingW = 0
		let precents = []
		for (const w of widthArray) {
			rollingW += w + rem;
			let precent = (rollingW - ((w + rem) / 2)) / (-width);
			precents.push(precent)
		}
		snap = { snapTo: precents, delay: 0.25 }
	}

	gsap.to("#" + id, {
		scrollTrigger: {
			trigger: "#" + id,
			start: "center center",
			end: "+=" + height + " top",
			scrub: true,
			pin: true,
			snap: snap
		},
		ease: "none",
		x: width
	})
}

window.onload = (e) => {
	registerSlideshow("slideshow-1")
	registerSlideshow("slideshow-2")
}
