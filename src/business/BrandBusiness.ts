import { Request, Response } from "express"
import { BrandDatabase } from "../database/BrandDatabase"
import { Brand } from "../models/Brand"
import { CreateBrandInputDTO } from "../dtos/createBrand.dto"
import { BrandAlreadyExist } from "../errors/AlreadyExistError"

export class BrandBusiness{
    constructor(private brandDatabase: BrandDatabase){}

    public findAllBrands = async (): Promise<Brand[]> => {
        
        const brandDB = await this.brandDatabase.findAllBrands()

        const result = brandDB.map((i)=> new Brand(i.id, i.name))

        return result;
    }
    
    public createBrands = async (input: CreateBrandInputDTO): Promise <void> => {

        const brandDB = await this.brandDatabase.findBrandById(input.id)

        if(brandDB){
            throw new BrandAlreadyExist()
        }

        const newBrand = new Brand(input.id, input.name)
        await this.brandDatabase.createBrands(newBrand)
    }
    }