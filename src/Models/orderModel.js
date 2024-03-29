
const mongoose = require("mongoose")
const uuid = require("uuid")


const orderSchema = new mongoose.Schema({
    id: { type: String, default: () => uuid.v4() },

    tableNumber: { type: Number, default: 0, required: true },

    orderDate: { type: Date, default: Date.now },

    preparationTime: { type: Date, default: Date.now },

    startPreparation: { type: Date, default: Date.now },

    endPreparation: { type: Date, default: Date.now },

    totalPrice: { type: Number, required: true, trim: true },

    cartData: { type: Array, required: true },

    userId: { type: String, required: true },

    currentOrder: { type: Boolean, default: false },

    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },

    status: { type: String, required: true, enum: ["RECEIVED", "PROCESSING", "ON_TABLE", "COMPLETED", 'CANCELED'], default: "RECEIVED" },

}, { timestamps: true })




module.exports = mongoose.model("order", orderSchema)
