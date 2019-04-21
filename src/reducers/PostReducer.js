import { POSTS_FETCH } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case POSTS_FETCH:
			return action.payload;
		default:
			return state;
	}
}