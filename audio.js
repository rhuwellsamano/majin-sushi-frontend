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

var backgroundMusic = document.getElementById('background-music')

function playBackgroundMusic() {
  backgroundMusic.play();
}

backgroundMusic.volume = 0.7

function playSushiMouseover() {
  audio1.volume = 0.4;
  audio1.play();
}

function setMouseoverVolume() {
  audio1.volume = 0.4;
  console.log(audio1.volume)
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

audio5.volume = 0.5

function playCheckoutClick() {
  audio6.play();
}

audio6.volume = 0.5

function playAlertSound() {
  audio7.play();
}

function playAlertSound2() {
  audio8.play();
}

audio8.volume = 0.4

function playChaching() {
  audio9.play();
}

function playHungry() {
  audio10.play();
}
// END OF AUDIO - might move to separate JS file
