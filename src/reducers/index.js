import userdetails from '../reducers/userdetails'
import isLogged from '../reducers/isLooged'
import {combineReducers} from 'redux'
 
const rootReducer = combineReducers({
    IsLog: isLogged,
    Userdata: userdetails
})

export default rootReducer;