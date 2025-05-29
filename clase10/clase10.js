//Simular un sistema de ingreso a una nave espacial donde los tripulantes deben pasar filtros de validación usando variables, coerción, y operadores lógicos.
//🧩 Desarrollo:
//Pedí a tus alumnas que creen un script que haga lo siguiente:
// IF TERNARIO

const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese su nombre galactico: ");
let edad = parseInt(prompt("Cual es tu edad terrestre: ")); 
let especie = prompt("Cual es tu especie: (Humano, Alien, Cyborg) ");


let tienePermiso = (edad>=18 && especie!=="") || nombre === "Capitana";

const mensaje = tienePermiso
    ? "Bienvenido a bordo " + (nombre || "tripulante desconocido") + "!"
    : "Acceso denegado, no podes ingresar a la nave";

console.log(mensaje);
