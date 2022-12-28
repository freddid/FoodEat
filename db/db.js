import mongoose from 'mongoose';



async function main() {
  await mongoose.connect('mongodb+srv://root:root@cluster0.yspwbkw.mongodb.net/ilyas?retryWrites=true&w=majority').catch(err => console.log(err));
    console.log('БАЗА работает');

};

export default main;