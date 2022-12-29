import mongoose from "mongoose";

const {Schema} = mongoose;

const reviewsSchema = new Schema({
    name: String,
    rate: Number,
    restaurant_id:  [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
}); 

const Reviews = mongoose.model('Reviews', reviewsSchema);

export default Reviews;