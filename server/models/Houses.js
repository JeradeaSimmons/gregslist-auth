import mongoose from 'mongoose'
const Schema = mongoose.Schema





export const HouseSchema = new Schema(

    {
        bathrooms: { type: Number, required: true, maxLength: 100 },
        rooms: { type: Number, required: true, maxLength: 100 },
        year: { type: Number, required: true, min: 1850, max: 99999 },
        price: { type: Number, required: true, min: 0, max: 9999999999 },
        imgUrl: { type: String, maxLength: 600, default: 'https://stock.adobe.com/search/images?k=no%20image%20available' },
        description: { type: String, maxLength: 1000 },
        levels: { type: Number, maxLength: 100 },

    },
    { timestamps: true, toJSON: { virtuals: true } }
)