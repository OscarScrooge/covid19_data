
export function setDataByCountry(dataByCountry) {
    return({
        type: 'SET_DATA_BY_COUNTRY',
        dataByCountry,
   });
}

export function setPredictions(predictions) {
   return({
       type: 'SET_PRETICTIONS',
       predictions,
   })
}
