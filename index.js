// AUDIO

var audio1 = document.getElementById("sushi-mouseover");
var audio2 = document.getElementById("button-mouseover");
var audio3 = document.getElementById("add-sushi-to-order-click");
var audio4 = document.getElementById("remove-button-click");
var audio5 = document.getElementById("remove-item-from-order-click");
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

document.addEventListener('DOMContentLoaded', () => {

const SUSHIS_URL = 'http://localhost:3000/sushis'

const orderList = document.querySelector('#order-list')

//created a function that gets the the div element by ID
// Then we interpolate each sushi attribute to show on the page through innerHTML

function showSushi(sushi) {
  let sushiMenu = document.querySelector('#sushi-menu')
   sushiMenu.innerHTML += `
      <div class="sushi">
        <div class="shine shine:hover">
       <div><span><h3 class="sushi-title button-grow button-grow:hover go-left">${sushi.name}</h3><h3 class="sushi-price button-grow button-grow:hover go-right">$${sushi.price}.00</h3></span></div>
       <br>
       <br>
       <div><img src="${sushi.image_url}" class="sushi-image grow grow:hover wobble" onmouseover=playSushiMouseover() onclick=playAddSushiToOrderClick()></div>
       <div class="sushi-description right">
        <p>
         ${sushi.description}
       </p>
       <p><button class="button add-to-order-button shine shine:hover button-grow button-grow:hover" data-id=${sushi.id} onmouseover=playButtonMouseover() onclick=playAddSushiToOrderClick()>+</button><button class="remove-from-menu-button button-grow button-grow:hover" data-id=${sushi.id} onmouseover=playButtonMouseover() onclick=playRemoveButtonClick()>-</button></p>
       </div>
       </div>
       `
}

function getSushis(){
  return fetch(SUSHIS_URL)
  .then(response => response.json())
}

getSushis().then(sushiObj => {
  sushiObj.forEach((sushi) => {
    showSushi(sushi)
  })
})






}) // END OF DOMCONTENTLOADED
