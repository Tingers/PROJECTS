import { Jogo } from "./jogo";

export interface PerfilMoba {
    Id?: number;
    // idUsuario: number;
    idJogo: number;
    eloLOL: string;
    Champ: string;
    LaneMain: string;
    laneSecundaria: string;
    criadoem?: string;
}