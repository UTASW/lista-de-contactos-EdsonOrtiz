import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  arrPersonas: Array<any> = [] as Array<JSON>;


  constructor() { }
  guardar(personas){
    this.arrPersonas.push(personas);
  console.log(personas);

  }

  eliminar(item){
    let i = this.arrPersonas.indexOf(item);
    this.arrPersonas.splice(i,1);
  }

  getArr(){
    return this.arrPersonas;
  }
  
}
