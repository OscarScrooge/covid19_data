import React from 'react';
import Countries from "./app/components/Countries";
import ContainerChart from "./app/containers/ContainerChart";
import PredicitionsTableContainer from "./app/containers/PredicitionsTableContainer";
import Footer from "./app/components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="options-container">
            <Countries/>
        </div>
        <div className="data-chart-container">
            <div className="frame">
                <ContainerChart/>
            </div>
            <div className="frame">
                <PredicitionsTableContainer/>
            </div>

        </div>
       <Footer/>
    </div>
  );
}

export default App;
