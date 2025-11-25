let date = new Date();
let dateEl = document.getElementById("date");
if (dateEl) {
	dateEl.textContent = date.toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
}

document.addEventListener("mousemove", (event) => {
	let cube = document.getElementsByClassName("cube")[0];
	let rect = cube.getBoundingClientRect();
	if (rect.left - 50 > event.clientX || rect.right +50 < event.clientX || rect.top - 50 > event.clientY || rect.bottom + 50 < event.clientY) {
			console.log(true)
			return;
	}
	let diffX = (rect.left + rect.right) / 2 - event.clientX;
	let diffY = (rect.top + rect.bottom) / 2 - event.clientY;
	let minmaxX = Math.sin(Math.PI * (Math.min(Math.max(-100, diffX), 200)/200));
	let minmaxY = Math.sin(Math.PI * (Math.min(Math.max(-100, diffY), 100)/200));
	let rotateX = -40 * minmaxX;
	console.log(minmaxY)
	let rotateY = 40 * minmaxY;
	console.log(rotateX, rotateY)
	cube.style.transform = `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`;
});

