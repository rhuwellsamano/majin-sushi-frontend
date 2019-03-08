// AUDIO

var audio1 = document.getElementById("sushi-mouseover");
var audio2 = document.getElementById("button-mouseover");
var audio3 = document.getElementById("add-sushi-to-order-click");
var audio5 = document.getElementById("remove-button-click");
var audio4 = document.getElementById("remove-item-from-order-click");
var audio6 = document.getElementById("checkout-click");
var audio7 = document.getElementById("alert-sound");
var audio8 = document.getElementById("alert-sound-2");
var audio9 = document.getElementById("chaching")
var audio10 = document.getElementById("hungry")

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

function playAlertSound() {
  audio7.play();
}

function playAlertSound2() {
  audio8.play();
}

function playChaching() {
  audio9.play();
}

function playHungry() {
  audio10.play();
}
// END OF AUDIO - might move to separate JS file
