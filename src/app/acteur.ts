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

  static compare(a1: Acteur, a2: Acteur): boolean {
    return a1 && a2 ? a1.id === a2.id : a1 === a2;
  }
}
