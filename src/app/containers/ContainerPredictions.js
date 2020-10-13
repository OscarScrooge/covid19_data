import React from 'react';
import {connect} from 'react-redux';
import Prediction from "../components/Prediction";

function ContainerPredictions(props) {
    const {country} = props;
    return (
        <Prediction country = {country}/>
    );
}

const mapStateProps =(state)=>{
  return{
      country:state.dataByCountry
  }
};

export default connect(mapStateProps)(ContainerPredictions);
