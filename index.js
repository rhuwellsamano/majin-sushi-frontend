
document.addEventListener('DOMContentLoaded', () => {

const SUSHIS_URL = 'http://localhost:3000/sushis'

const orderList = document.querySelector('#order-list')

//created a function that gets the the div element by ID
// Then we interpolate each sushi attribute to show on the page through innerHTML

function showSushi(sushi) {
  let sushiMenu = document.querySelector('#sushi-menu')
   sushiMenu.innerHTML += `
      <div class="sushi">
       <h3 class="sushi_title">${sushi.name}</h3>
       <img src="${sushi.image_url}" class="grow grow:hover">
       <p class="sushi_description">
         ${sushi.description}
       </p>
       <button class="button" data-id=${sushi.id}>Add to Order</button>
       <button class"remove-button">Remove Item</button>
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
