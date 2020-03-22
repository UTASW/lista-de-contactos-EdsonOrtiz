import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {

  showNotas=false;
  arrPersonas: Array<any> = [] as Array<JSON>;

  constructor(public service: MyServiceService ,public alert: AlertController) {
    this.arrPersonas = this.service.getArr();
   }

  ngOnInit() {
    this.arrPersonas = this.service.getArr();
  }

  async eliminar(item) {
    const alert = await this.alert.create({
      message: '¿Seguro que quieres eliminar el contacto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.service.eliminar(item);
          }
        }
      ]
    });
  
    await alert.present();
  }

}
