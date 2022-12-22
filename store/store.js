import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/Products.reducer";
import CartReducer from "./reducers/Cart.reducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
});

const store = createStore(rootReducer);

export { store };
