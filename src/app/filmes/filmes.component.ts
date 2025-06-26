import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Filme, StatusFilme } from '../filmes/model/filme';

@Component({
  selector: 'app-filmes',
  standalone: true,
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class FilmesComponent {
  StatusFilme = StatusFilme;
  listaFilmes: Filme[] = [];
  novoFilme: Filme = new Filme('', '', StatusFilme.NaoAssistido);
  mostrarFormulario = false;
  modoEdicao = false;
  filtroTitulo = '';
  filtroStatus: string = '';
  indiceEdicao: number = -1;

  constructor() {
    this.carregarFilmesDoStorage();
  }

  carregarFilmesDoStorage() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const filmesJson = localStorage.getItem('listaFilmes');
      if (filmesJson) {
        this.listaFilmes = JSON.parse(filmesJson);
      }
    }
  }

  salvarFilmesNoStorage() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('listaFilmes', JSON.stringify(this.listaFilmes));
    }
  }

  abrirFormulario() {
    this.mostrarFormulario = true;
    this.modoEdicao = false;
    this.novoFilme = new Filme('', '', StatusFilme.NaoAssistido);
  }

  adicionarFilme() {
    if (this.modoEdicao) {
      this.listaFilmes[this.indiceEdicao] = { ...this.novoFilme };
    } else {
      this.listaFilmes.push(new Filme(this.novoFilme.titulo, this.novoFilme.descricao, this.novoFilme.status));
    }
    this.salvarFilmesNoStorage();
    this.mostrarFormulario = false;
  }

  editarFilme(index: number) {
    this.modoEdicao = true;
    this.mostrarFormulario = true;
    this.indiceEdicao = index;
    this.novoFilme = { ...this.listaFilmes[index] };
  }

  excluirFilme(index: number) {
    this.listaFilmes.splice(index, 1);
    this.salvarFilmesNoStorage();
  }

  alterarStatus(index: number) {
    const filme = this.listaFilmes[index];
    filme.status = filme.status === StatusFilme.Assistido ? StatusFilme.NaoAssistido : StatusFilme.Assistido;
    this.salvarFilmesNoStorage();
  }

  listaFilmesFiltrados() {
    return this.listaFilmes.filter(filme => {
      const tituloMatch = this.filtroTitulo === '' || filme.titulo.toLowerCase().includes(this.filtroTitulo.toLowerCase());
      const statusMatch = this.filtroStatus === '' || filme.status === this.filtroStatus;
      return tituloMatch && statusMatch;
    });
  }

  compartilharFilme(id: number) {
    if (typeof window !== 'undefined') {
      window.open(`/filmes/${id}`, '_blank');
    }
  }
}
