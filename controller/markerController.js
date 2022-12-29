import Marker from "../model/markerModel.js";



export async function getMarkers(req, res) {

    let markers = await Marker.find();
    res.json(markers); 
}
 