const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
function registerSlideshow(id) {
	let slideshow = document.getElementById(id);
	let children = slideshow.children
	let width = 0
	let count = 0
	for (const child of children) {
		count += 1
		width -= child.getBoundingClientRect().width
		width -= rem
	}
	width += window.innerWidth
	width -= rem
	let height = count * 300

	gsap.to("#" + id, {
		scrollTrigger: {
			trigger: "#" + id,
			start: "center center",
			end: "+=" + height + " top",
			// markers: true,
			scrub: true,
			pin: true
		},
		x: width
	})
}

window.onload = (e) => {
	registerSlideshow("slideshow-1")
	registerSlideshow("slideshow-2")
}
