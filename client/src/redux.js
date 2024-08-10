import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reduxStore = () => {
  // applyMiddleware(thunk) cho phép gọi api trong lúc dispatch action lên reducer => thay vì dispatch 1 object thì ta có thể dispatch 1 function và trong function đó gọi api
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return { store, persistor };
};

export default reduxStore;
