import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  mostrarSenha = false;

  constructor(
    private router: Router

  ) {}

  voltarParaHome() {
    this.router.navigate(['/']);
  }



  loginComEmail(email: string, password: string) {
    if(email && password != null) {

    }
  }
}
