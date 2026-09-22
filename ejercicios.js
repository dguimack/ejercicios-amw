//ejercicio1
console.log()
function pulgadasACentimetros(pulgadas) {
    return pulgadas * 2.54;
}

console.log(pulgadasACentimetros(10));
console.log()

//ejercicio2
function convertirURL(nombre) {
    return "http://www." + nombre + ".com";
}

console.log(convertirURL("pepito"));
console.log()

//ejercicio3
function agregarAdmiracion(frase) {
    return "¡" + frase + "!";
}

console.log(agregarAdmiracion("Feliz cumpleaños"));
console.log()

//ejercicio4
function edadPerro(edad) {
    return edad * 7;
}

console.log(edadPerro(5));
console.log()

//ejercicio5
function valorHora(sueldo) {
    return sueldo / 40;
}

console.log(valorHora(2000));
console.log()

//ejercicio6
function calculadorIMC(altura, peso) {
    return peso / (altura * altura);
}

console.log(calculadorIMC(1.70, 68));
console.log(calculadorIMC(1.65, 55));
console.log(calculadorIMC(1.85, 90));
console.log()

//ejercicio7
function convertirMayusculas(texto) {
    return texto.toUpperCase();
}

console.log(convertirMayusculas("feliz aniversario"));
console.log()

//ejercicio8
function tipoDeDato(dato) {
    return typeof dato;
}

console.log(tipoDeDato("Hola"));
console.log(tipoDeDato(20));
console.log(tipoDeDato(false));
console.log()

//ejercicio9
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

console.log(calcularCircunferencia(5));
console.log(calcularCircunferencia(12));
console.log(calcularCircunferencia(250)); 
console.log()
