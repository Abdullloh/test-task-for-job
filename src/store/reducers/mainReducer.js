import {UPDATE_DATA} from '../actionTypes'

const initialState=[];
const mainReducer = (state=initialState,action)=>{
 console.log(action,"action");
 const {payload} = action
 console.log(payload);
    switch (action.type) {
        case UPDATE_DATA: {
          return { ...state,payload}
        }
        default: {
            return state;
          }
    }
}
export default mainReducer