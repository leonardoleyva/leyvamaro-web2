function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar("Leonardo"));
var entero = 10;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 484;
var esVerdadero = true;
var nombre = "Leonardo";
var apellido = "Leyva";
var impresion = "\n*Variables num\u00E9ricas\n-Entero: ".concat(entero + 1, "\n-Hexadecimal: ").concat(hexadecimal, "\n-Binario: ").concat(binario, "\n-Octal: ").concat(octal, "\n\n*Strings\n-Nombre: ").concat(nombre, "\n-Apellido: ").concat(apellido, " \n");
console.log(impresion);
if (esVerdadero) {
    console.log("La variable es verdadera.");
}
var a = new Date();
console.log("La fecha es: " + a);
var listaNums = [1, 2, 3];
listaNums.push(4);
for (var i = 0; i < listaNums.length; i++) {
    console.log("Arreglo en posición [" + i + "] = " + listaNums[i]);
}
var Numeros = [1, 2, 3];
var futbolista;
futbolista = ["Timo", 26];
console.log("\nEl futbolista se llama: ".concat(futbolista[0], " y su edad es de ").concat(futbolista[1], " a\u00F1os.\n"));
var marcasAutos;
(function (marcasAutos) {
    marcasAutos[marcasAutos["Toyota"] = 0] = "Toyota";
    marcasAutos[marcasAutos["Chevrolet"] = 100] = "Chevrolet";
    marcasAutos[marcasAutos["Ford"] = 101] = "Ford";
})(marcasAutos || (marcasAutos = {}));
var Tacoma = marcasAutos.Toyota;
var Silverado = marcasAutos.Chevrolet;
var Escape = marcasAutos.Ford;
console.log(Tacoma);
console.log(Silverado);
console.log(Escape);
console.log(marcasAutos[0]);
var sinTipo = "Hola marco";
console.log("sinTipo (String): " + sinTipo);
sinTipo = 100;
console.log("sinTipo (Int): " + sinTipo);
var desconocido = 4;
desconocido = true;
function saludar2() {
    console.log("Hola");
}
saludar2();
var sinDefinir = undefined;
var variableNull = null;
var numeroNull = 10;
console.log("(Antes de null) Numero = " + numeroNull);
numeroNull = variableNull;
console.log("(Despues de null) Numero = " + numeroNull);
function error(mensaje) {
    throw new Error(mensaje);
}
function imprimirId(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es ".concat(id.toFixed(2)));
    }
}
imprimirId(92.8679);
imprimirId("trabajador");
var algunValor = "esto es un string";
var stringLength = algunValor.length;
var algunValor2 = "este es otro string";
var stringLength2 = algunValor2.length;
console.log("Longitud del string = " + stringLength);
console.log("Longitud del string = " + stringLength2);
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 8;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroBase + " al cuadrado es igual a " + numeroAlCuadrado);
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenadas(punto) {
    console.log("\n    La coordenada x es: ".concat(punto.x, "\n    La coordenada y es: ").concat(punto.y, "\n    "));
}
imprimirCoordenadas({ x: 10, y: 25 });
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
console.log(crearCuadrado({ ancho: 10 }));
var punto1 = { x: 10, y: 20 };
var auto2;
var cuadrado1;
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir("soltero");
function saludar4(fn) {
    fn("Hola mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
