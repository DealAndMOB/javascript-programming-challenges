// Ejercicio 5: Cadenas Formateadas (Template Strings) en JavaScript

// Las cadenas formateadas, también conocidas como template strings,
// nos permiten crear strings más dinámicos y legibles.
const nombre = "Ana";
const edad = 28;
const ciudad = "Madrid";

// Usando template strings para crear un mensaje
const mensaje = `Hola, mi nombre es ${nombre}. Tengo ${edad} años y vivo en ${ciudad}.`;
console.log(mensaje);

// Template string multilínea
const poema = `
    Roses are red,
    Violets are blue,
    Template strings are awesome,
    And so are you!
`;
console.log(poema);

// Usando expresiones dentro de template strings
const precio = 19.99;
const impuesto = 0.16;
const total = `El precio total es: $${(precio * (1 + impuesto)).toFixed(2)}`;
console.log(total);

// Función para usar con template strings
function destacar(texto) {
    return `**${texto}**`;
}

const mensajeDestacado = `Este es un ${destacar('mensaje importante')} que utiliza template strings.`;
console.log(mensajeDestacado);

// TODO: Crea un template string que incluya tu nombre, tu edad, y tu hobby favorito
// TODO: Usa un template string para crear una tabla simple de multiplicar (por ejemplo, del 5)