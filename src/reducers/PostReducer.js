import {
	POSTS_FETCH,
	POST_FETCH
} from "../actions/types";

export default function (state = [], action) {
	switch (action.type) {
		case POST_FETCH:
		case POSTS_FETCH:
			return action.payload;
		default:
			return state;
	}
}