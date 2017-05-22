import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import UserReducer from './userReducer'

export default combineReducers({trade:UserReducer, routing:routerReducer});