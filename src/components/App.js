import React, { Component } from 'react';
import './App.css';
import CubbyContext from '../CubbyContext';
import TokenService from '../services/token-service';
import AppPrivate from './AppPrivate';
import AppLanding from './AppLanding';

export default class App extends Component {
  static contextType = CubbyContext;

  componentDidMount = () => {
    this.context.saveAuthToken(TokenService.getAuthToken());
  }

  render() {
    return (
      <>
        {this.context.hasAuthToken() ? <AppPrivate /> : <AppLanding />}
      </>
    );
  }
}
