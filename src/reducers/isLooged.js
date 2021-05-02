import {userdata_update} from '../actions/index'

const isLogged = (state = false , action ) => {
    switch(action.type){
        case "SIGN_IN" : 
          return !state;
        default :
          return state;
      }
}

export default isLogged;