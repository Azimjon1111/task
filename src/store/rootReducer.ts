import { combineReducers } from '@reduxjs/toolkit';
import {reducer as posts} from '../data/posts'
const rootReducer = combineReducers({
  posts: posts
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;