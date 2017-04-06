import React from 'react';
import Nav from 'Nav';

let Main = (props) => {
  return(
    <div>
      <Nav></Nav>
      <div className="row">
        <div className="columns large-4 medium-6 small-centered">
          {props.children}
        </div>

      </div>

    </div>
  )
};

export default Main;
