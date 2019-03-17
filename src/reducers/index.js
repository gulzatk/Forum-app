import commentListReducer from "./comment-list-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  comments: commentListReducer
});

export default rootReducer;
