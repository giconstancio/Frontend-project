export enum StatusFilme {
  Assistido = 'assistido',
  NaoAssistido = 'nao_assistido'
}

export class Filme {
    titulo: string;
    descricao: string;
    status: StatusFilme;

    constructor(titulo: string, descricao: string, status: StatusFilme) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
    }
}