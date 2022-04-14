const express = require("express");
const orderController = require("../controllers/orderController");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");
const router = express.Router();

router.post("/order/new", auth, orderController.newOrder);
router.get("/orders/me", auth, orderController.myOrders);
router.get("/orders/:id", auth, orderController.getOrderById);

// admin routes
router.get("/admin/orders", [auth, authAdmin], orderController.getAllOrders);

// get monthly income route
router.get("/admin/orders/income", [auth, authAdmin], orderController.income);

router
  .route("/admin/order/:id")
  .put([auth, authAdmin], orderController.updateOrder)
  .delete([auth, authAdmin], orderController.deleteOrder);

module.exports = router;
