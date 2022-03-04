import { GET_ALL_USERS } from '../types/types';
import axios from 'axios';
import * as error from '../types/errorTypes';

export const users = () => async (dispatch) => {
	try {
	  const url = "https://jsonplaceholder.typicode.com/users";
	  axios.get(url).then((res) =>
		dispatch({
		  type: GET_ALL_USERS,
		  payload: res.data,
		})
	  );
	} catch (e) {
	  dispatch({
		type: error.GET_ALL_USERS_ERROR,
		message: "Please try again!",
	  });
	}
  };