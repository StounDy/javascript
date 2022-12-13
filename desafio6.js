
let respuesta = prompt("Hola ingrese su nombre para ver nuestra tienda")

if (respuesta == "Esteban Gutierrez"){

const saludar = (nombre, apellido)=> {
    let frase = `Hola ${nombre + apellido} como estas?`;
    alert(frase)
    }
    saludar("Esteban"," Gutierrez")

}else if (respuesta == "jesus garcia"){

    const saludar = (nombre, apellido)=> {
        let frase = `Hola ${nombre + apellido} como estas?`;
        alert(frase)
        }
        saludar("jesus"," garcia")
    }else {

        alert("nombre no registrado en nuestra pagina")
    }








let id = prompt("eliga un producto")

let cantidad = prompt ("Eliga cantidad")







class Producto{
    constructor(id,tipo,precio){
        this.id = id
        this.tipo  = tipo
        this.precio= precio 
        
        
    }resultado(){
        alert("Usted pidio " + cantidad + " " +  this.tipo + " de " + this.id + " y su precio final es de " + this.precio * cantidad );
        
        
    } 

}


const arrayProductos = [];


//JUEGOS PS4
arrayProductos.push (new Producto("ps4", "Elden Ring", 1500));
arrayProductos.push (new Producto("ps4", "God Of War", 1500));
arrayProductos.push (new Producto("ps4", "Guilty Strive", 1500));
arrayProductos.push (new Producto("ps4","Guardians Of The Galaxy", 1500));
arrayProductos.push (new Producto("ps4", "BloodBorne", 1300));
arrayProductos.push (new Producto("ps4", "Resident Evil 3", 1200));
arrayProductos.push (new Producto("ps4", "Cyberpunk 2077", 1200));
arrayProductos.push (new Producto("ps4","Death Stranding", 1200));



//JUEGOS PS5                             //modificar
arrayProductos.push (new Producto("ps5", "Carne", 45));
arrayProductos.push (new Producto("ps5", "Pollo", 50));
arrayProductos.push (new Producto("ps5", "Atun", 55));
arrayProductos.push (new Producto("ps5", "Jamon y Queso", 60));
arrayProductos.push (new Producto("ps5", "Verdura", 52));





                        if (id== "ps4") {

                            let opciones = prompt("Ingrese cualquiera de las siguientes opciones: 1) Elden Ring 2) God Of War 3) Guilty Strive 4) Guardians Of The Galaxy 5) BloodBorne 6)Resident Evil 3 7)Cyberpunk 2077 8)Death Stranding")

                           if (opciones == 1){

                            arrayProductos[0].resultado();
                            
                           }

                           if (opciones == 2){

                            arrayProductos[1].resultado();
                           }

                           if (opciones == 3){

                            arrayProductos[2].resultado();
                           }

                           if (opciones == 4){

                            arrayProductos[3].resultado();
                           }

                           if (opciones == 5){

                            arrayProductos[4].resultado();
                            
                           }

                           if (opciones == 6){

                            arrayProductos[5].resultado();
                           }

                           if (opciones == 7){

                            arrayProductos[6].resultado();
                           }

                           if (opciones == 8){

                            arrayProductos[7].resultado();
                           }

                        }




                        
                        else if (id== "ps5") {

                            let opciones = prompt("Ingrese cualquiera de las siguientes opciones: 1) Carne 2) Pollo 3) Atun 4) Jamon y Queso 5) Verdura")

                           if (opciones == 1){

                            arrayProductos[4].resultado();
                           }

                           if (opciones == 2){

                            arrayProductos[5].resultado();
                           }

                           if (opciones == 3){

                            arrayProductos[6].resultado();
                           }

                           if (opciones == 4){

                            arrayProductos[7].resultado();
                           }

                        }
                        else {
                            alert("Producto no disponible");
                        }
