import {
	POSTS_FETCH,
	POST_FETCH
} from "../actions/types";

export default function (state = [], action) {
	switch (action.type) {
		case POST_FETCH:
			return {...state, post: action.payload};
		case POSTS_FETCH:
			return {...state, posts: action.payload};
		default:
			return state;
	}
}