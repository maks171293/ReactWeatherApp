import React from 'react';

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error',
      message: 'City not found'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    var {title, message} = this.props;
    if(!message){
      message = 'City not Found'
    }
    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal=''>
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close=''>Okay</button>
        </p>
      </div>
    );
  }
});

export default ErrorModal;
