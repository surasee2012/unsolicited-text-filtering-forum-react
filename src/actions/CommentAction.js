import { commmentsRef } from '../database/Firebase';
import {
	COMMENTS_FETCH
} from "./types";
import { reset } from 'redux-form';

export const commentsFetch = key => async dispatch => {
	commmentsRef(key).on("value", snapshot => {
		dispatch({
			type: COMMENTS_FETCH,
			payload: snapshot.val()
		});
	});
};

export const commentCreate = (key, newComment) => async dispatch => {
	commmentsRef(key).push().set(newComment);
	dispatch(reset('commonForm'));
};