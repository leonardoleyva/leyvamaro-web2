
class Punto {
    x: number;  
    y = 2;     
    
    constructor (x = 10, y = 10) {
        this.x = x;
        this.y = y;
    }

}

let miPunto = new Punto();
console.log(miPunto.x);
console.log(miPunto.y);


class Saludo {
    readonly nombre: string = "mundo";

    constructor (nuevoNombre: string) {
        if (!nuevoNombre) {
            this.nombre = nuevoNombre;      
        }
    }

    asignarNuevoNombre (nuevoNombre: string) {
        

    }

}

const miNombre = new Saludo("Kevin");



class Punto2 {
    constructor (x: number, y: number);
    constructor (s: string);
    constructor (xs: number | string, y?: number){


    }

}


class Figura {
    lados = 0;
}

class Circulo extends Figura {
    constructor (){
        super();      
        this.lados = 2; 
    }
}





let titulo = "mi graduación";

class Video {
    titulo: string;

    constructor (titulo: string){
        this.titulo = titulo;
    }

    reproducir (): void {
        console.log(`${this.titulo} se esta reproduciendo.`);
    }

    
    asignarTitulo(nuevoTitulo: string){
        titulo = nuevoTitulo;           
        this.titulo = nuevoTitulo;      

    }

}

const miVideo = new Video("Año Nuevo");
miVideo.reproducir();




class Desfile {
    private _participantes = 0;

    public get participantes(): number {
        return this._participantes;
    }

    public set participantes(v: number){
        this._participantes = v;
    }
    

}

const desfileHoy = new Desfile();
desfileHoy.participantes = 100;         
console.log(desfileHoy.participantes);  



interface Encendible{
    encender(): void;
}

class Television implements Encendible {
    encender(): void{
        console.log("El televisor se encendió.");
    }
}


interface Verificable {
    verificar(nombre: string): boolean;
}

class NombreVerificable implements Verificable{
    verificar(nombre): boolean{         
        return nombre.toLowerCase();
    }

}


class Animal {
    moverse() {
        console.log("El animal se mueve.");
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("El perro ladra");
    }
}

const miPerro2 = new Perro();
miPerro2.moverse();     
miPerro2.ladrar();      




class Padre {
    saludar() {
        console.log("Hola");
    }
}

class Hijo extends Padre {
    
    saludar(nombre?: string){       
        if (nombre) {          
            console.log(`Hola ${nombre}`);
        } else {
            super.saludar();    
        }
    }

}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");


const h: Padre = new Hijo();



class Definicion {
    nombre = "definición";                              
    constructor() {
        console.log(`Mi nombre es ${this.nombre}`);     
    }
}

class Implementacion extends Definicion {}              

const d = new Implementacion();                         



class Saludo5 {
    public saludar() {              
        console.log("Saludar!");
    }
    

}
const inst = new Saludo5();
inst.saludar();                 


class Saludo6 {
    protected getDestinatario() {
        return "Amigos";
    }
}

class SaludoEspecial extends Saludo6 {
    saludar () {
        console.log(`Hola ${this.getDestinatario()}`);  
    }
}

const saludo: SaludoEspecial = new SaludoEspecial();
saludo.saludar();


class Base {
    protected m = 10;           
}

class Derivada extends Base {
    m = 15;                     
}
const z = new Derivada();
console.log(z.m);               



class Base2 {
    protected x: number = 1;
} 

class Derivada1 extends Base2 {
    protected x: number = 5;
}

class Derivada2 extends Base2 {
    imprimirX(c1: Derivada2) {      
        console.log(c1.x);
    }
}




class Base5 {
    private x = 0;
}

class Derivada5 extends Base {    
    imprimirX(){

    }
}

const dd = new Base5();




class A {
    private x = 10;

    public imprimirX(otra: A) {
        
        console.log(otra.x);        
    }
}
const ejemplo = new A();

ejemplo.imprimirX(new A());


class MiClase {
    private static x = 10;

    static imprimirX() {    
        
        console.log(`El valor de x es: ${this.x}`);
    }

    imprimirX(){            
        
        console.log(`El valor de x en una instancia es: ${MiClase.x}`);
    }
}


MiClase.imprimirX();




const miClase = new MiClase();
miClase.imprimirX();


class Base7 {
    static saludar() {
        console.log("Hola Mundo");
    }
}
class Derivada7 extends Base7{}

Derivada7.saludar();







class Caja<T> {
    contenido: T;

    constructor(value: T){
        this.contenido = value;
        console.log(this.contenido);
    }
}

type Juguete = {
    nombre: string;
};

const misJuguetes: Juguete[] = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });

const miCajaJuguetes: Caja<Juguete[]> = new Caja(misJuguetes);

type Maquillaje = {
    nombre: string;
};

const miMaquillaje: Maquillaje[] = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });

const miCajaMaquillaje: Caja<Maquillaje[]> = new Caja(miMaquillaje);




class Caja2{
    contenido = "";
    
    set (valor: string) {
        this.contenido = valor;
        return this;
    }
}

const miCaja: Caja2 = new Caja2();
const valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);


class Caja3 {
    contenido = "";

    constructor(contenido: string) {
        this.contenido = contenido;
    }

    igualQue(otro: this) {
        return otro.contenido == this.contenido;
    }
}

const caja1 = new Caja3("joyas");
const caja2 = new Caja3("joyas");
const caja3 = new Caja3("maquillaje");

console.log(caja1.igualQue(caja2)); 
console.log(caja1.igualQue(caja3)); 



class Video2 {
    constructor(
        public readonly nombre: string,
        public readonly duracion: number,
        public readonly formato: "mp4" | "mkv" | "web"
    ){}
}

const miVideo2: Video2 = new Video2("Vacaciones", 60, "mp4");
console.log(`Mi video de: ${miVideo2.nombre}`);
console.log(`Tiene una duración de: ${miVideo2.duracion} segundos`);
console.log(`Y el formato es: ${miVideo2.formato}`);


