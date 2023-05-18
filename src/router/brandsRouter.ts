import express from 'express'
import { BrandBusiness } from '../business/BrandBusiness'
import { BrandDatabase } from '../database/BrandDatabase'
import { BrandController } from '../controller/BrandController'

export const brandsRouter = express.Router()

const brandController = new BrandController(
    new BrandBusiness(
        new BrandDatabase()
    )
)

brandsRouter.get("/", brandController.findAllBrands)
brandsRouter.post("/", brandController.createBrands)