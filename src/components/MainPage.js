import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TablePage from '../containers/TablePage';


class MainPage extends React.Component  {
  render() {
    return (
      <View >
        <TablePage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MainPage;
