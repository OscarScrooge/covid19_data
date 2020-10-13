import React from 'react';
import Chart from "../components/Chart";
import {connect} from 'react-redux';

function ContainerChart(props) {
    const {dataByCountry} = props;
    return (
        <Chart dataByCountry={dataByCountry}/>
    );
}

const mapStateProps=(state)=>{
    return {
         dataByCountry: state.dataByCountry,
    }
}


export default connect(mapStateProps)(ContainerChart);

