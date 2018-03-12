import { Version } from './version';
import { LigneProduit } from './ligne-produit';

export class Projet {
  id: number;
  nom: string;
  programme: string;
  code: string;
  chef: string;
  commentaires: string;
  date_creation: string;
  date_derniere_modif: string;
  versions: Version[];
  ligne_produit: LigneProduit;

  static triSelonCode(p1: Projet, p2: Projet) {
    if (p1.code > p2.code) {
      return 1;
    } else if (p1.code < p2.code) {
      return -1;
    } else {
      return 0;
    }
  }
  
}
