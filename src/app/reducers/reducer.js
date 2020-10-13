

const initialState ={
   dataByCountry: [],
   predictions: [],
};


export default function reducer(state=initialState,action) {
      switch (action.type) {
          case 'SET_DATA_BY_COUNTRY':
              return {...state, dataByCountry: action.dataByCountry};
          case 'SET_PRETICTIONS':
              return {...state , predictions: action.predictions}
         default:return state;
      }
}
