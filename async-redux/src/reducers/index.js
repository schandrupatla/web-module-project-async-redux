import {FETCH_FAIL, FETCH_SUCCESS, FETCH_START}from '../actions/index'
const initialState ={
    dog:{
        // breed:"Lab-Retriever",
        image:"https://images.dog.ceo/breeds/hound-afghan/n02088094_1128.jpg"
    },
    isFetching:false,
    error:""
};
export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_START:
            return({ ...state, isFetching:true})

        case FETCH_SUCCESS:
            return({...state, 
                dog:action.payload, 
                idFetching:false})

        case FETCH_FAIL:
            return({
                ...state,
                error:action.payload,
                isFetching:false
            })
            default:
                return state;
    }
}