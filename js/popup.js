openButton = document.getElementById("open-discord-popup");
closeButton = document.getElementById("close-discord-popup");
popup = document.getElementById("popup-outer");

bad = [
  document.getElementsByClassName("popup-inner")[0],
  document.getElementById("bad-header"),
  document.getElementById("bad-br"),
  document.getElementById("bad-ph"),
  document.getElementsByClassName("center-Items")[0],
  document.getElementsByClassName("close-discord-popup"),
];

openButton.addEventListener("click", (event) => {
  popup.style.opacity = "100";
  popup.style.pointerEvents = "all";
});

closeButton.addEventListener("click", (event) => {
  popup.style.opacity = "0";
  popup.style.pointerEvents = "none";
});

popup.addEventListener("click", (event) => {
  if (bad.includes(event.target)) {
    return;
  }
  popup.style.opacity = "0";
  popup.style.pointerEvents = "none";
});
