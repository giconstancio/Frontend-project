import { Injectable } from '@angular/core';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly usuarioMock = {
    email: 'usuario@gmail.com',
    senha: '123'
  };

  login(email: string, senha: string): boolean {
    if (email === this.usuarioMock.email && senha === this.usuarioMock.senha) {
      localStorage.setItem('autenticado', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('autenticado');
  }

  isAutenticado(): boolean {
    return localStorage.getItem('autenticado') === 'true';
  }
}
