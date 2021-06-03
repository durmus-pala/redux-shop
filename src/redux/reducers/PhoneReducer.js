import { SELL_PHONE } from "../types/Types";

const initialState = {
  numberOfPhones: 500,
};

const PhoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_PHONE:
      return {
        ...state,
        numberOfPhones: state.numberOfPhones - 1,
      };
    default:
      return state;
  }
};

export default PhoneReducer;
