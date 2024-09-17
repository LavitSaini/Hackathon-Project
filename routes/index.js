const express = require("express");

const Product = require("../models/Product");
const Cart = require("../models/Cart");

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.render("index");
});

router.get("/about", (req, res, next) => {
  return res.render("about");
});

router.get("/services", (req, res, next) => {
  return res.render("services");
});

router.get("/products", async (req, res, next) => {
  try {
    let products = await Product.find({});
    return res.render("products", { products });
  } catch (error) {
    next(error);
  }
});

router.get("/blog", (req, res, next) => {
  return res.render("blog");
});

router.get("/cart", async (req, res, next) => {
  try {
    let cartItems = await Cart.find({}).populate("productId");
    let total = cartItems.reduce((acc, cv) => {
      if(cv.productId.discountPrice != 0){
        acc += cv.productId.discountPrice * cv.quantity;
      } else{
        acc += cv.productId.price * cv.quantity;
      }
      return acc;
    }, 0).toFixed(2);
    return res.render("cart", { cartItems, total });
  } catch (error) {
    next(error);
  }
});

router.get("/checkout", async (req, res, next) => {
  try {
    let cartItems = await Cart.find({}).populate("productId");
    let total = cartItems.reduce((acc, cv) => {
      if(cv.productId.discountPrice != 0){
        acc += cv.productId.discountPrice * cv.quantity;
      } else{
        acc += cv.productId.price * cv.quantity;
      }
      return acc;
    }, 0).toFixed(2);
    return res.render("checkout", { cartItems, total });
  } catch (error) {
    next(error);
  }
});

router.get("/contact", (req, res, next) => {
  return res.render("contact");
});

module.exports = router;
