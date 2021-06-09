import axios from 'axios'
export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"



export const fetchFact=() =>{
    return(dispatch=>{
    axios
    .get('https://animechan.vercel.app/api/random')
    .then(resp=>{
        dispatch({type:FETCH_SUCCESS,payload:resp.data});
    })
    .catch(err=>{
        dispatch({type:FETCH_FAIL, payload:err});
    })
 })
}


export const fetchStart = ()=>{
    return({type:FETCH_START});
}
export const fetchSuccess =(fact) =>{
    console.log("Actions:",fact);
    return ({type:FETCH_SUCCESS, payload:fact});
}
export const fetchFail =(error)=>{
    return({type:FETCH_FAIL, payload:error});
}