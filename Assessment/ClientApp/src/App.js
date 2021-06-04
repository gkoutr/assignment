import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { ShapeApp } from './components/ShapeApp';
import { Langton } from './components/Langton';

export default class App extends Component {
  displayName = App.name
   
  render() {
    return (
      <Layout>
        <Route exact path='/' component={ShapeApp} />
        <Route exact path='/langton' component={Langton} />
      </Layout>
    );
  }
}
