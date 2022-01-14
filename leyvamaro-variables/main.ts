function saludar(nombre: string) {
  return "Hola, " + nombre;
}

console.log(saludar("Leonardo"));

let entero: number = 10;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;
let esVerdadero = true;
let nombre: string = "Leonardo";
let apellido: string = "Leyva";
let impresion: string = `
*Variables numéricas
-Entero: ${entero + 1}
-Hexadecimal: ${hexadecimal}
-Binario: ${binario}
-Octal: ${octal}

*Strings
-Nombre: ${nombre}
-Apellido: ${apellido} 
`;
console.log(impresion);

if (esVerdadero) {
  console.log("La variable es verdadera.");
}

let a: Date = new Date();
console.log("La fecha es: " + a);

 
let listaNums: number[] = [1, 2, 3];
listaNums.push(4);

for (let i = 0; i < listaNums.length; i++) {
  console.log("Arreglo en posición [" + i + "] = " + listaNums[i]);
}

let Numeros: Array<Number> = [1, 2, 3];

let futbolista: [string, number];
futbolista = ["Timo", 26];
console.log(`
El futbolista se llama: ${futbolista[0]} y su edad es de ${futbolista[1]} años.
`);
enum marcasAutos {
  Toyota,
  Chevrolet = 100,
  Ford,
}

let Tacoma: marcasAutos = marcasAutos.Toyota;
let Silverado: marcasAutos = marcasAutos.Chevrolet;
let Escape: marcasAutos = marcasAutos.Ford;
console.log(Tacoma);
console.log(Silverado);
console.log(Escape);
console.log(marcasAutos[0]);

let sinTipo: any = "Hola marco";
console.log("sinTipo (String): " + sinTipo);
sinTipo = 100;
console.log("sinTipo (Int): " + sinTipo);

let desconocido: unknown = 4;
desconocido = true;

function saludar2(): void {
  console.log("Hola");
}
saludar2();

let sinDefinir: undefined = undefined;
let variableNull: null = null;
let numeroNull: number = 10;
console.log("(Antes de null) Numero = " + numeroNull);
numeroNull = variableNull;
console.log("(Despues de null) Numero = " + numeroNull);

function error(mensaje: string): never {
  throw new Error(mensaje);
}

declare function crear(o: object): void;

function imprimirId(id: number | string) {
  if (typeof id === "string") {
    console.log("El id es " + id.toUpperCase());
  } else {
    console.log(`El id es ${(id as number).toFixed(2)}`);
  }
}

imprimirId(92.8679);
imprimirId("trabajador");

let algunValor: unknown = "esto es un string";
let stringLength: number = (algunValor as string).length;
let algunValor2: unknown = "este es otro string";
let stringLength2: number = (<string>algunValor2).length;
console.log("Longitud del string = " + stringLength);
console.log("Longitud del string = " + stringLength2);

function elevarAlCuadrado(base: number): number {
  return base * base;
}

let numeroBase = 8;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroBase + " al cuadrado es igual a " + numeroAlCuadrado);


const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
nombres.forEach((s) => {
  console.log(s.toUpperCase());
});
 
 

 
 
type Punto = {
  x: number;
  y: number;
};

function imprimirCoordenadas(punto: Punto) {
  console.log(`
    La coordenada x es: ${punto.x}
    La coordenada y es: ${punto.y}
    `);
}
 
imprimirCoordenadas({ x: 10, y: 25 });

 
 
interface Etiqueta {
  label: string;
}

function imprimirEtiqueta(etiqueta: Etiqueta) {
  console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);

 
 
interface Cuadrado {
  color?: string;
  ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): { area: number } {
  const area = cuadrado.ancho * cuadrado.ancho;
  return { area: area };
}
 
console.log(crearCuadrado({ ancho: 10 }));

 
interface Punto2 {
  readonly x: number;
  readonly y: number;
}

let punto1: Punto2 = { x: 10, y: 20 };
 

interface Transporte {
  nombre: string;
}

 
interface Auto extends Transporte {
  ruedas: number;
}
let auto2: Auto;

 
type Figura = {
  nombre: string;
};
type Cuadrado2 = Figura & {
  lados: 4;
};
let cuadrado1: Cuadrado2;

 

function imprimir(estadoCivil: "soltero" | "casado") {
  console.log(estadoCivil);
}
 
imprimir("soltero");


 
function saludar4(fn: (a: string) => void) {
  fn("Hola mundo");
}

 
function imprimirEnConsola(s: string) {
  console.log(s);
}

 
saludar4(imprimirEnConsola);
