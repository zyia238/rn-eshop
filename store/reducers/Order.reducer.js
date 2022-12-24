const defaultState = {
  order: [],
};

const OrderReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_ORDER":
      const newOrder = [...state.order, payload];
      return {
        ...state,
        order: newOrder,
      };
    default:
      return {
        ...state,
      };
  }
};

export default OrderReducer;
