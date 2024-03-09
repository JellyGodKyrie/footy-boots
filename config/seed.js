require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Firm Ground', sortOrder: 10},
    {name: 'Artificial Turf', sortOrder: 20},
    {name: 'Indoor', sortOrder: 30},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Mercurial Vapor 15 Elite', brand: 'Nike', emoji: '../public/img/mercurial-vapor-15.png', price: 259.99, category: categories[0]},
    {name: 'Superfly 9 Elite Dream Speed', brand: 'Nike', emoji: '../public/img/superfly9.jpg', price: 294.99, category: categories[0]},
    {name: 'X CrazyFast Elite', brand: 'Adidas', emoji: '../public/img/CrazyFastX.jpg', price: 259.99, category: categories[0]},
    {name: 'Predator Elite', brand: 'Adidas', emoji: '../public/img/Predator_Elite_FT.jpg', price: 259.99, category: categories[0]},
    {name: 'Future 7 Ultimate', brand: 'Puma', emoji: '../public/img/23PUMAFTR7.jpg', price: 239.99, category: categories[0]},
    {name: 'Phantom Luna II Elite', brand: 'Nike', emoji: '../public/img/Phantom2eliteLuna.jpeg', price: 284.99, category: categories[1]},
    {name: 'Alpha Elite', brand: 'Mizuno', emoji: '../public/img/alphaelitefg.jpg', price: 239.99, category: categories[1]},
    {name: 'Accuracy+', brand: 'Adidas', emoji: '../public/img/accuracy+.jpg', price: 279.99, category: categories[1]},
    {name: 'Samba Classic Messi IN', brand: 'Adidas', emoji: '../public/img/Messi_Samba_Shoes.jpg', price: 99.99, category: categories[2]},
    {name: 'React Gato IN', brand: 'Nike', emoji: '../public/img/react-gato.png', price: 149.99, category: categories[2]},
    {name: 'Predator FT', brand: 'Adidas', emoji: '../public/img/predtorft.jpg', price: 149.99, category: categories[0]},
    {name: 'Superfly 8 Elite', brand: 'Nike', emoji: '../public/img/Superfly8.jpg', price: 294.99, category: categories[0]},
  ]);

  console.log(items)

  process.exit();

})();