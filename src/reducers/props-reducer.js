import { REDUX_TEXT,REDUX_INDEX,REDUX_FILTER,REDUX_PAYLOAD,REDUX_CONST } from '../actions/props-action'

const initialState = {
    redux_const_one:REDUX_CONST.CONST_ONE,
    REDUX_CONST_TOW:REDUX_CONST.CONST_TOW,
    REDUX_CONST_THREE:REDUX_CONST.CONST_THREE,
    redux_text:"这里是redux text",
    redux_index:123,
    redux_filter:(value)=>{
        return value>12
    },
    redux_payload:{
        userinfo:null,
        userstate:false
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case REDUX_TEXT:
            return {...state,redux_text:action.text}
        case REDUX_INDEX:
            return {...state,redux_index:action.index}
        case REDUX_FILTER:
            return {...state,redux_filter:action.filter}
        case REDUX_PAYLOAD:
            return {...state,redux_payload:action.payload}
        default:
            state
    }
}