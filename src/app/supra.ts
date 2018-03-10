import { LigneProduit } from './ligne-produit';

export class Supra {
  id: number;
  libelle: string;
  lignes_produit: LigneProduit[];

  static compare(s1: Supra, s2: Supra): boolean {
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }
}
