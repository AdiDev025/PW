//et listItems = document.getElementsByClassName('listItems')
/*
*/

let listItems = document.getElementById('display')

listItems.innerHTML += `hello`
let items = {}

function addItems() {
    let itemName = prompt('', 'Item Name');
    let itemImage = prompt('', 'Paste Image URL')
    let itemFunction = prompt('', 'Define Item Function')
    listItems.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${itemImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${itemName}</h5>
      <p class="card-text">${itemFunction}</p>
    </div>
  </div>`
}

//let addrr = 'https://media.istockphoto.com/id/1387858012/photo/new-plastic-car-bumper-on-white-background.jpg?s=612x612&w=0&k=20&c=YrMbOpFL7v3ubWRYfEcWAudyrITw3iaWzxWglYuaZLk='


