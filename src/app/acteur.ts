export class Acteur {
  id: number;
  nom: string;
  prenom: string;
  est_ingenieur_secu: boolean;
  est_architecte: boolean;
  est_rsi_fab: boolean;

  public toString(): string {
    return this.prenom + this.nom;
  }
}
