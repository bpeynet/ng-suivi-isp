import { Projet } from './projet';
import { Jalon } from './jalon';
import { TypeDeSuivi } from './type-de-suivi';
import { Avancement } from './avancement';

export class Version {
    id: number;
    projet: Projet;
    code_colibri: number;
    jalon: Jalon;
    type_de_suivi: TypeDeSuivi;
    avancement: Avancement;
    CNIL: boolean;
    homologation_RGS: boolean;
    exigences_metier: boolean;
    commentaires: string;
    date_creation: string;
    date_derniere_modif: string;
}
