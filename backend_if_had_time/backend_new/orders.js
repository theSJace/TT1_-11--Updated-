import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    orderItems: [
        {
            name: String,
            qty: Number,
            image: String,
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
                required: true
            },
        },
    ],

    address: String,
    paymentMethod: String,
    paymentStatus: String,
    itemsPrice: Number,
    shippingPrice: Number,
    totalPrice: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    paidAt: Date,
    isDelivered: Boolean,
    deliveredAt: Date

}, { timestamps: true });

export default mongoose.model('orders', orderSchema)
