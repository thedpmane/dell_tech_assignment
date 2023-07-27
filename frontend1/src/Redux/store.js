import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { productDetailsReducer, productReducer } from "./Products/reducer";
import { updateProfileReducer, userReducer } from "./Authentication/reducer";

import {
  adminProductReducer,
  createAdminProductReducer,
} from "./Admin/Products/reducer";

import {
  adminUserDetailsReducer,
  adminUsersListReducer,
  adminuserUpdateAndDeleteReducer,
} from "./Admin/Users/reducer";
import { adminReviewListReducer } from "./Admin/Reviews/reducer";
import stripeApiKeyReducer from "./StripeApiKey/reducer";

const allReducers = combineReducers({
  products: productReducer,
  adminProducts: adminProductReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  updateprofile: updateProfileReducer,
  creatProduct: createAdminProductReducer,
  allUsers: adminUsersListReducer,
  userDetails: adminUserDetailsReducer,
  userUpdateAndDelete: adminuserUpdateAndDeleteReducer,
  productAdminReviewList: adminReviewListReducer,
  stripeApiKey: stripeApiKeyReducer,
});
const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  allReducers,
  composeEnchancers(applyMiddleware(thunk))
);

export default store;
