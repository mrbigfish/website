import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import newsReducer from './news';
import questionsReducer from './questions';
import tokenReducer from './token';
// import lifecycleReducer from './lifecycle';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history), // as per https://github.com/supasate/connected-react-router 7/1/19
  news: newsReducer,
  questionsinfo: questionsReducer,
  tokeninfo: tokenReducer,
  // lifecycle: lifecycleReducer,

})

export default rootReducer;