import {FETCH_FAIL, FETCH_SUCCESS, FETCH_START}from '../actions'

const initialState = {
    fact:{
    anime: "",
    character: "",
    quote: ""
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action)=>{
    console.log("reducer-fact:",action.payload);
    switch(action.type){
        case FETCH_START:
            return{ ...state, isFetching:true}

        case FETCH_SUCCESS:
            
            return{...state, 
                 fact: action.payload,
                isFetching:false}

        case FETCH_FAIL:
            return{
                ...state,
                error:action.payload,
                isFetching:false
            }
            default:
                return state;
    }
}