import {userdata_update} from '../actions/index'

const userdetails = (state = {}, action  ) => {
    switch(action.type){
        case "USERDATA" : 
          return {
              userdata:action.payload
          }  
        default :
          return state ;
      }
}
export default userdetails;