const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../models/inventory.js");

// Get All
inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((err, inventoryitem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventoryitem);
  });
});

// Post One
inventoryRouter.post("/", (req, res, next) => {
  const newItem = new Inventory(req.body);
  newItem.save((err, savedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedItem);
  });
});

// Delete One
inventoryRouter.delete("/:itemId", (req, res, next) => {
  Inventory.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res
      .status(200)
      .send(`Successfully deleted ${deletedItem.name} from the database.`);
  });
});

// Update One
inventoryRouter.put("/:itemId", (req, res, next) => {
  Inventory.findOneAndUpdate(
    { _id: req.params.itemId },
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedItem);
    }
  );
});

module.exports = inventoryRouter;
