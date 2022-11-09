import { Component } from '@angular/core';
import { Client, NgxSoapService } from 'ngx-soap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSaopService';
  client: Client | any;

  constructor(private soap:NgxSoapService){
    this.soap.createClient('http://www.dneonline.com/calculator.asmx?wsdl ').then(client => this.client = client);
  }

  mySoap(){
    "From component.ts"
  }
  
  trainings=['LoanIQ','Condore','FFC','Azure Cloud'];
}
