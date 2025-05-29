import { Grade } from "./grade-model";

export class Class{
    id: number;
    razredId: Grade["id"];
    nazivOdeljenja: string;
    kombinovanoOdeljenje: boolean;
    celodnevnaNastava: boolean;
    vrstaOdeljenjaId: number;
    izdvojenoOdeljenje: boolean;
    nazivIzdvojeneSkole: string;
    odeljenskiStaresina: string;
    smena: string;
    jezikNastaveId: number;
    dvojezicnoOdeljenje: boolean;
    prviStraniJezikId: number;
    brojUcenika: number;
    brojUcenica: number;
    ukupnoUcenika: number;

    constructor() {
        this.id = 0;
        this.razredId = 0;
        this.nazivOdeljenja = '';
        this.kombinovanoOdeljenje = false;
        this.celodnevnaNastava = false;
        this.vrstaOdeljenjaId = 0;
        this.izdvojenoOdeljenje = false;
        this.nazivIzdvojeneSkole = '';
        this.odeljenskiStaresina = '';
        this.smena = '';
        this.jezikNastaveId = 0;
        this.dvojezicnoOdeljenje = false;
        this.prviStraniJezikId = 0;
        this.brojUcenika = 0;
        this.brojUcenica = 0;
        this.ukupnoUcenika = 0;
    }
}