import React, { Component } from 'react';

import Login from './login'

var App=React.createClass ({
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
})

export default App;
