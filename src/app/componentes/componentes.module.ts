import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { DetalleEnemigosComponent } from './detalle-enemigos/detalle-enemigos.component';
import { DetalleJefesComponent } from './detalle-jefes/detalle-jefes.component';
import { DetalleLogrosComponent } from './detalle-logros/detalle-logros.component';
import { DetalleObjetosComponent } from './detalle-objetos/detalle-objetos.component';
import { DetalleNivelesComponent } from './detalle-niveles/detalle-niveles.component';


@NgModule({
  declarations: [HeaderComponent,FooterComponent,DetallePersonajesComponent,DetalleEnemigosComponent,DetalleJefesComponent,DetalleLogrosComponent,DetalleObjetosComponent,DetalleNivelesComponent],
  exports:[HeaderComponent,FooterComponent,DetallePersonajesComponent,DetalleEnemigosComponent,DetalleJefesComponent,DetalleLogrosComponent,DetalleObjetosComponent,DetalleNivelesComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ComponentesModule { }
