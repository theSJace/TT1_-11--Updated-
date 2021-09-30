import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    category: {
        name: String,
        description: String,
        image: String,
    },
    image: String,
    price: String,
    countInStock: String,
    brand: String,
    rating: String,
    numReviews: String
}, { timestamps: true })

export default mongoose.model('products', productSchema)