//mobile menu style switcher
let toggleButton = document.getElementById("hamburger-button");
toggleButton.addEventListener("click", (e) => {
	toggleButton.classList.toggle('active');
	document.querySelector("nav .menu").classList.toggle("mobile-show");
	document.querySelector("nav .left").classList.toggle("mobile-hide")
	e.preventDefault()
})
