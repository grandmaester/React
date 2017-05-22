import {syncHistoryWithStore} from 'react-router-redux'
import {createStore,compose} from 'redux'
import {browserHistory} from 'react-router'
import rootReducer from './reducers/reducer'
import trade from './data/trade'

const defaultState={trade:trade};
const store=createStore(rootReducer,defaultState);
export const history=syncHistoryWithStore(browserHistory,store);
export default store;
