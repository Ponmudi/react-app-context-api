import React, { Component } from 'react';
export default class Person extends Component{
    render (){
      return (
        <p>{this.props.name}</p>
      )
    }
  }