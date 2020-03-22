import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MyServiceService } from '../services/my-service.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  clrNombre: string;
  clrCorreo: string;
  clrTelefono: string;
  clrNotas: string;
  showNotas=false;
  arrPersonas: Array<any> = [] as Array<JSON>;
  blnNext: boolean;
  strMessage: string;
  date : Date;

  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(public alertController: AlertController, public service : MyServiceService) {}

  async addPersona(){
    
    this.strMessage = '';
    this.blnNext = false;
    (this.clrNombre) ? this.fnError() : this.fnError('Error: Favor de llenar el campo nombre');
    (this.clrCorreo) ? (this.regexp.test(this.clrCorreo)) ? this.fnError() : this.fnError('Error: Correo no válido') : this.fnError('Error: Error Favor de llenar el campo correo');
    (this.clrTelefono) ? this.fnError() : this.fnError('Error: Favor de llenar el campo teléfono');
    (this.clrNotas) ? this.fnError() : this.fnError('Error: Favor de llenar el campo notas');

    


    if(!this.blnNext){
      const personas: any = {
        nombre : this.clrNombre,
        correo : this.clrCorreo,
        telefono : this.clrTelefono,
        notas : this.clrNotas,
        fecha : this.date
      }
      //Alerta de éxito
      const alert = await this.alertController.create({
        header: '¡Éxito!',
        subHeader: '',
        message:  'Su contacto se ha añadido con éxito',
        buttons: ['OK']
      });
    
      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);

      this.service.guardar(personas);
      
      console.log(this.arrPersonas);
  
      this.clrCorreo ='';
      this.clrNombre ='';
      this.clrTelefono ='';
      this.clrNotas ='';
      this.date = null;

      } else {
        this.presentAlert();
      }
    }
    

  fnError(msg?: string){
    if(msg){
      //console.log(msg);
      this.strMessage += '<br>' + msg + '<br>';
      this.blnNext = true;
    } else if(this.blnNext){
      this.blnNext = true;
    } else {
      this.blnNext = false;
  }

}

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message:  this.strMessage,
    buttons: ['OK']
  });

  await alert.present();
}



}
