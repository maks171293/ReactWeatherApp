import React from 'react';
import {Link, IndexLink} from 'react-router';

let Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('hey');
  },
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather App</li>
            <li><IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather" />
              </li>
              <li>
                <input type="button" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

export default Nav;
