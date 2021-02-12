
import React, {useState, useEffect, useReducer} from 'react';
// import FiveDay from './Components/FiveDay'
import OneDay from './Components/OneDay'

// function initializeDisplay(props, updateDisplay=f=>f) {
  // return {display: <OneDay {...props} updateDisplay={updateDisplay} /> };
// }
function initializeDisplay(initializer) {
  return {display: initializer }
}

function displayContent(state, action) {
  switch (action.type) {
    case 'update':
      return { display: () => { return action.payload } };
    default:
      throw new Error();
  }
}

const Weather = () => {

  const [weather] = useState({
    date: "04/01",
    city: "Chicago, IL",
    temperature: 47,
    temperatureAsOf: "as of 2:59 pm",
    feelsLike: 40
  });

  // const updateDisplay = (Component) => {
  //   // dispatch({ type: 'update', payload: <Component {...weather} dispatch={dispatch} /> });
  //
  //   // this works as HOF to delay execution of 'set state' until after instantiation
  //   setDisplay(<Component {...weather} setWeather={setWeather}/>);
  // }

  // works: doesnt call dispatch until render, given the lazy initialization of useReducer's initial state (2nd parameter)
  const initializer = () => {
    return <OneDay {...weather} updateDisplay={dispatch}/>
  }
  const [state, dispatch] = useReducer(displayContent, initializer, initializeDisplay);

  // only fires on mount of Component - []
  // useEffect( ()=> {
  //   console.log("dispatch", dispatch);
  //
  //    method should work (access to dispatch):
  //    dispatch({ type: 'update', payload: <OneDay {...weather} dispatch={dispatch}/> })
  // }, [])

// can't pass the 'set state' function to the initial instance of the state;
// so, use a higher order function, to execute the set state function after its creation.
// const [display, setDisplay] = useState( <OneDay weather={weather} update={updateDisplay} /> );
// wonder if one can pass "setDisplay", or even just "display" as a useEffect dependency, to update the child component with parent's setDisplay function -- foregoing an initial render)

  return(
    <React.Fragment>
      {state.display()}
    </React.Fragment>
  )
}

export default Weather;
