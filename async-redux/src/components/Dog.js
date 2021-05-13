import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import {fetchStart, fetchSuccess, fetchFail, fetchDog} from '../actions'

const Dog =(props)=>{
    console.log(props.image);

    const handleGet=()=>{ 
        props.fetchDog();

        //############code to work without THUNK##############
        //  //props.fetchStart();
        // axios
        // .get('https://dog.ceo/api/breeds/image/random')
        // .then(resp=> {
        //      console.log(resp)
        //      props.fetchSuccess(resp.data.message)
        //   })
        //   .catch(err=>{
        //     props.fetchFail(err);
        //   })
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
export default connect(mapStateToProps, {fetchDog, fetchStart, fetchSuccess, fetchFail})(Dog);