// Ejercicio 4: Constantes en JavaScript

// Declaración de una constante
const PI = 3.14159;
console.log("Valor de PI:", PI);

// Intento de reasignar un valor a una constante (esto causará un error)
try {
    PI = 3.14;
} catch (error) {
    console.error("Error al intentar reasignar PI:", error.message);
}

// Declaración de una variable con let
let radio = 5;
console.log("Radio inicial:", radio);

// Reasignación de valor a una variable let (esto es permitido)
radio = 10;
console.log("Radio después de reasignar:", radio);

// Constantes con objetos
const persona = { nombre: "Ana", edad: 30 };
console.log("Persona inicial:", persona);

// Modificar propiedades de un objeto constante (esto es permitido)
persona.edad = 31;
console.log("Persona después de modificar edad:", persona);

// Intento de reasignar el objeto completo (esto causará un error)
try {
    persona = { nombre: "Juan", edad: 25 };
} catch (error) {
    console.error("Error al intentar reasignar persona:", error.message);
}

// TODO: Declara una constante con tu nombre y intenta cambiarla
// TODO: Crea un objeto constante 'coche' con propiedades marca y modelo, luego intenta cambiar el modelo