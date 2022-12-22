import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/Products.reducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
});

const store = createStore(rootReducer);

export { store };
