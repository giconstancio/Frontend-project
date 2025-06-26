import { Injectable } from '@angular/core';

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
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('autenticado', 'true');
      }
      return true;
    }
    return false;
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('autenticado');
    }
  }

  isAutenticado(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('autenticado') === 'true';
    }
    return false;
  }
}
