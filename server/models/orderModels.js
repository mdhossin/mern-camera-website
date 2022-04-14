const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    type: Object,
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  id: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  user: {
    // create the relation User model means users collection from the databse
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  //   paymentInfo: {
  //     id: {
  //       type: String,
  //       required: true,
  //     },
  //     status: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  paidAt: {
    type: Date,
    required: true,
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
