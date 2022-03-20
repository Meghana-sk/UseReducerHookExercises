export function quantityReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };

    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload };

    default:
      return state;
  }
}
