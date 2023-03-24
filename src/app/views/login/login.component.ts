import { Component } from '@angular/core';
import { RequestLoginModel } from 'src/app/resources/models/requestLoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 requestLogin! : RequestLoginModel;


  loading = false;

  constructor(){

  }

  ngOnInit(): void {
    this.requestLogin = new RequestLoginModel();
  }


  Logar() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        console.log(this.requestLogin);
      }, 5000);


  }


}
