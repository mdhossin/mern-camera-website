import { combineReducers } from "redux";
import {
  userListReducer,
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
} from "./userReducer";
import {
  createProductReducer,
  productByIdReducer,
  productReducer,
} from "./productReducer";
import { cartReducer } from "./cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./orderReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userLogout: userLogoutReducer,
  userList: userListReducer,
  createProduct: createProductReducer,
  allProducts: productReducer,
  cart: cartReducer,
  productById: productByIdReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  // update order reducer
  order: orderReducer,
});
