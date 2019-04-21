import { postsRef } from '../database/Firebase';
import { POSTS_FETCH } from "./types";

export const postsFetch = () => async dispatch => {
	postsRef.on("value", snapshot => {
		dispatch({
			type: POSTS_FETCH,
			payload: snapshot.val()
		});
	});
};