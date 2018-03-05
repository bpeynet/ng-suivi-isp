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
}
