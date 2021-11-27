import { Usuario } from './usuario';
import { Jogo } from "./jogo";

export interface PerfilMoba {
    id?: number;
    idUsuario: number;
    idJogo: number;
    usuario?: Usuario;
    Jogo?: Jogo;
    eloLOL: string;
    Champ: string;
    LaneMain: string;
    laneSecundaria: string;
    criadoem?: string;
}