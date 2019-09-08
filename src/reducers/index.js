import { combineReducers } from 'redux';
import PostData from './Post';
import CommentData from './Comment';
import Auth from './LoginStatus';

export default combineReducers({
  PostData:PostData,
  CommentData:CommentData,
  Auth:Auth
  });