{/*__ LIBRARY IMPORTS___*/ }
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, Modal, TouchableHighlight, TextInput, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar, Card, List, ListItem, Button, Icon } from 'react-native-elements'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

{/*___ MY COMPONENT IMPORTS___*/ }
import Header from '../components/Header';
import NutrientData from '../components/NutrientData';
import IngrList from '../components/EnhancedIngrList';
import BarcodeScannerExample from '../components/BarcodeScannerExample';
import SearchBox from '../components/SearchBox';
import BarcodeButton from '../components/BarcodeButton';
import SearchModal from '../components/SearchModal';




class MealScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      food: "",
      searchModalVisible: false,
      searchText: "",
    };
    this.changeText = this.changeText.bind(this);
    this.submitText = this.submitText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addFood = this.addFood.bind(this);
    this.closeSearchModal = this.closeSearchModal.bind(this);
  }

  onSubmit = (text) => {
    this.setState({ food: text }, () => {
      console.log(this.state.food)
    });
  }

  submitText(text) {
    this.setState({ food: text }, () => {
      console.log(this.state.food)
    });
  };

  setSearchModalVisible(visible) {
    this.setState({ searchModalVisible: visible });
  }

  changeText = (text) => {
    this.setState({ searchText: text }, () => {
      console.log(this.state.food)
    });
  };

  addFood = () => {
    this.setState({ searchModalVisible: true });
  }

  closeSearchModal = () => {
    this.setSearchModalVisible(!this.state.searchModalVisible);
  }

  static navigationOptions = {
    title: 'Meal',
  };


  render() {
    return (
      <ScrollView style={styles.container} >
        <TouchableHighlight
          onPress={() => { this.addFood() }}
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 10,
            marginTop: -3
          }} >

          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
            size={50}
            style={{ color: "green", justifyContent: "center" }}
          />
        </TouchableHighlight>




        {/*__________SEARCH MODAL___________-*/}
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.searchModalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>

            <SearchModal onClose={this.closeSearchModal} />

          </Modal>
        </View>

      </ScrollView>
    );
  }

}


export default MealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});