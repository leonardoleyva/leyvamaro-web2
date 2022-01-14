var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var caballo1 = construirTransporte(Caballo, "Roach");
var auto1 = construirTransporte(Automovil, "Honda");
console.log("Mi caballo se llama " + caballo1.nombre);
console.log("Mi auto es un " + auto1.nombre);
function f2(n) {
    console.log("El parametro opcional n es " + n);
}
f2();
f2(4);
function longitud(x) {
    return x.length;
}
console.log("Sobrecarga");
console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4]));
function calcularLongitud(x) {
    return x.length;
}
console.log("Simplificacion de sobrecarga");
console.log(calcularLongitud("Hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4]));
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log("Usuario admin = " + usuario.admin);
usuario.volverseAdmin();
console.log("Usuario admin = " + usuario.admin);
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
        return p * c;
    }, n);
}
console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));
function sumar1(num) {
    return num.a + num.b + num.c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log("**Destructuracion en objetos**");
console.log(sumar1(numeros));
console.log("**Destructuracion en funciones**");
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar2({ a: 1, b: 2, c: 3 }));
function saludar(persona) {
    return "\n    **Objeto an\u00F3nimo**\n    Hola ".concat(persona.nombre);
}
console.log(saludar({ nombre: "Luis", edad: 22 }));
function saludar2(persona) {
    return "\n    **Objeto nombrado como interface**\n    Hola ".concat(persona.nombre);
}
console.log(saludar2({ nombre: "Elena", edad: 25 }));
function saludar3(persona) {
    return "\n    **Objeto nombrado como un alias**\n    Hola ".concat(persona.nombre);
}
console.log(saludar3({ nombre: "Leonardo", edad: 21 }));
function imprimir(computador) {
    console.log("SO: ".concat(computador.os));
    console.log("Memoria: ".concat(computador.memoria));
    console.log("Procesador: ".concat(computador.procesador));
}
imprimir({
    os: "Windows",
    memoria: 45,
    procesador: "AMD"
});
var miPerro = { raza: "Pug" };
console.log("La raza de mi perro es ".concat(miPerro.raza));
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
console.log(Luis.edad);
console.log(Pedro.edad);
var macbookPro = {
    memoria: "16 GB",
    procesador: "Intel",
    hdd: "1 TB",
    so: "OSX",
    version: "catalina",
    bateria: "Litio",
    monitor: "17 pulgadas",
    teclado: "español"
};
var ubuntuServer = {
    memoria: "64GB",
    procesador: "Intel",
    hdd: "4 TB",
    so: "Ubuntu",
    version: "20.04",
    conexion: "ethernet"
};
var macbookPro2 = {
    memoria: "16GB",
    procesador: "Intel",
    hdd: "500 GB",
    so: "OSX",
    version: "Catalina"
};
var cajaString = { contenido: "hola mundo" };
var cajaNumero = { contenido: 100 };
var cajaFecha = { contenido: new Date() };
var cajitaString = { contenido: "hola mundo" };
var cajitaNumero = { contenido: 100 };
var cajitaFecha = { contenido: new Date() };
var imprimirTareas = function (v) {
    v.forEach(function (x) {
        console.log(x);
    });
};
var misTareas = ["levantarse", "lavarse los dientes"];
imprimirTareas(misTareas);
var miLista = ["a", "b", "c"];
var prius = ["Toyota", 2015];
var civic = ["Honda", 2016];
console.log("El Prius es marca: ", prius[0], " y modelo: ", prius[1]);
console.log("El Civic es marca ".concat(civic[0], " y modelo: ").concat(civic[1]));
var prius2 = ["Toyota", 2015];
var marca = prius2[0], modelo = prius2[1];
console.log("La marca del prius es: ", marca);
console.log("El modelo del prius es: " + modelo);
var a = ["a", 1, true, false, false];
var prius3 = ["Toyota", 2014];
// Final de de los topicos numero 2
// Final data update
