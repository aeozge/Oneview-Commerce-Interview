import { GET_ALL_USERS } from '../types/types';
import { SEARCH_USER } from '../types/types';
import { GET_USER_POSTS } from '../types/types';

const initialState = {
	userData: [],
	searchUser: [],
	postsAction: { posts: [], user: "" },
  };
  
  export default function foo(state = initialState, action){
	switch (action.type) {
	  case GET_ALL_USERS:
		return {
		  ...state,
		  userData: action.payload,
		  searchUser: action.payload,
		};
	  case SEARCH_USER:
		return {
		  ...state,
		  searchUser: action.payload,
		};
	  case GET_USER_POSTS:
		return {
		  ...state,
		  postsAction: action.payload,
		};
	  default: return state;
	}
  };
