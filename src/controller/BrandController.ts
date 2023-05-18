import { Request, Response } from "express"
import { BrandBusiness } from "../business/BrandBusiness"
import { CreateBrandSchema } from "../dtos/createBrand.dto"
import { ZodError } from "zod"
import { BaseError } from "../errors/BaseError"


export class BrandController {
    constructor(private brandBusiness: BrandBusiness) { }

    public findAllBrands = async (req: Request, res: Response) => {
        try {
            const result = await this.brandBusiness.findAllBrands()

            res.status(200).send(result)
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).send(error.issues);
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message);
            } else {
                res.status(500).send("Erro inesperado");
            }
        }
    
}

    public createBrands = async (req: Request, res: Response) => {
        try {
            const input = CreateBrandSchema.parse({
                id: req.body.id,
                name: req.body.name
            })
            await this.brandBusiness.createBrands(input)
            res.status(201).send({message: "Marca criada com sucesso"})

        } catch (error) {
            console.log(error)
        }
    }
}
