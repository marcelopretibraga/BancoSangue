export class StringValidation {
    
    static isNullOrEmpty(value: string){
        if (value == "" || value == undefined){
            return true;
        }
        return false;
    }

    static maxCaracteres(value: string, tamanho: number){
        if(value.length > tamanho)
        return value;
    }

    static minCaracteres(value: string, tamanho: number){
        if (value.length < tamanho)
            return value;
    }
} 