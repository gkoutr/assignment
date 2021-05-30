import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { ShapeApp } from './components/ShapeApp';

export default class App extends Component {
  displayName = App.name
   
  render() {
    return (
      <Layout>
        <Route exact path='/' component={ShapeApp} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}
