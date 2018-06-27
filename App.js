import React from 'react';
import { View, Text } from 'react-native';
import MainPage from './src/components/MainPage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <MainPage />
        </View>
      </Provider>
    );
  }
}
