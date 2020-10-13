import React, {Component, useEffect, useState} from 'react';
import {
    BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './style/chartByCountry.css';


function ChartByCountry(props){
    const [totalCases,setTotalCases] = useState(0);
    const [dataChart,setData] = useState({});

    useEffect(()=>{

        setTotalCases(getMaxCases(props.dataByCountry));

        setData(getData(props.dataByCountry));

    },[props.dataByCountry]);

    const getMaxCases=(dataByCountry)=>{
           let max = 0;
           if(dataByCountry.length>1){
               for(let i=0; i<dataByCountry.length-1;i++){
                   if(dataByCountry[i].cases>=dataByCountry[i+1].cases){
                       max = dataByCountry[i].cases;
                   }else{
                       max =  dataByCountry[i+1].cases;
                   }
               }
           }else if(dataByCountry.length===1){
               max = dataByCountry[0].cases;
           }

           return max;
    };

    const getData =(dataByCountry)=>{
        let data =[];
        if(dataByCountry.length>0){
            data=dataByCountry.map((obj)=>{
                return{
                      deaths: obj.deaths,
                        recovered: obj.recovered,
                        name:obj.country
                }
            });
        }
        return {data:data};
    };

        return (
            <div className="chart_container" >
                <ResponsiveContainer>
                    <BarChart
                        barSize={40}
                        width={500}
                        height={250}
                        data={dataChart.data}
                        margin={{
                            top: 5, right: 30, left: 30, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label={{ value: "Total cases", angle: -90, position: 'insideLeft' }}  type="number" domain={[0, totalCases]}/>
                        <Tooltip />
                        <Legend iconSize={10} />
                        <Bar dataKey="recovered" fill="#8884d8" />
                        <Bar dataKey="deaths" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );

}

export default ChartByCountry;
