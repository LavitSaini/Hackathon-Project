const express = require("express");

const Cart = require("../models/Cart");

const router = express.Router();

router.get("/:id/:quantity/increase", async (req, res, next) => {
  let id = req.params.id;
  let quantity = req.params.quantity;

  if (quantity == 10) {
    return res.redirect("/cart");
  }

  try {
    await Cart.findByIdAndUpdate({ _id: id }, { $inc: { quantity: 1 } });
    return res.redirect("/cart");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/:quantity/decrease", async (req, res, next) => {
  let id = req.params.id;
  let quantity = req.params.quantity;

  if (quantity == 0) {
    await Cart.findByIdAndDelete({_id: id});
    return res.redirect("/cart");
  }

  try {
    await Cart.findByIdAndUpdate({ _id: id }, { $inc: { quantity: -1 } });
    return res.redirect("/cart");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/remove", async (req, res, next) => {
  let id = req.params.id;

  try {
    await Cart.findByIdAndDelete({_id: id});
    return res.redirect("/cart");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
