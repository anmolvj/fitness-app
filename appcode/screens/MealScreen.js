import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import BarcodeScannerExample from '../components/BarcodeScannerExample';
import { SearchBar, Card, Button, List, ListItem } from 'react-native-elements'
import { APP_KEY, APP_ID } from '../components/ApiKeys';
import IngrList from '../components/EnhancedIngrList';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class MealScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ingr: ""};
  }

  static navigationOptions = {
    title: 'Meal',
  };
 

  render() {
    return (
      <ScrollView style={styles.container}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => {this._handleOnChangeText(text)}
        
      }
        value={this.state.ingr}
      />

        {/*<BarcodeScannerExample />*/}
        <IngrList currentIngr={this.state.ingr ? this.state.ingr : "Banana"} />
      </ScrollView>
    );
  }

  _handleOnChangeText = (text) => {
    this.setState({ingr: text},()=>{
      console.log(this.state.ingr)
    });
    
  };

}


export default MealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});