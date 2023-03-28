import { Component } from '@angular/core';
import { RequestLoginModel } from 'src/app/resources/models/requestLoginModel';
import { LoginService } from './../../resources/services/login.service';
import { AlertService } from 'src/app/resources/services/alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 requestLogin! : RequestLoginModel;


  loading = false;

  constructor(
    private loginService : LoginService,
     private alertService: AlertService,
     private router: Router){

  }

  ngOnInit(): void {
    this.requestLogin = new RequestLoginModel();
  }


  Logar() {
      this.loading = true;


     this.loginService.doLogin(this.requestLogin)
     .subscribe({
        next: (v) => {this.router.navigate(['dashboard']);},
        error: (e) => {this.alertService.error(e.error.message)},
        complete: () => console.info('complete')
     });


     /* this.loginService.doLogin(this.requestLogin)
      .subscribe(data => {
         console.log(data);
      },
      error=> {
        console.log(error.error.message);
      })

      setTimeout(() => {
        this.loading = false;
        console.log(this.requestLogin);
      }, 5000);

*/
this.loading = false;
  }


}
;
