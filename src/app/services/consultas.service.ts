import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) { }

  getDatos(){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB.json');
  }

  getPersonaje(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataPersonaje/'+id+'.json');
  }

  getObjeto(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataObjetos/'+id+'.json');
  }

  getEnemigo(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataEnemigos/'+id+'.json');
  }

  getJefe(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataJefes/'+id+'.json');
  }

  getLogro(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataLogros/'+id+'.json');
  }

  getNivel(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataNiveles/'+id+'.json');
  }



}
