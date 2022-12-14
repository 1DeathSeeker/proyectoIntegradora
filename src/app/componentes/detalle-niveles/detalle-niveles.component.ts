import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataNivel } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-detalle-niveles',
  templateUrl: './detalle-niveles.component.html',
  styleUrls: ['./detalle-niveles.component.scss'],
})
export class DetalleNivelesComponent implements OnInit {

  constructor(private servicioConsulta: ConsultasService, private modalCtrl:ModalController) { }
  @Input()id:number;
  nivel:DataNivel={};

  regresar() {
    this.modalCtrl.dismiss();
    }

  ngOnInit() {

    this.servicioConsulta.getNivel(this.id)
    .subscribe((resp:DataNivel)=>{
      console.log('Nivel',resp)
      this.nivel=resp;
    })

  }

}
