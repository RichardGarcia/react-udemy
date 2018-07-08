import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>this is from linear component Person! :) <br/> my name is {props.personName}, i am {props.personAge} years old <br/>and my random age is {Math.floor(Math.random() * 30)}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;