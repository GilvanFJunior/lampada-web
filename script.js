const ligarButton = document.getElementById("ligarButton");
const desligarButton = document.getElementById("desligarButton");
const quebrarButton = document.getElementById("quebrarButton");
const lamp = document.getElementById("lamp");

function lampOn() {
  lamp.src = "img/ligada.jpg";
}

function lampOff() {
  lamp.src = "img/desligada.jpg";
}

function lampBroken() {
  lamp.src = "img/quebrada.jpg";
}

ligarButton.addEventListener("click", lampOn);
desligarButton.addEventListener("click", lampOff);
quebrarButton.addEventListener("click", lampBroken);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
