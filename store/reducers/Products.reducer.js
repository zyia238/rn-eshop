import SHOP_DATA from "../../models/products";
let _ = require("lodash");
const defaultState = {
  availableProducts: SHOP_DATA,
};

const ProductsReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_CART_PRODUCT":
      let clone = _.cloneDeep(state.availableProducts);
      console.log(clone, "dssdsd");
      for (let i = 0; i < clone.length; i++) {
        for (let j = 0; j < clone[i].items.length; j++) {
          if (clone[i].items[j].id === payload.id) {
            clone[i].items[j] = {
              ...payload,
            };
          }
        }
      }

      return {
        ...state,
        availableProducts: clone,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
