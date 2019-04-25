import {
	COMMENTS_FETCH
} from "../actions/types";

export default function (state = [], action) {
	switch (action.type) {
		case COMMENTS_FETCH:
			return action.payload;
		default:
			return state;
	}
}