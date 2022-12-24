import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/Products.reducer";
import CartReducer from "./reducers/Cart.reducer";
import OrderReducer from "./reducers/Order.reducer";
import UserReducer from "./reducers/User.reducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  order: OrderReducer,
  user: UserReducer,
});

const store = createStore(rootReducer);

export { store };
