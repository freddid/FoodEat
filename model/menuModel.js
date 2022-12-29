import mongoose from "mongoose";

const {Schema} = mongoose;

const menuSchema = new Schema({
    name: String,
    desc: String,
    img: String,
    restaurant_id:  [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;