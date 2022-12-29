import mongoose from 'mongoose';



async function main() {
  await mongoose.set("strictQuery", false);

  await mongoose.connect('mongodb+srv://root:root@cluster0.qjsm2pq.mongodb.net/FoodEat?retryWrites=true&w=majority').catch(err => console.log(err));
  console.log('БАЗА работает');

};

export default main;