import { postsRef, postRef } from '../database/Firebase';
import {
	POSTS_FETCH,
	POST_FETCH
} from "./types";
import { reset } from 'redux-form';

export const postsFetch = () => async dispatch => {
	postsRef.on("value", snapshot => {
		dispatch({
			type: POSTS_FETCH,
			payload: snapshot.val()
		});
	});
};

export const postFetch = key => async dispatch => {
	postRef(key).on("value", snapshot => {
		dispatch({
			type: POST_FETCH,
			payload: snapshot.val()
		});
	});
};

export const postCreate = newPost => async dispatch => {
	const newPostRef = postsRef.push();
	newPostRef.set(newPost);
	dispatch(reset('commonForm'));
	return newPostRef.key;
};

export const postUpdateTimestamp = (key, timestamp) => async dispatch => {
	postRef(key).update({'lastUpdate': timestamp});
};