import Restaurant from "./model/restaurantModel.js";
import Menu from "./model/menuModel.js";
import Marker from "./model/markerModel.js";
import main from "./db/db.js";

main();

async function addRst() {
    await Restaurant.insertMany([
        { name: 'KFC', desc: 'Высокое качество за низкую цену', img: 'img/kfc.jpg'},
        { name: 'MacDonalds', desc: 'Высокое качество за низкую цену', img: 'img/mac.jpg'},
        { name: 'Кофетун', desc: 'Высокое качество за низкую цену' },
    ]);

}
async function addMenu() {
    await Menu.insertMany([
        { name: '', desc: 'Очень вкусно', restaurant_id: '63ad5a192e70e04600404c46' },
        { name: 'MacDonalds', desc: 'Вкусно очень', restaurant_id: '63ad5a192e70e04600404c46' },
        { name: 'Пицца', desc: 'Вкусно и точка', restaurant_id: '63ad5a192e70e04600404c48' },
    ]);
}

async function addMarker() {
    await Marker.insertMany([
        { marker: '/image-markers/kfc', restaurant_id: '63ad88110b4bce510cbab0c2' },
        { marker: '/image-marker/mac', restaurant_id: '63ad88110b4bce510cbab0c3' },
    ]);
}



// addRst();

addMarker()

// addMenu()