import { Component } from '@angular/core';
import { Filme, StatusFilme } from './model/filme';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filmes',
  imports: [
    CommonModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})

export class FilmesComponent {
  mostrarFormulario = false;
  public StatusFilme = StatusFilme;
  listaFilmes: Filme[] = [];
  novoFilme: Filme = new Filme('', '', StatusFilme.NaoAssistido);
  filtroTitulo: string = '';
  filtroStatus: string = '';
  private proximoId = 1;

  abrirFormulario() {
    this.mostrarFormulario = true;
    this.novoFilme = new Filme('', '', StatusFilme.NaoAssistido);
  }

  adicionarFilme() {
    this.novoFilme.id = this.proximoId++;
    this.listaFilmes.push(this.novoFilme);
    this.mostrarFormulario = false;
  }

  listaFilmesFiltrados(): Filme[] {
    return this.listaFilmes.filter(filme => {
      const tituloMatch = filme.titulo.toLowerCase().includes(this.filtroTitulo.toLowerCase());
      const statusMatch = this.filtroStatus === '' || filme.status === this.filtroStatus;
      return tituloMatch && statusMatch;
    });
  }

  editarFilme(index: number) {
    const filme = this.listaFilmes[index];
    this.novoFilme = new Filme(filme.titulo, filme.descricao, filme.status, filme.id);
    this.mostrarFormulario = true;
    this.listaFilmes.splice(index, 1);
  }

  excluirFilme(index: number) {
    this.listaFilmes.splice(index, 1);
  }

  compartilharFilme(id: number | undefined) {
    if (!id) return;

    const linkCompartilhamento = `http://localhost:4200/filme/${id}`;

    navigator.clipboard.writeText(linkCompartilhamento)
      .then(() => alert('Link copiado para a área de transferência!'))
      .catch(() => alert('Não foi possível copiar o link.'));
  }

}
