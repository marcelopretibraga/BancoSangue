import { Cor } from "../../cor/models/cor";

export class Veiculo {
    Codigo: number;
    Nr_placa : string
    Nr_ano : number
    Nr_modelo : number
    Cd_cor : number     
    Nr_chassi : string
    Nr_passageiros : number
    Nr_portas : number
    Dt_registro : Date
    Cor_Veiculo : Cor
}