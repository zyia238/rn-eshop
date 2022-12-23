import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/Products.reducer";
import CartReducer from "./reducers/Cart.reducer";
import OrderReducer from "./reducers/Order.reducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  order: OrderReducer,
});

const store = createStore(rootReducer);

export { store };
