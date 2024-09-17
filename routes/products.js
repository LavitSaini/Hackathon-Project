const express = require("express");

const Product = require("../models/Product");
const Cart = require("../models/Cart");

const router = express.Router();

router.get("/:id/add", async (req, res, next) => {
  let id = req.params.id;

  try {
    await Cart.create({ productId: id, quantity: 1 });
    return res.redirect("/cart");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
