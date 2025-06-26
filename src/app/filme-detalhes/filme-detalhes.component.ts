import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Filme, StatusFilme } from '../filmes/model/filme';

@Component({
  selector: 'app-filme-detalhes',
  standalone: true,
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.css'],
  imports: [CommonModule],
})
export class FilmeDetalhesComponent implements OnInit {
  filme?: Filme;
  StatusFilme = StatusFilme;
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Garante que só tenta acessar localStorage no browser
    if (typeof window !== 'undefined') {
      this.carregarFilme(id);
    }
  }

  carregarFilme(id: number) {
    const filmesJson = localStorage.getItem('listaFilmes');
    if (filmesJson) {
      const filmes = JSON.parse(filmesJson) as Filme[];
      const encontrado = filmes.find(f => f.id === id);
      if (encontrado) {
        this.filme = new Filme(encontrado.titulo, encontrado.descricao, encontrado.status, encontrado.id);
      }
    }
  }
}
