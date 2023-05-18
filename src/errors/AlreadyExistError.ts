import { BaseError } from "./BaseError";

export class BrandAlreadyExist extends BaseError{
    constructor(){
        super(406, "Marca já existe")
    }
}