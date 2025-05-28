// Ejercicio 2
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.

const prompt = require('prompt-sync')();
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 100;

const numero = parseInt(prompt("Ingresa un número:"), 10);

if (!isNaN(numero)) {
  if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango.");
  } else {
    console.log("El número está fuera del rango.");
  }
} else {
  console.log("Entrada no válida. Por favor, ingresa un número.");
}


