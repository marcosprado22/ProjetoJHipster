export interface IPessoa {
  id?: number;
  nome?: string;
  cpf?: string;
  email?: string;
}

export class Pessoa implements IPessoa {
  constructor(public id?: number, public nome?: string, public cpf?: string, public email?: string) {}
}
