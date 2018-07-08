import React from 'react';

const person = (props) => {
  return (
    <p>this is from linear component Person! :) <br/> my name is {props.personName}, i am {props.personAge} years old and my random age is {Math.floor(Math.random() * 30)}</p>
  );
}

export default person;