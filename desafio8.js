//DESAFIO 8 : DOM 
//For Each





let text = "";
const componentes = ["memoriaRam : 1000$", "motherboard : 5000$","placaDeVideo : 20000$", "Gabinete : 4000$" , "Fuente : 2500$"];

function componentesLista(item, index) {
    text += index + ": " + item + "<br>" + "<hr>";  
}

componentes.forEach(componentesLista);

document.getElementById("show2").innerHTML = text;




    
//sumar el precio total de componentes 

let sum = 0;
const precioTotal = [1000,5000,20000,4000,2500];

function functionTotal(item) {
    sum+= item;
}

precioTotal.forEach(functionTotal)

document.getElementById("show3").innerHTML = sum;







//

function creandoParrafo() {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Añadiste el producto 1 a tu carrito de compras";
    paragraph.classList.add("miEstilo");
    

    document.getElementById("myDIV").appendChild(paragraph);
}


    

 