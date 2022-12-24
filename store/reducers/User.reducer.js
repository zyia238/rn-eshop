import SHOP_DATA from "../../models/products";

let newProducts = [];
SHOP_DATA.forEach((item) => {
  newProducts = [...newProducts, ...item.items];
});

const defaultState = {
  userProducts: newProducts.slice(6, 10),
};

const UserReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DELETE_ITEM":
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (item) => item.name !== payload
        ),
      };
    case "UPDATE_USER_PRODUCT":
      const newProducts = [...state.userProducts];

      const changed = newProducts.map((item) => {
        if (item.id === payload.id) {
          console.log(item, "dsajiod");
          return {
            ...payload,
          };
        }
        return item;
      });

      return {
        ...state,
        userProducts: changed,
      };
    case "DELETE_USER_PRODUCT":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
