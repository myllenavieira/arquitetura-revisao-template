import { Brand, BrandDB } from "../models/Brand";
import { BaseDatabase } from "./BaseDatabase";

export class BrandDatabase extends BaseDatabase{
    private TABLE_NAME = "brands";

    public findAllBrands = async(): Promise<BrandDB[]> => {

        return await BaseDatabase.connection(this.TABLE_NAME)
    }

    public findBrandById = async (id: string): Promise<BrandDB | undefined> => {

        const result = await BaseDatabase.connection(this.TABLE_NAME).where({id})

        return result[0];
    }
    
    public createBrands = async (input: Brand): Promise<void> => {
        const result = await BaseDatabase.connection(this.TABLE_NAME).insert({
            id: input.getId(),
            name: input.getName()
        })
    }
}