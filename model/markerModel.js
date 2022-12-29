import mongoose from "mongoose";

const {Schema} = mongoose;

const markersSchema = new Schema({
    marker: String,
    restaurant_id:  [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
});

const Marker = mongoose.model('Marker', markersSchema);

export default Marker;