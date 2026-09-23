//Agrega caminos
let edad = 19; // Puedes cambiar este número para probar

if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else {
    // Código principal si la edad es válida
    if (edad < 18) {
        console.log("No puede pasar al bar.");
    } else if (edad < 21) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol.");
    } else {
        if (edad === 21) {
            console.log("¡Bienvenido! Felicitaciones por haber llegado a la mayoría de edad. Puede pasar al bar y tomar alcohol.");
        } else {
            console.log("Puede pasar al bar y tomar alcohol.");
        }
    }

    // Mensaje si la edad es impar
    if (edad % 2 !== 0) {
        console.log("¿Sabías que tu edad es impar?");
    }
}

//totalAPagar()
function totalAPagar(vehiculo, litrosConsumidos) {
    let precioPorLitro = 0;

    // Determinar precio por vehículo
    if (vehiculo === "coche") {
        precioPorLitro = 86;
    } else if (vehiculo === "moto") {
        precioPorLitro = 70;
    } else if (vehiculo === "autobús") {
        precioPorLitro = 55;
    }

    let total = precioPorLitro * litrosConsumidos;

    if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
        total += 50;
    } else if (litrosConsumidos > 25) {
        total += 25;
    }

    return total;
}

console.log(totalAPagar("coche", 30)); 

//Local de sándwiches
function calcularSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let total = 0;

    // 1. Sándвич base
    if (base === "pollo") total += 150;
    else if (base === "carne") total += 200;
    else if (base === "veggie") total += 100;

    // 2. Tipo de pan
    if (pan === "blanco") total += 50;
    else if (pan === "negro") total += 60;
    else if (pan === "s/gluten") total += 75;

    // 3. Adicionales
    if (queso) total += 20;
    if (tomate) total += 15;
    if (lechuga) total += 10;
    if (cebolla) total += 15;
    if (mayonesa) total += 5;
    if (mostaza) total += 5;

    return total;
}

console.log(calcularSandwich("carne", "negro", true, false, true, false, true, false));
console.log(calcularSandwich("veggie", "blanco", false, false, false, false, false, false));

//¿Cuál es el número secreto?
function verificarNumeroSecreto(numeroIngresado) {
    // Genera un número entero random entre 1 y 10
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;

    if (numeroIngresado === numeroSecreto) {
        return "¡Felicidades! Adivinaste el número secreto.";
    } else {
        return `Sigue intentando. Tu número fue ${numeroIngresado}, pero el número secreto era ${numeroSecreto}.`;
    }
}

console.log(verificarNumeroSecreto(5));

//abrirParacaidas()
function abrirParacaidas(velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        return "El paracaídas debe abrirse.";
    } else {
        // En base a la consigna, la función solo debe decir si debe abrirse
        return "No se cumplen las condiciones para abrir el paracaídas.";
    }
}

console.log(abrirParacaidas(1000, 2500));

//Estructura switch - Traductor condicional

let palabraIngresada = "pelota"; // Simula la entrada del usuario

switch (palabraIngresada) {
    case "casa":
        console.log("house");
        break;
    case "perro":
        console.log("dog");
        break;
    case "mesa":
        console.log("table");
        break;
    case "árbol":
        console.log("tree");
        break;
    case "ciudad":
        console.log("city");
        break;
    default:
        console.log("La palabra ingresada es incorrecta.");
}

//Estructura switch - Valoración de películas
let valoracion = "Muy mala"; // Simula la entrada del usuario

switch (valoracion) {
    case "Muy mala":
        console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
        break;
    case "Mala":
        console.log("Calificaste la película como Mala. Una pena que no te haya gustado.");
        break;
    case "Mediocre":
        console.log("Calificaste la película como Mediocre. Esperamos que la próxima sea mejor.");
        break;
    case "Buena":
        console.log("Calificaste la película como Buena. ¡Nos alegra que la hayas disfrutado!");
        break;
    case "Muy buena":
        console.log("Calificaste la película como Muy Buena. ¡Qué excelente noticia!");
        break;
    default:
        console.log("Ingresaste un valor inválido.");
}

if (["Muy mala", "Mala", "Mediocre", "Buena", "Muy buena"].includes(valoracion)) {
    console.log("Muchas gracias por su visita.");
}

