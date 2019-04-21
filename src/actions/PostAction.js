import axios from "axios";
import { POSTS_FETCH } from "./types";

export const postsFetch = () => {
	return dispatch => {
		axios
			.get("http://localhost:3005/posts")
			.then(res => dispatch({ type: POSTS_FETCH, payload: res.data }));
	};
};