const express = require("express");

const router = express.Router();

router.get('/', (req, res, next) => {
   return res.render("index");
});

router.get('/about', (req, res, next) => {
   return res.render("about");
});

router.get('/services', (req, res, next) => {
   return res.render("services");
});

router.get('/products', (req, res, next) => {
   return res.render("products");
});

router.get('/blog', (req, res, next) => {
   return res.render("blog");
});

router.get('/cart', (req, res, next) => {
   return res.render("cart");
});

router.get('/checkout', (req, res, next) => {
   return res.render("checkout");
});


router.get('/contact', (req, res, next) => {
   return res.render("contact");
});

module.exports = router;