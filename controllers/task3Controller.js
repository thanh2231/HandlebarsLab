const controller = {}
const title = 'TV sales';
const {categories, products} = require('../models/data') ;

controller.showlist = (req, res) => {
    let category = req.query.category;
    let selectProducts = category ? products.filter(item => item.category == category) : products;
    res.render('task3',{title,categories,products : selectProducts});
}

module.exports = controller