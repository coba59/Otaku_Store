// variables globales
let iva = 21;
let cantidadFiguras = 0;
let contador = 0;
let eleccion = 0;
let valido = true;

// Objeto
function Figura (nombreFigura, precioFigura, alturaFigura) {
    this.nombre = nombreFigura;
    this.precio = precioFigura;
    this.altura  = alturaFigura;
}

// completo las propiedades del objeto
const figuraA = new Figura("Eren Jaeger", 1000, 160);
const figuraB = new Figura("Mikasa Ackerman", 2000, 150);
const figuraC = new Figura("Armin Arlert", 3000, 140);
const figuraD = new Figura("Levi Ackerman", 4000, 130);
const figuraE = new Figura("Sasha Blouse", 5000, 120);
const figuraF = new Figura("Reiner Braun", 6000, 110);
const figuraG = new Figura("Grisha Jaeger", 7000, 100);

// array con los objetos
const listaFiguras = [figuraA,figuraB,figuraC,figuraD,figuraE,figuraF,figuraG];

// itero con los objetos para mostrarlos al usuario
let listadoFiguras = "Tenemos una variedad en las mejores figuras. Por favor seleccioná la que desees comprar:"
for (const figura of listaFiguras){
    contador++;
    listadoFiguras += "\n" + contador + ".- " + figura.nombre + ". Precio: $" + figura.precio + ". Altura: " + figura.altura + "cm.";
}


// Le pido el nombre al usuario para ingresar a la web
let nombreUsuario = prompt("Bienvenido a Otaku Store! Por favor, ingrese su nombre para continuar:")

if (nombreUsuario !== '') {
    alert("Sera un placer mostrarte todo lo que tenemos "+ nombreUsuario + "!")
} else { 
    alert("Debe ingresar su nombre para poder ver la web. Te llamaré Lisa Jr.");
    alert("Sera un placer mostrarte todo lo que tenemos Lisa Jr!");
    nombreUsuario = "Lisa Jr."
}

// Funcion que lista las figuras en pantalla
function listarFiguras(){
    alert(listadoFiguras);
}

listarFiguras()


// funcion para elegir la figura a comprar
function comprarFigura(){

    eleccion = prompt("Ingrese el número de la figura que desea comprar");

    if (eleccion > 0) {
        
        switch(eleccion) 
            {
                case "1":
                    alert("Usted eligió Eren Jaeger");
                    break;
                case "2":
                    alert("Usted eligió Mikasa Ackerman");
                    break;  
                case "3":
                    alert("Usted eligió Armin Arlert");
                    break;
                case "4":
                    alert("Usted eligió Levi Ackerman");
                    break;
                case "5":
                    alert("Usted eligió Sasha Blouse");
                    break;
                case "6":
                    alert("Usted eligió Reiner Braun");
                    break;
                case "7":
                    alert("Usted eligió Grisha Jaeger");
                    break;
                default:
                    alert("Debe seleccionar una figura (del 1 al 7) para continuar");
                    eleccion = 0;
            }
        return eleccion;  
    } else {
        eleccion = 0;
    }
}

comprarFigura() 


// Funcion para calcular el costo total de las figuras
function calcularCosto() {
    let cantidadFiguras = prompt("Ingrese la cantidad de figuras que desea comprar. Tenga en cuenta que a los mismos se le aplicará el iva (21%)");
    
    while(cantidadFiguras > 0 && eleccion > 0) {
    
        let costoFigura = 1000 * eleccion;
        let costo = cantidadFiguras * costoFigura;
        let impuestoFigura = costo * iva / 100;
        let costoTotal = impuestoFigura + costo;
        
        alert("El valor total de las figuras con IVA incluído es de: $"+costoTotal);
        cantidadFiguras = 0;
        
    }
}

calcularCosto()
