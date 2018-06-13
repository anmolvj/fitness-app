{/*__ LIBRARY IMPORTS___*/ }
import React from 'react';
import { AsyncStorage, Platform, ScrollView, StyleSheet, Text, Modal, TouchableHighlight, TextInput, View, Image, ActivityIndicator } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar, Card, List, ListItem, Button, Icon } from 'react-native-elements';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Spinner } from 'nachos-ui';


{/*___ MY COMPONENT IMPORTS___*/ }
import Header from '../components/Header';
import NutrientData from '../components/NutrientData';
import IngrList from '../components/EnhancedIngrList';
import BarcodeScannerExample from '../components/BarcodeScannerExample';
import SearchBox from '../components/SearchBox';
import BarcodeButton from '../components/BarcodeButton';
import SearchModal from '../components/SearchModal';

import Meal from '../components/MealScreen/Meal';
import CalorieBar from '../components/MealScreen/CalorieBar';
import MealDate from '../components/MealScreen/MealDate';
import EnhancedMealScreen from './EnhancedMealScreen';



class MealScreen extends React.Component {

  static navigationOptions = {
    title: 'Meal'
  };
  constructor(props) {
    super(props);
    this.state = {
      myKey: ""
    }
  }

  componentWillMount = () => {
    AsyncStorage.getItem('@UserId').then((value) => this.setState({ 'myKey': value }));
    console.log("Meal Page---> " + this.state.myKey);
  }



  render() {


    return (
      <ScrollView style={styles.container} >
        <EnhancedMealScreen id={this.state.myKey} />
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});


export default MealScreen;