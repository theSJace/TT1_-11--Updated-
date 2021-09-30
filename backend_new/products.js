import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    category: String,
    image: String,
    price: String,
    countInStock: String,
    brand: String,
    rating: String,
    numReviews: String
})

export default mongoose.model('products', productSchema)