import React from 'react';
import {connect} from 'react-redux';
import PredictionsTable from "../components/PredictionsTable";
import '../components/style/table.css'
;
function PredicitionsTableContainer(props) {
    const {predictions} = props;

    return (
        <div className="table-container">
            {predictions.length>0 ? <PredictionsTable predictions ={predictions}/>:<h4>Prediction not available</h4>}
        </div>

    );
}

const mapStateProps =(state)=>{
  return {
      predictions: state.predictions,
  }
};

export default connect(mapStateProps)(PredicitionsTableContainer);
