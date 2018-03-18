import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import BarcodeScannerExample from '../components/BarcodeScannerExample';
import { SearchBar, Card, Button } from 'react-native-elements'
import { APP_KEY, APP_ID } from '../components/ApiKeys';

export default class MealScreen extends React.Component {
  static navigationOptions = {
    title: 'Meal',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <SearchBar
            lightTheme
            onChangeText={this._handleOnChangeText()}
            onClearText={this._handleOnChangeText()}
            placeholder='Type Here...' />
       <BarcodeScannerExample />
            
      </ScrollView>
    );
  }

  _handleOnChangeText = () => {
    
  };

  _handleOnClearText = () => {
    
  };

  _handleGetIngridient = (ingr) => {
    
  };

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});
