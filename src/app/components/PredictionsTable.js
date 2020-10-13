import React from 'react';
import {connect} from 'react-redux';

function PredictionsTable(props) {

    return (

        <div >
            <p>Prediction for the next 14 days</p>
            <table>
                <thead>
                   <tr>
                       <th>Country</th>
                       <th>Date</th>
                       <th>Cases</th>
                   </tr>
                </thead>
                <tbody>
                {
                    props.predictions.map((value,key)=>
                          <tr key={key}>
                              <td>{value.country}</td>
                              <td>{value.date}</td>
                              <td>{value.cases}</td>
                          </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default connect()(PredictionsTable);
