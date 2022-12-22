import SHOP_DATA from "../../models/products";

const defaultState = {
  availableProducts: SHOP_DATA,
};

const ProductsReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 1:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
