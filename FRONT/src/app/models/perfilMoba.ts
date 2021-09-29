import { Jogo } from "./jogo";

export interface PerfilMoba {
    Id?: number;
    // idJogador: Usuario;
    jogo: Jogo;
    eloLOL: string;
    Champ: string;
    LaneMain: string;
    laneSecundaria: string;
    criadoem?: string;
}