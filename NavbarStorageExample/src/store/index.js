import { createStore } from "redux";
import storeSynchronize from 'redux-localstore';

import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;

storeSynchronize(store);