import {SEARCH_USER} from '../types/types';
import store from '../store/store';

export const searchAction = (str) => async (dispatch) => {
	let userData = store.getState().users.userData;
	let searchUserData = [];
	searchUserData = userData.filter((user) => user.name.toLowerCase().includes(str));
	dispatch({
		type: SEARCH_USER,
		payload: searchUserData,
	});
};