import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filme, StatusFilme } from './model/filme';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-filmes',
  imports: [CommonModule, MatRadioModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})

export class FilmesComponent {
  mostrarFormulario = false;
  public StatusFilme = StatusFilme;
  listaFilmes: Filme[] = [];
  novoFilme: Filme = new Filme('', '', StatusFilme.NaoAssistido);

  abrirFormulario() {
    this.mostrarFormulario = true;
    this.novoFilme = new Filme('', '', StatusFilme.NaoAssistido);
  }

  adicionarFilme() {
    this.listaFilmes.push(this.novoFilme);
    this.mostrarFormulario = false;
  }
}
