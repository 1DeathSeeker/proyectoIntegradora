export interface gameDB {
  dataEnemigos: DataEnemigo[];
  dataJefes: DataJefe[];
  dataLogros: DataLogro[];
  dataNiveles: DataNivel[];
  dataObjetos: DataObjeto[];
  dataPersonaje: DataPersonaje[];
}


//Personajes
export interface DataPersonaje {
  avatar?: string;
  descripcion?: string;
  habilidad?: string;
  id?: number;
  imagen?: string;
  nombre?: string;
  stats?: Stats2;
}

export interface Stats2 {
  dano?: string;
  salto?: string;
  velocidad?: string;
  vida?: string;
}

  //Niveles
export interface DataNivel {
  Ubicacion?: string;
  id?: number;
  imagen?: string;
  nombre?: string;
}

//Logros
export interface DataLogro {
  descripcion?: string;
  id?: number;
  imagen?: string;
  nombre?: string;
}


//Jefes
export interface DataJefe {
  avatar?: string;
  descripcion?: string;
  habilidad?: string;
  id?: number;
  imagen?: string;
  nivel?: string;
  nombre?: string;
  stats?: Stats;
}


//Enemigos
export interface DataEnemigo {
  avatar?: string;
  descripcion?: string;
  id?: number;
  imagen?: string;
  nivel?: string;
  nombre?: string;
  stats?: Stats;
}

export interface Stats {
  dano?: string;
  vida?: string;
}

//Objetos

export interface DataObjeto{
  descripcion?: string;
  id?: number;
  imagen?: string;
  nombre?: string;
}