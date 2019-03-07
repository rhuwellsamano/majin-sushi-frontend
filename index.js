document.addEventListener('DOMContentLoaded', () => {

const SUSHIS_URL = 'http://localhost:3000/sushis'

const orderDiv = document.querySelector('#order-div')
const orderList = document.querySelector('#order-list')
const sushiMenu = document.querySelector('#sushi-menu')
const moneyCounter = document.querySelector('#money-counter')
const fullnessCounter = document.querySelector('#fullness-counter')
const totalCostSpan = document.querySelector('#total-cost-span')
const customDiv = document.querySelector('.custom')
const customSushiForm = document.querySelector('#custom-sushi')
const addNewSushiButton = document.querySelector('#add-new-sushi-button')

let sushiCounter = 0
let orderTotalCost = 0

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
        <button class="remove-from-order-button" data-price="${price}" onclick=playRemoveItemFromOrderClick()>
          X
        </button>
      </div>
    `

    let oldSushiCount = sushiCounter
    let newSushiCount = oldSushiCount + 1
    console.log('sushiCounter', sushiCounter)
    console.log('newSushiCount', newSushiCount)
    sushiCounter = newSushiCount
    console.log('updated sushiCounter', sushiCounter)

    console.log('order total cost before addition', orderTotalCost)
    let beforeCost = orderTotalCost
    console.log('before cost', beforeCost)
    orderTotalCost = beforeCost + parseInt(price)
    console.log('order total cost after addition', orderTotalCost)

    totalCostSpan.innerHTML = `${orderTotalCost}`
  }
}

const addEventListenerToOrderDivForEmptyCartButton = () => {
  orderDiv.addEventListener('click', emptyCart)
}

const emptyCart = (event) => {
  if(event.target.classList.contains('empty-cart-button')){
    event.target.parentElement.querySelector('#order-list').innerHTML = ''


    sushiCounter = 0
    console.log(sushiCounter)

    orderTotalCost = 0

    totalCostSpan.innerHTML = `${orderTotalCost}`
  }


}

const addEventListenerToOrderListForRemoveItemButton = () => {
  orderList.addEventListener('click', removeItemFromOrder)
}

const removeItemFromOrder = (event) => {
  if(event.target.classList.contains('remove-from-order-button')){

    let price = event.target.dataset.price

    event.target.parentElement.remove()

    let oldSushiCount = sushiCounter
    let newSushiCount = oldSushiCount - 1
    console.log('sushiCounter', sushiCounter)
    console.log('newSushiCount', newSushiCount)
    sushiCounter = newSushiCount
    console.log('updated sushiCounter', sushiCounter)

    console.log('order total cost before addition', orderTotalCost)
    let beforeCost = orderTotalCost
    console.log('before cost', beforeCost)
    orderTotalCost = beforeCost - parseInt(price)
    console.log('order total cost after addition', orderTotalCost)

    totalCostSpan.innerHTML = `${orderTotalCost}`

  }

}

const addEventListenerToOrderDivForCheckoutButton = () => {
  orderDiv.addEventListener('click', checkoutOrder)
}

const checkoutOrder = (event) => {
  if(event.target.classList.contains('checkout-button')){
    event.target.parentElement.querySelector('#order-list').innerHTML = ''

    let oldFullnessCount = parseInt(fullnessCounter.innerHTML)
    let fullnessEffect = sushiCounter * 15
    let newFullnessCount = oldFullnessCount + fullnessEffect
    fullnessCounter.innerHTML = newFullnessCount

    console.log('new fullness count', newFullnessCount)


    sushiCounter = 0
    console.log(sushiCounter)

    let beforeMoney = parseInt(moneyCounter.innerHTML)
    let afterMoney = beforeMoney - orderTotalCost

    moneyCounter.innerHTML = afterMoney

    orderTotalCost = 0

    totalCostSpan.innerHTML = `${orderTotalCost}`

  }
}

const addEventListenerToCustomDivForAddNewSushiButton = () => {
  customDiv.addEventListener('click', toggleNewSushiForm)
}

const toggleNewSushiForm = (event) => {
  if (event.target.classList.contains('add-new-sushi-button')){

    if(event.target.innerText === 'Add New Sushi'){
      customSushiForm.style.display = 'block'
      addNewSushiButton.innerText = `Hide Form`
    } else {
      customSushiForm.style.display = 'none'
      addNewSushiButton.innerText = 'Add New Sushi'
    }
  }
}

const addEventListenerToNewSushiForm = () => {
  customSushiForm.addEventListener('submit', postNewSushiFetch)
}

const postNewSushiFetch = (event) => {
  event.preventDefault();

  let name = customSushiForm.name.value
  let description = customSushiForm.description.value
  let price = customSushiForm.price.value

  let imageDropdown = document.getElementById("sushi-image");
  let image = imageDropdown.options[imageDropdown.selectedIndex].value;

  customSushiForm.reset();

  fetch(SUSHIS_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      description: description,
      price: price,
      image_url: image,
      customize: ""
    })
  })
  .then(res => res.json())
  .then(newSushiObj => showOneSushi(newSushiObj))
}

const addEventListenerToSushiMenuForRemoveFromMenuButton = () => {
  sushiMenu.addEventListener('click', removeMenuItemFetch)
}

const removeMenuItemFetch = (event) => {
  if(event.target.classList.contains('remove-from-menu-button')){
    let id = event.target.dataset.id

    event.target.parentElement.parentElement.parentElement.parentElement.remove()

    fetch(`${SUSHIS_URL}/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }
}




// CALLS
getSushisFetch();
addEventListenerToSushiMenuForAddToOrderButton();
addEventListenerToOrderDivForEmptyCartButton();
addEventListenerToOrderListForRemoveItemButton();
addEventListenerToOrderDivForCheckoutButton();
addEventListenerToCustomDivForAddNewSushiButton();
addEventListenerToNewSushiForm();
addEventListenerToSushiMenuForRemoveFromMenuButton();

}) // END OF DOMCONTENTLOADED
