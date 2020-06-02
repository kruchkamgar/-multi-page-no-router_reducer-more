import React from 'react';
import FiveDay from './FiveDay';

const OneDay = (props) => {

  const {date, city, temperatureAsOf, temperature, feelsLike, updateDisplay} = props;

  return (
    <div className="single-day">
      <div className="search">
        <label htmlFor="city">Enter City</label>
        <input type="search" name="city"/>
        <button>Submit</button>
      </div>
      {date}
      <div>
        <div className="block-panel">
          <p className="no-margin">{city}</p>
          <p className="no-margin">{temperatureAsOf}</p>
        </div>
        <div className="block-panel">
          <p className="no-margin">{temperature + '˚'}</p>
          <p className="no-margin">{'Feels like ' + feelsLike  + '˚'}</p>
        </div>
      </div>
      <button onClick={()=> { updateDisplay({
        type: 'update', payload: <FiveDay {...props}/>
      }) }}>Submit</button>
    </div>
  )
}

export default OneDay


// <button onClick={
//   () => dispatch({
//     type: 'update',
//     payload: <FiveDay {...weather}/> })
//   }>submit</button>
