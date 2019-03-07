document.addEventListener('DOMContentLoaded', () => {

const SUSHIS_URL = 'http://localhost:3000/sushis'

const orderDiv = document.querySelector('#order-div')
const orderList = document.querySelector('#order-list')
const sushiMenu = document.querySelector('#sushi-menu')

const getSushisFetch = () => {
  fetch(SUSHIS_URL)
  .then(response => response.json())
  .then(sushiData => showAllSushis(sushiData))
}


const showAllSushis = (sushiData) => {
  sushiData.forEach(showOneSushi)
}

//created a function that gets the the div element by ID
// Then we interpolate each sushi attribute to show on the page through innerHTML

const showOneSushi = (sushi) => {
  const { id, name, price, image_url, description } = sushi

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
       <p><button class="button add-to-order-button shine shine:hover button-grow button-grow:hover" data-id=${sushi.id} data-name="${name}" data-price="${price}" data-image="${image_url}" data-description="${description}" onmouseover=playButtonMouseover() onclick=playAddSushiToOrderClick()>+</button><button class="remove-from-menu-button button-grow button-grow:hover" data-id=${sushi.id} onmouseover=playButtonMouseover() onclick=playRemoveButtonClick()>-</button></p>
       </div>
       </div>
       `
}

const addEventListenerToSushiMenuForAddToOrderButton = () => {
  sushiMenu.addEventListener('click', addSushiMenuItemToOrder)
}

const addSushiMenuItemToOrder = (event) => {
  // let orderList = document.querySelector('#order-list')
  if (event.target.classList.contains('add-to-order-button')){
    let id = event.target.dataset.id
    let name = event.target.dataset.name
    let price = event.target.dataset.price
    let image = event.target.dataset.image
    let description = event.target.dataset.description

    orderList.innerHTML += `
      <div class="order-item card hobble" onmouseover=playButtonMouseover()>
        <img src="${image}" class="order-item-image grow grow:hover wobble" onclick=playAddSushiToOrderClick()>
        <p class="order-item-name">
          🍣 ${name}
        </p>
        <button class="remove-from-order-button" onclick=playRemoveItemFromOrderClick()>
          X
        </button>
      </div>
    `
  }
}

const addEventListenerToOrderDivForEmptyCartButton = () => {
  orderDiv.addEventListener('click', emptyCart)
}

const emptyCart = (event) => {
  if(event.target.classList.contains('empty-cart-button')){
    debugger
    event.target.parentElement.querySelector('#order-list').innerHTML = ''
  }
}

const addEventListenerToOrderListForRemoveItemButton = () => {
  orderList.addEventListener('click', removeItemFromOrder)
}

const removeItemFromOrder = (event) => {
  if(event.target.classList.contains('remove-from-order-button')){
    event.target.parentElement.remove()
  }
}

const addEventListenerToOrderDivForCheckoutButton = () => {
  orderDiv.addEventListener('click', checkoutOrder)
}

const checkoutOrder = (event) => {
  if(event.target.classList.contains('checkout-button')){
    event.target.parentElement.querySelector('#order-list').innerHTML = ''
  }
}




// CALLS
getSushisFetch();
addEventListenerToSushiMenuForAddToOrderButton();
addEventListenerToOrderDivForEmptyCartButton();
addEventListenerToOrderListForRemoveItemButton();
addEventListenerToOrderDivForCheckoutButton();

}) // END OF DOMCONTENTLOADED
