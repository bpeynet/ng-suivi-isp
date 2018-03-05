import { Supra } from './supra';
import { Acteur } from './acteur';

export class LigneProduit {
  id: number;
  libelle: string;
  id_supra: number;
  supra: Supra;
  inge_secu: Acteur;
  rsi_fab: Acteur[];
  architectes: Acteur[];

  static sort(l1: LigneProduit, l2: LigneProduit) {
    if (l1.libelle > l2.libelle) {
      return 1;
    } else if (l1.libelle < l2.libelle) {
      return -1;
    } else {
      return 0;
    }
  }
}
