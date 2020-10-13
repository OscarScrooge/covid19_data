import React, {useEffect, useState} from 'react';
import ChartByCountry from "./ChartByCountry";

function Chart(props) {

    const [data,setData]= useState({});

    useEffect(()=>{
         setData(props.dataByCountry);
    },[props.dataByCountry]);

    return (
        <div>
            {
              data.length===0 ?<div/>:<ChartByCountry dataByCountry={data}/>
            }

        </div>
    );
}

export default Chart;
