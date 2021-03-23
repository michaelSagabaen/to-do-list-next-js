import { GET_TODOS, GET_TODO, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../../pages/api/types';

const initialState = {
	items: [],
	item: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_TODOS:
			return {
				...state,
				items: action.payload
			};
		case GET_TODO:
			return {
				...state,
				item: action.payload
			};
		case CREATE_TODO:
			return {
				...state,
				item: action.payload
			};
		case UPDATE_TODO:
			return {
				...state,
				item: action.payload
			};
		case DELETE_TODO:
			return {
				...state
			};
		default:
			return state;
	}
}