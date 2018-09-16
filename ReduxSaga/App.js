/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import CounterContainer from './containers/Countcontanier';
import allReducers from './reducers';

let store = createStore(allReducers);
// const App = () =>{
//     <Provider>
//         <CounterContainer />
//     </Provider>
// }

export default class App extends Component{
  render() {
    return (
      
          <Provider store={store}>
              <CounterContainer/>
          </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});