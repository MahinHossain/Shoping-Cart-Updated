import * as Types from "./Types";

const initializitState = {
  valu: [],
  cartitem: [],
  productsDetails: {},
  function: {},
};

function Reducer(state = initializitState, action) {
  switch (action.type) {
    case Types.GET_TASKS:
      return {
        ...state,
        valu: action.payload,
      };
      break;
    case Types.DETAILS_PROFUCT:
      console.log(`action.payload`, action.payload);
      return {
        ...state,
        productsDetails: action.payload,
      };
      break;
    case Types.CART_ITEM:
      console.log(`in reducer--`, action.payload);
      return {
        ...state,
        cartitem: action.payload,
      };
      break;
    case Types.funtionTest:
      console.log(`in reducer--`, action.payload);
      return {
        ...state,
        function: action.payload,
      };
      break;
    case Types.removes:
      return {};
      break;

    default:
      break;
  }
  return state;
}
export default Reducer;
