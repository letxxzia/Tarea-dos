export class Cliente {
    private id?:number
    private nombre: string;
    private apellidoUno: string;
    private apellidoDos: string;

    constructor(nombre:string, apellidoUno:string, apellidoDos:string){
        this.nombre = nombre
        this.apellidoUno = apellidoUno
        this.apellidoDos = apellidoDos
    }
}