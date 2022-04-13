import { combineReducers } from "redux";
import {
  userListReducer,
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
} from "./userReducer";
import { createProductReducer, productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userLogout: userLogoutReducer,
  userList: userListReducer,
  createProduct: createProductReducer,
  allProducts: productReducer,
  cart: cartReducer,
});
