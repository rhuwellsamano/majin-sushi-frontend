// AUDIO

var audio1 = document.getElementById("sushi-mouseover");
var audio2 = document.getElementById("button-mouseover");
var audio3 = document.getElementById("add-sushi-to-order-click");
var audio5 = document.getElementById("remove-button-click");
var audio4 = document.getElementById("remove-item-from-order-click");
var audio6 = document.getElementById("checkout-click");

function playSushiMouseover() {
  audio1.play();
}

function playButtonMouseover() {
  audio2.play();
}

function playAddSushiToOrderClick() {
  audio3.play();
}

function playRemoveButtonClick() {
  audio4.play();
}

function playRemoveItemFromOrderClick() {
  audio5.play();
}

function playCheckoutClick() {
  audio6.play();
}

// END OF AUDIO - might move to separate JS file
