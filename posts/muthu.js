const options = {
  root: null,
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 0,
};

var animation1 = bodymovin.loadAnimation({
  container: document.getElementById('animation-1'), // Required
  path: '../assets/muthu/1-lottie.json', // Required
  renderer: 'canvas', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})


IntersectingAnimation({
	id: "animation-3",
	path: "../assets/muthu/3-lottie.json"
});

IntersectingAnimation({
	id: "animation-6",
	path: "../assets/muthu/6-lottie.json"
});

IntersectingAnimation({
	id: "animation-9",
	path: "../assets/muthu/9-lottie.json"
});

IntersectingAnimation({
	id: "animation-13",
	path: "../assets/muthu/13-lottie.json"
});

IntersectingAnimation({
	id: "animation-18",
	path: "../assets/muthu/18-lottie.json"
});

IntersectingAnimation({
	id: "animation-19",
	path: "../assets/muthu/19-lottie.json"
});

IntersectingAnimation({
	id: "animation-25",
	path: "../assets/muthu/25-lottie.json"
});

IntersectingAnimation({
	id: "animation-28",
	path: "../assets/muthu/28-lottie.json"
});

function IntersectingAnimation(config) {
	const box = document.getElementById(config.id);
	const animation = bodymovin.loadAnimation({
		container: box, // Required
		path: config.path, // Required
		renderer: 'canvas', // Required
		loop: true, // Optional
		autoplay: false, // Optional
		name: "Hello World", // Name for future reference. Optional.
	})
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting == true) {
			animation.play();
		} else {
			animation.pause();
		}
	}, options);

	observer.observe(box)
}
