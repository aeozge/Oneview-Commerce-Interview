import { createStore, applyMiddleware } from 'redux';
import indexReducer from '../reducers/indexReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const store = createStore(
	indexReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
