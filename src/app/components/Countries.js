import React, {useEffect, useState} from 'react';
import {fetchCountries, fetchPredictionByCountry, fetchStatusByAll, fetchStatusByCountry} from '../api/endPoints';
import {connect} from 'react-redux';

import './style/countrySelector.css';
import {setPredictions} from "../actions/actions";

function Countries(props) {

    const [countries,setCountries] =  useState([]);

    /**
     * @description get all countries in the API list
     */
    useEffect(()=>{
         fetchCountries().then(request => setCountries(request.data));
    },[]);

    /**
     * @description handle the click of the select tag
     * @param e
     */
    const handleSelection = (e)=>{
        if(e.target.value==="all"){
            /**
             * @description fetch the status of all the countries in the API list and send them to the action 'setDataByCountry'
             */
            props.dispatch(fetchStatusByAll());
            /**
             * @description set de predictions as a null array in case the user select 'All countries'
             */
            props.dispatch(setPredictions([]));
        }else{
            /**
             * @description fetch the status of the selected country and set it in the action 'setDataByCountry'
             */
            props.dispatch(fetchStatusByCountry(e.target.value));
            /**
             * @description fetcht the prediction of the next 14 days by the selected country
             */
            props.dispatch(fetchPredictionByCountry(e.target.value));
        }

    };

    return (
        <div className="country_selector_container">
            <select  onChange={e=>handleSelection(e)} className="country_selector">
                <option className="country" value="option">Select option</option>
                <option className="country" value="all">All countries</option>
                {
                    countries.map((v,k)=>
                        <option className="country" value={v.alpha2} key={k}>{v.name}</option>
                    )
                }
            </select>
        </div>
    );
}

export default connect()(Countries);
