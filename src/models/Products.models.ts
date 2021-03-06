import mongoose from 'mongoose'
import Product from '../interfaces/products.interfaces'

const productSchema = new mongoose.Schema<Product>({
    name: { type: String, required: [true, 'Name is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    brand: { type: String },
    price: { type: Number, required: [true, 'Price is required'] },
    discountPercentage: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    stock: { type: Number, default: 1, required: [true, 'Stock is required'] },
    image: { type: String, required: [true, 'Image is required'] },
    category: { type: String, required: [true, 'Category is required'] },
    deleted: { type: Boolean, default: false },
}, { timestamps: true })


export default mongoose.model<Product>('Product', productSchema)