import {Estado} from "../../estado/estado/models/estado"

export class Municipio {
    codigo: number;
    descricao: string;
    domicilios: number; 
    populacao: number; 
    pib: number;
    codigoEstado: number; 
    estado: Estado;
}