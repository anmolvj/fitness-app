import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, Button, Modal, TouchableHighlight, TextInput, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import BarcodeScannerExample from '../components/BarcodeScannerExample';
import { SearchBar, Card, List, ListItem } from 'react-native-elements'
import { APP_KEY, APP_ID } from '../components/ApiKeys';
import IngrList from '../components/EnhancedIngrList';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import NutrientData from '../components/NutrientData';

class MealScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingr: "",
      barcodeModalVisible: false,
    };
  }
 

  setBarcodeModalVisible(visible) {
    this.setState({barcodeModalVisible: visible});
  }

  static navigationOptions = {
    title: 'Meal',
  };
 

  render() {
    return (
      <ScrollView style={styles.container}>

      {/*_______ CONTAINER FOR BARCODE BUTTON AND SEARCH BOX_________*/}
      <View style={{
        flex: 1, 
        flexDirection: 'row', 
      }}>
        {/*_______ BARCODE MODAL BUTTON_________*/}
        <TouchableHighlight  
          onPress={()=>{this.setState({barcodeModalVisible:true})}} 
          style={{
            flex: 1,
            padding: 10,
            marginTop: -3
          }} >
          
          <Ionicons
                name={ Platform.OS === 'ios'? 'ios-barcode' : 'md-barcode'}
                size={50}
                style={{}}
              />
            
        </TouchableHighlight>
 
            {/*_______ SEARCH BOX_________*/}
        <TextInput
          style={{
            flex: 7,
            height: 40,
            margin: 10,  
            borderColor: 'gray', 
            borderWidth: 2,
            paddingLeft: 20,
            borderRadius: 20
          }}
          onChangeText={(text) => {this._handleOnChangeText(text)}}
          value={this.state.ingr}
          placeholder="Search Food"
        />
      </View>

      {/*_______ INGRIDIENT LIST_________*/}
       <IngrList currentIngr={this.state.ingr ? this.state.ingr : "Banana"} />


      {/*__________BARCODE MODAL___________-*/}
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.barcodeModalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>

          <View style={{marginTop: 22}}>
            <View>
              <Button title='Go Back' onPress={()=>{
                this.setBarcodeModalVisible(!this.state.barcodeModalVisible);
              }} />

              {/* Model Data Goes Here*/}
              <NutrientData text="Barcode"/>

            </View>
          </View>

        </Modal>
      </View>

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