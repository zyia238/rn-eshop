import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

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

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export { store };
