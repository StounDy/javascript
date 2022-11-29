let mensaje = "Estos son los plantas disponibles para su evento:\n";
let resultado = [];
let limite_precio;
let cepa;
comenzar();

function comenzar(){
    plantilla = prompt("que tipo de flores prefiere? elija entre rosas-margaritas-petunias");
    evaluar_plantilla(plantilla);
}
function evaluar_plantilla(plantilla){
    switch(plantilla.toLowerCase()){
        case "rosas":
        case "margaritas":    
        case "petunias":
                limite_precio = prompt("Seleccione un limite de precio");
                evaluar_precio(limite_precio);
                //console.log(typeof limite_precio)

                for (let i = 0; i < plantas.length; i++) {
                    //console.log(plantas[i]);
                    if (plantas[i].plantilla == plantilla.toLowerCase && plantas[i].precio <= parseInt(limite_precio)) {
                        mensaje += plantas[i].nombre + ": $" + plantas[i].precio + "\n";
                        resultado.push(plantas[i]);    
                    }
                }               
                if(resultado.length===0){
                    alert(mensaje);
                }else{
                    alert("No contamos con suficiente existencias Por favor vuelva a intentarlo");
                    comenzar();
                }
            break;
        default:
            let nueva_plantilla = prompt("Error- Por favor Seleccione una planta entre rosas,margaritas o petunias");
            evaluar_plantilla(nueva_plantilla);
            break;
    }
    
}
function evaluar_precio(precio){
    let nuevo_precio;
    if(isNaN(precio)){
        nuevo_precio = prompt("error- Por favor seleccione un valor numerico");
        evaluar_precio(nuevo_precio);
        return; 
    }
   
}

const plantas = [
    {nombre: 'margaritas', plantilla: 'margaritas', precio: 100},
    {nombre: 'petunias', plantilla: 'petunias', precio: 200},
    {nombre: 'rosas', plantilla: 'rosas', precio: 500},


];
