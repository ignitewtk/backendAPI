const {getLocalIP} = require('../../utils/utils')
const localIP = getLocalIP();

const HOST = ""
// console.log(' -------- Local IP:', localIP, HOST);
const dataProducts = [
    {
        productId: '1',
        productName: "Pork Loin",
        originPrice: 10.56,
        discountPrice: 8.99,
        rating: 3,
        category1: 'Meat',
        category2: 'Pork',
        src: HOST + "/images/products/PorkLoin.jpg"
    },
    {
        productId: '2',
        productName: "Asian Baby Bulk Choy",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Veges',
        category2: 'Green',
        src: HOST + "/images/products/Asian Baby Bulk Choy.jpg"
    },
    {
        productId: '3',
        productName: "Fresh Eggs",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Dairy',
        category2: 'Egg',
        src: HOST + "/images/products/Fresh Eggs.jpg"
    },
    {
        productId: '4',
        productName: "Chicken Wings",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Meat',
        category2: 'Chicken',
        src: HOST + "/images/products/Chicken Wings.jpg"
    },
    {
        productId: '5',
        productName: "Green Grapes",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Fruit',
        category2: 'Grape',
        src: HOST + "/images/products/Green Grapes.jpg"
    },
    {
        productId: '6',
        productName: "Fuji Apples",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Fruit',
        category2: 'Apple',
        src: HOST + "/images/products/Fuji Apples.jpg"
    },
    {
        productId: '7',
        productName: "Keitt Mango",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Fruit',
        category2: 'Mango',
        src: HOST + "/images/products/Keiit Mango.jpg"
    },
    {
        productId: '8',
        productName: "Royal Gala Apples",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Fruit',
        category2: 'Apple',
        src: HOST + "/images/products/Royal Gala Apples.jpg"
    },
    {
        productId: '9',
        productName: "Tomatoes",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Veges',
        category2: 'Tomato',
        src: HOST + "/images/products/Tomatoes.jpg"
    },
    {
        productId: '10',
        productName: "Chicken Drumpstick",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Meat',
        category2: 'Chicken',
        src: HOST + "/images/products/Chicken Drumpstick.jpg"
    },
    {
        productId: '11',
        productName: "Japanese Bulk Choy",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Veges',
        category2: 'Green',
        src: HOST + "/images/products/Japanese Bulk Choy.jpg"
    },
    {
        productId: '12',
        productName: "Creamy Potato",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Veges',
        category2: 'Potato',
        src: HOST + "/images/products/Creamy Potato.jpg"
    },
    {
        productId: '13',
        productName: "Washed Potatoes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Veges',
        category2: 'Potato',
        src: HOST + "/images/products/Washed Potatoes.jpg"
    },
    {
        productId: '14',
        productName: "Seedless Grapes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Fruit',
        category2: 'Grape',
        src: HOST + "/images/products/Seedless Grapes.jpg"
    },
    {
        productId: '15',
        productName: "Seedless Finger Grapes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Fruit',
        category2: 'Grape',
        src: HOST + "/images/products/Seedless Finger Grapes.jpg"
    },
    {
        productId: '16',
        productName: "Pork Ribs",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Meat',
        category2: 'Pork',
        src: HOST + "/images/products/Pork Ribs.jpg"
    },
    {
        productId: '17',
        productName: "Frozen T-bones Steak",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Meat',
        category2: 'Steak',
        src: HOST + "/images/products/Frozen T-bones Steak.jpg"
    },
    {
        productId: '18',
        productName: "Fresh Frozen Beef Steak",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Meat',
        category2: 'Steak',
        src: HOST + "/images/products/Fresh Frozen Beef Steak.jpg"
    },
]

module.exports = dataProducts;


// const productproductNames = [
//     [
//         "Pork Loin.jpg",
//         "Chicken Wings.jpg",
//         "Green Grapes.jpg",
//         "Fuji Apples.jpg",
//         "Keiit Mango.jpg",
//         "Royal Gala Apples.jpg",
//         "Tomatoes.jpg",
//         "Chicken Drumpstick.jpg",
//         "Japanese Bulk Choy.jpg",
//         "Creamy Potato.jpg",
//         "Fresh Eggs.jpg",
//         "Washed Potatoes.jpg",
//         "Seedless Grapes.jpg",
//         "Seedless Finger Grapes.jpg",
//         "Pork Ribs.jpg",
//         "Asian Baby Bulk Choy.jpg",
//         "Frozen T-bones Steak.jpg",
//         "Fresh Frozen Beef Steak.jpg",
//     ]
// ]