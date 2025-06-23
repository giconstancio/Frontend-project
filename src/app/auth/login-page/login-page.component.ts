import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  imports: [
    ReactiveFormsModule,
  ]
})
export class LoginPageComponent {
  mostrarSenha = false;
  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  voltarParaHome() {
    this.router.navigate(['/home-page']);
  }

  loginComEmailFicticio() {
    const email = this.login.get('email')?.value;
    const senha = this.login.get('password')?.value;

    if (email && senha) {
      Swal.fire({
        title: 'Autenticando...',
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        backdrop: true,
      });

      setTimeout(() => {
        const sucesso = this.authService.login(email, senha);

        Swal.close();

        if (sucesso) {
          Swal.fire({
            icon: 'success',
            title: 'Login bem-sucedido!',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.router.navigate(['filmes']);
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Erro ao entrar',
            text: 'E-mail ou senha inválidos',
          });
        }
      }, 1200);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Preencha todos os campos!',
        timer: 1500,
        showConfirmButton: false,
      });
    }
  }
}
