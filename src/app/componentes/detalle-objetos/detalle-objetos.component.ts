import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataObjeto1 } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-detalle-objetos',
  templateUrl: './detalle-objetos.component.html',
  styleUrls: ['./detalle-objetos.component.scss'],
})
export class DetalleObjetosComponent implements OnInit {

  constructor(private servicioConsulta:ConsultasService, private modalCtrl:ModalController) { }
  @Input()id: number;
  objeto:DataObjeto1={};

  regresar() {
    this.modalCtrl.dismiss();
    }

  ngOnInit() {

    this.servicioConsulta.getObjeto(this.id)
    .subscribe((resp:DataObjeto1)=>{
      console.log('Objeto',resp)
      this.objeto=resp;
    })

  }

}
