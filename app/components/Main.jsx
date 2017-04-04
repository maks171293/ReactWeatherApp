import React from 'react';
import Nav from 'Nav';

let Main = (props) => {
  return(
    <div>
    <Nav></Nav>
    <h1>Main component</h1>
    {props.children}
  </div>
  )
};

export default Main;
