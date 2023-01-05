const clickButton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener('click', añadirAlCarrito)
})

function añadirAlCarrito(e){
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;
    
    const newItem =  {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito (newItem)
}

function addItemCarrito(newItem){
    
    const InputElemento = tbody.getElementsByClassName('input__elemento')

    for(let i = 0; i < carrito.length ; i++){
        if (carrito[i].title === newItem.title) {
            carrito[i].cantidad ++;
            const inputValue = InputElemento[i]
            inputValue.value++;
            CarritoTotal()
            return null;
            
        }
}

carrito.push (newItem)

renderCarrito()
}



//renderizar items del carrito

function renderCarrito(){
    tbody.innerHTML = ' '
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
        
        <th scope="row">1</th>
        <td class="table__productos">
          <img src=${item.img} style="height: 200px;" alt="">
          <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__price">
          <p>${item.precio}</p>
        </td>
        <td class="table__cantidad">
          <input type="number" min="1" value=${item.cantidad} class = "input__elemento">
          <button class="delete btn btn-danger">x</button>
        </td>
       
        `
        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    })
    CarritoTotal()
    
}



//sumatoria del carrito total

function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number (item.precio.replace("$" , ''))
        Total= Total + precio*item.cantidad
    })

    itemCartTotal.innerHTML = `Total $${Total}`
    addLocalStorage()
}
        


 //eliminar items del carrito
function removeItemCarrito(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    tr.remove();
    CarritoTotal();
    
}




//localStorage

    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage;
        renderCarrito()
    }


function addLocalStorage() {
    localStorage.setItem('carrito' , JSON.stringify(carrito))
}


