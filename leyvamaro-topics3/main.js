var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 10; }
        this.y = 2;
        this.x = x;
        this.y = y;
    }
    return Punto;
}());
var miPunto = new Punto();
console.log(miPunto.x);
console.log(miPunto.y);
var Saludo = /** @class */ (function () {
    function Saludo(nuevoNombre) {
        this.nombre = "mundo";
        if (!nuevoNombre) {
            this.nombre = nuevoNombre;
        }
    }
    Saludo.prototype.asignarNuevoNombre = function (nuevoNombre) {
    };
    return Saludo;
}());
var miNombre = new Saludo("Leonardo");
var Punto2 = /** @class */ (function () {
    function Punto2(xs, y) {
    }
    return Punto2;
}());
var Figura = /** @class */ (function () {
    function Figura() {
        this.lados = 0;
    }
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo() {
        var _this = _super.call(this) || this;
        _this.lados = 2;
        return _this;
    }
    return Circulo;
}(Figura));
var titulo = "mi graduación";
var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.reproducir = function () {
        console.log("".concat(this.titulo, " se esta reproduciendo."));
    };
    Video.prototype.asignarTitulo = function (nuevoTitulo) {
        titulo = nuevoTitulo;
        this.titulo = nuevoTitulo;
    };
    return Video;
}());
var miVideo = new Video("Año Nuevo");
miVideo.reproducir();
var Desfile = /** @class */ (function () {
    function Desfile() {
        this._participantes = 0;
    }
    Object.defineProperty(Desfile.prototype, "participantes", {
        get: function () {
            return this._participantes;
        },
        set: function (v) {
            this._participantes = v;
        },
        enumerable: false,
        configurable: true
    });
    return Desfile;
}());
var desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes);
var Television = /** @class */ (function () {
    function Television() {
    }
    Television.prototype.encender = function () {
        console.log("El televisor se encendió.");
    };
    return Television;
}());
var NombreVerificable = /** @class */ (function () {
    function NombreVerificable() {
    }
    NombreVerificable.prototype.verificar = function (nombre) {
        return nombre.toLowerCase();
    };
    return NombreVerificable;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.moverse = function () {
        console.log("El animal se mueve.");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.ladrar = function () {
        console.log("El perro ladra");
    };
    return Perro;
}(Animal));
var miPerro2 = new Perro();
miPerro2.moverse();
miPerro2.ladrar();
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Padre.prototype.saludar = function () {
        console.log("Hola");
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.saludar = function (nombre) {
        if (nombre) {
            console.log("Hola ".concat(nombre));
        }
        else {
            _super.prototype.saludar.call(this);
        }
    };
    return Hijo;
}(Padre));
var hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");
var h = new Hijo();
var Definicion = /** @class */ (function () {
    function Definicion() {
        this.nombre = "definición";
        console.log("Mi nombre es ".concat(this.nombre));
    }
    return Definicion;
}());
var Implementacion = /** @class */ (function (_super) {
    __extends(Implementacion, _super);
    function Implementacion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Implementacion;
}(Definicion));
var d = new Implementacion();
var Saludo5 = /** @class */ (function () {
    function Saludo5() {
    }
    Saludo5.prototype.saludar = function () {
        console.log("Saludar!");
    };
    return Saludo5;
}());
var inst = new Saludo5();
inst.saludar();
var Saludo6 = /** @class */ (function () {
    function Saludo6() {
    }
    Saludo6.prototype.getDestinatario = function () {
        return "Amigos";
    };
    return Saludo6;
}());
var SaludoEspecial = /** @class */ (function (_super) {
    __extends(SaludoEspecial, _super);
    function SaludoEspecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaludoEspecial.prototype.saludar = function () {
        console.log("Hola ".concat(this.getDestinatario()));
    };
    return SaludoEspecial;
}(Saludo6));
var saludo = new SaludoEspecial();
saludo.saludar();
var Base = /** @class */ (function () {
    function Base() {
        this.m = 10;
    }
    return Base;
}());
var Derivada = /** @class */ (function (_super) {
    __extends(Derivada, _super);
    function Derivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 15;
        return _this;
    }
    return Derivada;
}(Base));
var z = new Derivada();
console.log(z.m);
var Base2 = /** @class */ (function () {
    function Base2() {
        this.x = 1;
    }
    return Base2;
}());
var Derivada1 = /** @class */ (function (_super) {
    __extends(Derivada1, _super);
    function Derivada1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 5;
        return _this;
    }
    return Derivada1;
}(Base2));
var Derivada2 = /** @class */ (function (_super) {
    __extends(Derivada2, _super);
    function Derivada2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada2.prototype.imprimirX = function (c1) {
        console.log(c1.x);
    };
    return Derivada2;
}(Base2));
var Base5 = /** @class */ (function () {
    function Base5() {
        this.x = 0;
    }
    return Base5;
}());
var Derivada5 = /** @class */ (function (_super) {
    __extends(Derivada5, _super);
    function Derivada5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada5.prototype.imprimirX = function () {
    };
    return Derivada5;
}(Base));
var dd = new Base5();
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
    }
    A.prototype.imprimirX = function (otra) {
        console.log(otra.x);
    };
    return A;
}());
var ejemplo = new A();
ejemplo.imprimirX(new A());
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.imprimirX = function () {
        console.log("El valor de x es: ".concat(this.x));
    };
    MiClase.prototype.imprimirX = function () {
        console.log("El valor de x en una instancia es: ".concat(MiClase.x));
    };
    MiClase.x = 10;
    return MiClase;
}());
MiClase.imprimirX();
var miClase = new MiClase();
miClase.imprimirX();
var Base7 = /** @class */ (function () {
    function Base7() {
    }
    Base7.saludar = function () {
        console.log("Hola Mundo");
    };
    return Base7;
}());
var Derivada7 = /** @class */ (function (_super) {
    __extends(Derivada7, _super);
    function Derivada7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derivada7;
}(Base7));
Derivada7.saludar();
var Caja = /** @class */ (function () {
    function Caja(value) {
        this.contenido = value;
        console.log(this.contenido);
    }
    return Caja;
}());
var misJuguetes = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });
var miCajaJuguetes = new Caja(misJuguetes);
var miMaquillaje = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });
var miCajaMaquillaje = new Caja(miMaquillaje);
var Caja2 = /** @class */ (function () {
    function Caja2() {
        this.contenido = "";
    }
    Caja2.prototype.set = function (valor) {
        this.contenido = valor;
        return this;
    };
    return Caja2;
}());
var miCaja = new Caja2();
var valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);
var Caja3 = /** @class */ (function () {
    function Caja3(contenido) {
        this.contenido = "";
        this.contenido = contenido;
    }
    Caja3.prototype.igualQue = function (otro) {
        return otro.contenido == this.contenido;
    };
    return Caja3;
}());
var caja1 = new Caja3("joyas");
var caja2 = new Caja3("joyas");
var caja3 = new Caja3("maquillaje");
console.log(caja1.igualQue(caja2));
console.log(caja1.igualQue(caja3));
var Video2 = /** @class */ (function () {
    function Video2(nombre, duracion, formato) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.formato = formato;
    }
    return Video2;
}());
var miVideo2 = new Video2("Vacaciones", 60, "mp4");
console.log("Mi video de: ".concat(miVideo2.nombre));
console.log("Tiene una duraci\u00F3n de: ".concat(miVideo2.duracion, " segundos"));
console.log("Y el formato es: ".concat(miVideo2.formato));
