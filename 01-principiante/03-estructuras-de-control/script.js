// Ejercicio 3: Conversión de Tipos en JavaScript

// Convertir string a número
let stringNumerico = "123";
let numero = Number(stringNumerico);

console.log("String original:", stringNumerico, "- Tipo:", typeof stringNumerico);
console.log("Después de la conversión:", numero, "- Tipo:", typeof numero);

// Convertir número a string
let otroNumero = 456;
let stringDeNumero = String(otroNumero);

console.log("Número original:", otroNumero, "- Tipo:", typeof otroNumero);
console.log("Después de la conversión:", stringDeNumero, "- Tipo:", typeof stringDeNumero);

// Usando métodos alternativos
let numeroUsandoParseInt = parseInt(stringNumerico);
let numeroUsandoParseFloat = parseFloat("123.45");
let stringUsandoToString = otroNumero.toString();

console.log("Usando parseInt:", numeroUsandoParseInt);
console.log("Usando parseFloat:", numeroUsandoParseFloat);
console.log("Usando toString:", stringUsandoToString);

// Ejercicio: Intenta convertir un string no numérico a número
let noNumerico = "Hola";
let intentoDeConversion = Number(noNumerico);
console.log("Intento de convertir 'Hola' a número:", intentoDeConversion);

// TODO: Crea una variable con un número decimal como string y conviértela a número
// TODO: Crea una variable con un número e intenta sumarle un string numérico. ¿Qué sucede?