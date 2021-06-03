import { createStore, combineReducers } from "redux";
import laptopReducer from "./reducers/LaptopReducer";
import phoneReducer from "./reducers/PhoneReducer";
import watchReducer from "./reducers/WatchReducer";
import compReducer from "./reducers/CompReducer";

const rootReducer = combineReducers({
  laptop: laptopReducer,
  phone: phoneReducer,
  watch: watchReducer,
  comp: compReducer,
});

const store = createStore(rootReducer);

export default store;
