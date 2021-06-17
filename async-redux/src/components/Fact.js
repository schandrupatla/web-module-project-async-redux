import React, { useEffect } from "react";
// import axios from "axios";
import { connect } from "react-redux";
// import { fetchStart, fetchSuccess, fetchFail, fetchFact } from "../actions";
import { fetchFact } from "../actions";

let img =
  "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const Fact = (props) => {
  const { fact, isFetching, error } = props;

  useEffect(() => {
    props.dispatch(fetchFact());
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleGet = () => {
    props.dispatch(fetchFact());

    //############code to work without THUNK##############
    // axios.get('https://animechan.vercel.app/api/random')
    // .then(resp=>{
    //     console.log(resp.data);
    //     // props.fetchSuccess(resp.data);
    //     props.dispatch(fetchSuccess(resp.data));
    // })
    // .catch(err=>{
    //     console.log(err)
    // })
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          height: 1200,
          width: 1200,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>Random facts!!🙅‍♂️</h1>
        <button onClick={handleGet}>Get new Fact!</button>
        <div style={{border:'10px solid green'}}className="Fact">
          <h3 style={{ textAlign: 'left', color: 'yellow',  padding: 20 }}>Anime:{fact.anime}</h3>
          <h3 style={{ textAlign: 'left', color: 'yellow',  padding: 20 }}>Character:{fact.character}</h3>
          <h3 style={{ textAlign: 'left', color: 'yellow',   padding: 20 }}>Quote:{fact.quote}</h3>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    fact: state.fact,
    isFetching: state.isFetching,
    error: state.error,
  };
};
export default connect(mapStateToProps)(Fact);
