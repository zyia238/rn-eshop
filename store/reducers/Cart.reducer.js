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
      target = newProducts.find((item) => item.name === payload);
      if (!state.cartProducts[target.name]) {
        const newCartItem = {
          name: target.name,
          quantity: 1,
          price: target.price,
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

    default:
      return state;
  }
};

export default ProductsReducer;
