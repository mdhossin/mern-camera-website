import { combineReducers } from "redux";
import {
  userListReducer,
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
} from "./userReducer";
import { createProductReducer } from "./productReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userLogout: userLogoutReducer,
  userList: userListReducer,
  createProduct: createProductReducer,
});
