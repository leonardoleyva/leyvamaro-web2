interface Transporte {
  nombre: string;
}

class Caballo implements Transporte {
  constructor(public nombre: string) {}
}

class Automovil implements Transporte {
  constructor(public nombre: string) {}
}

type ConstructorDeTransporte = {
  new (nombre: string): Transporte;
};

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string) {
  return new ctr(nombre);
}

const caballo1 = construirTransporte(Caballo, "Roach");
const auto1 = construirTransporte(Automovil, "Honda");

console.log("Mi caballo se llama " + caballo1.nombre);
console.log("Mi auto es un " + auto1.nombre);

function f2(n?: number) {
  console.log("El parametro opcional n es " + n);
}

f2();
f2(4);

function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number {
  return x.length;
}
console.log("Sobrecarga");
console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4]));

function calcularLongitud(x: any[] | string) {
  return x.length;
}
console.log("Simplificacion de sobrecarga");
console.log(calcularLongitud("Hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4]));

const usuario = {
  id: 123,
  admin: false,
  volverseAdmin: function () {
    this.admin = true;
  },
};

console.log("Usuario admin = " + usuario.admin);
usuario.volverseAdmin();
console.log("Usuario admin = " + usuario.admin);

function multiplicar(n: number, ...m: number[]): number {
  return m.reduce((p, c) => {
    return p * c;
  }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));

function sumar1(num) {
  return num.a + num.b + num.c;
}
const numeros = { a: 1, b: 2, c: 3 };
console.log("**Destructuracion en objetos**");
console.log(sumar1(numeros));

console.log("**Destructuracion en funciones**");
function sumar2({ a, b, c }: { a: number; b: number; c: number }): number {
  return a + b + c;
}
console.log(sumar2({ a: 1, b: 2, c: 3 }));

function saludar(persona: { nombre: string; edad: number }) {
  return `
    **Objeto anónimo**
    Hola ${persona.nombre}`;
}
console.log(saludar({ nombre: "Luis", edad: 22 }));

interface Persona1 {
  nombre: string;
  edad: number;
}

function saludar2(persona: Persona1) {
  return `
    **Objeto nombrado como interface**
    Hola ${persona.nombre}`;
}

console.log(saludar2({ nombre: "Elena", edad: 25 }));

type Persona2 = {
  nombre: string;
  edad: number;
};

function saludar3(persona: Persona2) {
  return `
    **Objeto nombrado como un alias**
    Hola ${persona.nombre}`;
}

console.log(saludar3({ nombre: "Leonardo", edad: 21 }));

interface Computadora {
  os: "Windows" | "Linux" | "Mac";
  monitor?: "crt" | "led";
  memoria: number;
  procesador: "Intel" | "AMD";
}

function imprimir(computador: Computadora) {
  console.log(`SO: ${computador.os}`);
  console.log(`Memoria: ${computador.memoria}`);
  console.log(`Procesador: ${computador.procesador}`);
}

imprimir({
  os: "Windows",
  memoria: 45,
  procesador: "AMD",
});

interface Perro2 {
  readonly raza: string;
}

const miPerro: Perro2 = { raza: "Pug" };
console.log(`La raza de mi perro es ${miPerro.raza}`);

interface Persona {
  edad: number;
}

interface EdadNoEscribible {
  readonly edad: number;
}

const Luis: Persona = { edad: 20 };

const Pedro: EdadNoEscribible = Luis;

Luis.edad++;
console.log(Luis.edad);
console.log(Pedro.edad);

interface Direccion {
  nombre: string;
  calle: string;
  numero: number;
  ciudad: string;
  pais: string;
  codigoPostal: string;
}

interface DireccionDepartamento extends Direccion {
  unidad: string;
}

interface Computadora2 {
  memoria: string;
  procesador: string;
  hdd: string;
}

interface SistemaOperativo {
  so: string;
  version: string;
}

interface Portatil extends Computadora2, SistemaOperativo {
  bateria: string;
  monitor: string;
  teclado: string;
}

interface Servidor extends Computadora2, SistemaOperativo {
  conexion: string;
}

const macbookPro: Portatil = {
  memoria: "16 GB",
  procesador: "Intel",
  hdd: "1 TB",
  so: "OSX",
  version: "catalina",
  bateria: "Litio",
  monitor: "17 pulgadas",
  teclado: "español",
};

const ubuntuServer: Servidor = {
  memoria: "64GB",
  procesador: "Intel",
  hdd: "4 TB",
  so: "Ubuntu",
  version: "20.04",
  conexion: "ethernet",
};

type Portatil2 = Computadora2 & SistemaOperativo;
const macbookPro2: Portatil2 = {
  memoria: "16GB",
  procesador: "Intel",
  hdd: "500 GB",
  so: "OSX",
  version: "Catalina",
};

interface Caja<T> {
  contenido: T;
}

let cajaString: Caja<string> = { contenido: "hola mundo" };
let cajaNumero: Caja<number> = { contenido: 100 };
let cajaFecha: Caja<Date> = { contenido: new Date() };

type Cajita<T> = {
  contenido: T;
};

let cajitaString: Cajita<string> = { contenido: "hola mundo" };
let cajitaNumero: Cajita<number> = { contenido: 100 };
let cajitaFecha: Cajita<Date> = { contenido: new Date() };

const imprimirTareas = (v: Array<string>) => {
  v.forEach((x) => {
    console.log(x);
  });
};

const misTareas: string[] = ["levantarse", "lavarse los dientes"];

imprimirTareas(misTareas);

const miLista: ReadonlyArray<string> = ["a", "b", "c"];

type Auto = [string, number];

const prius: Auto = ["Toyota", 2015];
const civic: Auto = ["Honda", 2016];

console.log("El Prius es marca: ", prius[0], " y modelo: ", prius[1]);
console.log(`El Civic es marca ${civic[0]} y modelo: ${civic[1]}`);

const prius2: [string, number] = ["Toyota", 2015];
const [marca, modelo] = prius2;

console.log("La marca del prius es: ", marca);
console.log("El modelo del prius es: " + modelo);

type StringNumberBooleans = [string, number, ...boolean[]];
const a: StringNumberBooleans = ["a", 1, true, false, false];

type Auto2 = readonly [string, number];
const prius3: Auto = ["Toyota", 2014];

// Final de de los topicos numero 2
