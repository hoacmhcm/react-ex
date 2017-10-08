/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

// Navigator-flux
// npm install react-native-router-flux --save
import { Router, Scene } from 'react-native-router-flux';
//import 2 trang vào.
import SearchPage from './components/SearchPage.js';
import SearchResults from './components/SearchResults.js';

//router flux với trang chủ là trang searchpage.router flux điều hướng qua key,chứa component,và title của component đó
const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="searchpage" component={SearchPage} title="SearchPage" initial={true} />
      <Scene key="result" component={SearchResults} title="Result" />
    </Scene>
  </Router>
)
export default Routes

AppRegistry.registerComponent('Lesson1', () => Routes);
