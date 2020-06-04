export class regex {
    
    private _regex : string;

    public get regex_() : string {
        return this._regex;
    }
    public set regex_(v : string) {
        this._regex = v;
    }

    
    public _desc : string;
    public get desc() : string {
        return this._desc;
    }
    public set desc(v : string) {
        this._desc = v;
    }
    

    constructor() {

    }
    public getRegex(tipo: string){
        const rgx = new regex()
        switch (tipo) {
            //solo letras
            case 'NUM':
                rgx.regex_ = '^[0-9][^<>]*$'
                rgx._desc = 'El valor debe ser solo letras y no debe tener caracteres HTML < y >'
                break;
            //solo letras
            case 'LET':
                rgx.regex_ = '^[a-zA-Záéíóú][^<>]*$'
                rgx._desc = 'El valor debe ser solo letras y no debe tener caracteres HTML < y >'
                break;
            //telefono
            case 'TEL':
                rgx.regex_ = '^[0-9#()-][^<>]*$'
                rgx._desc = 'El valor debe ser en formato de número telefónico y no debe tener caracteres HTML < y >'
                break;
            //numeros y letras
            case 'NYL':
                rgx.regex_ = '^[a-zA-Z0-9_-][^<>]*$'
                rgx._desc = 'El valor debe ser alfanumérico, puede incluir - y _ y no debe tener caracteres HTML < y >'
                break;
            //Todos
            case 'ANY':
                rgx.regex_ = '^[^<>]*$'
                rgx._desc = 'El valor no debe tener caracteres HTML < y >'
                break;
            //direccion
            case 'DIR':
                rgx.regex_ = '^[a-zA-Z0-9#.,_-][^<>]*$'
                rgx._desc = 'El valor debe ser alfanumérico, puede incluir - y _ y no debe tener caracteres HTML  < y >'
                break;
            //Email
            case 'MAI':
                rgx.regex_ = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                rgx._desc = 'El valor debe ser en formato de correo electrónico y no debe tener caracteres HTML < y >'
                break;
            //RFC
            case 'RFC':
                rgx.regex_ = "^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$"
                rgx._desc = 'El valor debe ser en formato de RFC y no debe tener caracteres HTML < y >'
                break;
            //razon social
            case 'RAS':
                rgx.regex_ = '^[a-zA-Z0-9_.\s-][^<>]*$'
                break;
            default:
                break;
        }
        return rgx
    }
}