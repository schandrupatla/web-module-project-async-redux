import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import {fetchStart, fetchSuccess, fetchFail} from '../actions'

const Dog =(props)=>{

    const handleGet=()=>{ 
        // props.fetchStart();
        axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(resp=> {
            console.log(resp.data.message)
             props.fetchSuccess(resp.data.message)
          })
          .catch(err=>{
            props.fetchFail(err);
          })
    }

    return (
        <>
        <div>
        <h2>Hello! welcome to Human World!!</h2>
         <img src ={props.dog.image} alt=""/> 
        </div>
        <button onClick={handleGet}>Get new Dog!</button>
        </>
    )
}
const mapStateToProps = state =>{
    return{
        dog:state.dog,
        isFetching:state.isFetching,
        error:state.error
    }
}
export default connect(mapStateToProps, {fetchStart, fetchSuccess, fetchFail})(Dog);