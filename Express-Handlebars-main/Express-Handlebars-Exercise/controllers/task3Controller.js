const { log } = require("console");

const controller = {};

controller.show = (req, res) => {
    let {categories, products} = require("../data");
    let product_list = req.query.category 
        ? products.filter((item) => item.category === parseInt(req.query.category))
        : products;
    console.log(product_list);
    res.render("task3",{
        product_list,
        categories
    });
};
module.exports = controller;