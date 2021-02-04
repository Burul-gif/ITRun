const express = require('express');
const router = express.Router();

let products = [
    {
        id: 1,
        title: 'Iphone 12',
        brand: 'Apple',
        price: 1000000,
        photos: ['https://i.ebayimg.com/images/g/U3wAAOSwanxf~xLv/s-l500.jpg'],
        category: 'Смартфоны',
        stars: 4.7,
        reviews: [{
            text: 'Получил с некоторыми следами на контурах корпуса',
            stars: 5,
            author: 'Jobs'
        }]
    },
    {
        id: 2,
        title: 'Xiaomi mi 11',
        brand: 'Xiaomi',
        price: 1000000,
        photos: [
            'https://ae01.alicdn.com/kf/Hc094b88a03da43eea55063777b41bde6F/Xiaomi-Mi-9-lite-SE-A3-A2-Lite.jpg_Q90.jpg_.webp',
            'https://ae01.alicdn.com/kf/H40c3489ebeaf4e9cb2ed9f1250247445k/Xiaomi-Mi-9-lite-SE-A3-A2-Lite.jpg_Q90.jpg_.webp'
        ],
        category: 'Смартфоны',
        stars: 4.7,
        reviews: [{
            text: 'Получил с некоторыми следами на контурах корпуса',
            stars: 5,
            author: 'Jobs'
        }]
    }
];
router.get('/', (req,res) => {
    res.json(products)
});

router.post('/add', (req, res) =>{
    let newProduct = req.body;
    newProduct.id = products.length+1;
    products.push(newProduct);
    res.status(201).json({
        data: newProduct,
        total: products.length
    });
});

router.put('/update', (req,res) => {
    let product =req.body;
    let findProduct = products.find(x => x.id === product.id);
    if(!findProduct) {
        return res.status(404).json({
            message: 'Прошу прощенияб но такой товар в базе не найдено!'
        })
    }
    findProduct.title = product.title;
    res.status(200).json({
        data: products,
        total: products.length
    });
});


router.delete('/remove/:id', (req, res) => {
});

module.exports = router;