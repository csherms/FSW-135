const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
