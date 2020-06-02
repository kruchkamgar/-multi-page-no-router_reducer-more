import React, {useState} from 'react';

const FiveDay = (props) => {

// const {date, city, temperatureAsOf, temperature, feelsLike} = props;

const [content] =
  useState(
    <div className="search">
      <label htmlFor="city">Enter City</label>
      <input type="search" name="city"/>
      <button>Submit</button>
      <br/>
      {props.city}
    </div>
  );

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}

export default FiveDay
