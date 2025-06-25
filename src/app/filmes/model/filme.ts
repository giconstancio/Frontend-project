export enum StatusFilme {
  Assistido = 'assistido',
  NaoAssistido = 'nao_assistido'
}

export class Filme {
  id?: number;
  titulo: string;
  descricao: string;
  status: StatusFilme;

  constructor(titulo: string, descricao: string, status: StatusFilme, id?: number) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = status;
    this.id = id;
  }
}
