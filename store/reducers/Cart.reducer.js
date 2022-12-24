import SHOP_DATA from "../../models/products";

let newProducts = [];
SHOP_DATA.forEach((item) => {
  newProducts = [...newProducts, ...item.items];
});

const defaultState = {
  cartProducts: {},
  totalPrice: 0,
};

const ProductsReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      let target;
      target = newProducts.find((item) => item.id === payload.id);
      if (!state.cartProducts[target.name]) {
        const newCartItem = {
          name: payload.name,
          quantity: 1,
          price: payload.price,
        };

        return {
          ...state,
          cartProducts: {
            ...state.cartProducts,
            [target.name]: newCartItem,
          },
          totalPrice: target.price + state.totalPrice,
        };
      } else {
        return {
          ...state,
          cartProducts: {
            ...state.cartProducts,
            [target.name]: {
              ...state.cartProducts[target.name],
              quantity: state.cartProducts[target.name].quantity + 1,
            },
          },
          totalPrice: target.price + state.totalPrice,
        };
      }
    case "DELETE_CART_ITEM":
      target = newProducts.find((item) => item.name === payload);
      let diff =
        state.cartProducts[target.name].quantity *
        state.cartProducts[target.name].price;
      delete state.cartProducts[target.name];
      return {
        ...state,
        cartProducts: {
          ...state.cartProducts,
        },
        totalPrice: state.totalPrice - diff,
      };

    case "CLEAR_CART":
      return defaultState;
    case "DELETE_ITEM_CART":
      if (state.cartProducts[payload]) {
        const newCartProducts = { ...state.cartProducts };
        let newPrice =
          newCartProducts[payload].price * newCartProducts[payload].quantity;
        delete newCartProducts[payload];
        return {
          ...state,
          cartProducts: newCartProducts,
          totalPrice: state.totalPrice - newPrice,
        };
      }

    default:
      return state;
  }
};

export default ProductsReducer;
