const defaultState = {
  order: [],
};

const OrderReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_ORDER":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default OrderReducer;
