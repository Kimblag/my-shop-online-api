import { Request, RequestHandler, Response } from 'express'
import ProductsModels from '../models/Products.models'
import { products } from '../seeder/products'

/**
 * 
 * @getProducts = function type RequestHandler
 * @param req = Type Request
 * @param res = Type Response
 */

export const getProducts: RequestHandler = async (req: Request, res: Response): Promise<any> => {
    const qNew = req.query.new
    const qCategory = req.query.category

    const qName = req.query.name
    console.log(qName)

    try {
        let products;
        if (qNew) {
            products = await ProductsModels.find({ deleted: false }).sort({ _id: -1 }).limit(5)
        } else if (qCategory) {
            products = await ProductsModels.find({ deleted: false, category: { $in: [qCategory] } })
        } else if(qName){
            products = await ProductsModels.find({deleted: false, name: {'$regex': qName, '$options': 'i'}})
         } else {
            products = await ProductsModels.find({ deleted: false })
        }
        products.length === 0
            ? res.status(201).send({ message: 'There are no products.', data: products })
            : res.status(200).send({message:'success', data: products})
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}

export const getProduct: RequestHandler = async (req: Request, res: Response): Promise<any> => {
    try {
        let product = await ProductsModels.find({ _id: req.params.id, deleted: false })
        products.length === 0
            ? res.status(404).send({ message: 'There are no products.' })
            : res.status(200).send(product)
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}

