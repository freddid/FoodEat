import Restaurant from "../model/restaurantModel.js"
import Menu from "../model/menuModel.js"




export async function getRestaurant(req, res) {
    let menus = await Menu.find({restaurant_id: '63ad5a192e70e04600404c46'})
    let restaurant  = await Restaurant.find({_id: '63ad5a192e70e04600404c46'});
    restaurant.push(menus);


   res.json(restaurant);
}
