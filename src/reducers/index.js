import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import CommentReducer from "./CommentReducer";
import { reducer as reduxForm } from 'redux-form'

const rootReducer = combineReducers({
	posts: PostReducer,
	comments: CommentReducer,
	form: reduxForm
});

export default rootReducer;