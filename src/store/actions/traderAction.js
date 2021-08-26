import {UPDATE_DATA} from '../actionTypes'

export const updateData = (data)=>{
    return{
        payload:data,
        type:UPDATE_DATA
    }
}