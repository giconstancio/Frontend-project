import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    CommonModule
  ]
})
export class HomePageComponent implements OnInit {

  filmesEmAlta: { titulo: string; imagem: string }[] = [];

  filmesDisponiveis = [
    { titulo: 'Oppenheimer', imagem: 'assets/images/oppenheimer.jpg' },
    { titulo: 'Ainda Estou Aqui', imagem: 'assets/images/ainda-estou-aqui.jpg' },
    { titulo: 'Barbie', imagem: 'assets/images/barbie.jpg' },
    { titulo: 'Como Treinar Seu Dragão', imagem: 'assets/images/comoTreinarSeuDragao.jpg' },
    { titulo: 'Duna 2', imagem: 'assets/images/duna2.jpg' },
    { titulo: 'Extermínio', imagem: 'assets/images/exterminio.jpg' },
    { titulo: 'Homem-Aranha', imagem: 'assets/images/homem-aranha.jpg' },
    { titulo: 'Lilo & Stitch', imagem: 'assets/images/lilo-stitch.jpg' },
    { titulo: 'Premonição', imagem: 'assets/images/premonicao.jpg' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.exibirFilmesAleatorios();
  }

  irParaLogin() {
    this.router.navigate(['/login-page']);
  }

  exibirFilmesAleatorios() {
    const embaralhado = [...this.filmesDisponiveis].sort(() => 0.5 - Math.random());
    this.filmesEmAlta = embaralhado.slice(0, 4);
  }
}
