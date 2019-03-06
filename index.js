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
       <a class="tooltips" href="#">🔷
         <span>${sushi.description}</span></a>
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
