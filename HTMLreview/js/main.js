// Alertas
//alert("Hola soy Fonsi");

//Variables: Espacio en memoria donde se almacena un dato, (una cajita donde se guarda información).
let nombre = "David Alfonso";
nombre = "David";
let altura = 1.74;

//Constantes: Lo mismo que una variable pero no cambia su valor.
const apellido = "Rodriguez";

//Mostrar por consola
console.log(nombre);
console.log(altura);

//Concatenación
let concatenacion = nombre + " " + apellido;

//Seleccionar elementos de la páginma
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${concatenacion}</h2>
    <h3>Mi altura es: ${altura}</h3>
    `;

//Condicionales: Verdadero/Falso
altura = 1.65;
if(altura >= 1.70){
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
}else{
    datos.innerHTML += "<h1>Eres una persona chaparrita</h1>";
}

//Bucles: Repetir el codigo hasta que se cumple la condición 
//for(Inicializador; Condicion; Modificador)
for(let year = 2000; year <= 2024; year++){
    datos.innerHTML += `<h1>Estamos en el año: ${year} </h1>`;
}

//Arrays: cadena de valores.
let nombres = ["Victor", "Francisco", "Pepe"];

let  divNombres = document.querySelector("#nombres")

//divNombres.innerHTML = nombres[1];
divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";

/*nombres.forEach(nombre =>{
    divNombres.innerHTML += "<li>"+nombre+"</li>";
});*/

for (let nombre of nombres){
    divNombres.innerHTML += "<li>"+nombre+"</li>";
}
divNombres.innerHTML += "</ul>"

//Funciones

const miInformacion =(nombre, altura) => {
    let misDatos = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura}</h3>
    `;
    return misDatos;

}

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("David Alfonso", 187);
}

imprimir ();

