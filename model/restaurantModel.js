import mongoose from "mongoose";

const {Schema} = mongoose;

const restaurantSchema = new Schema({
    name: String,
    desc: String,
    img: String,
}); 

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;