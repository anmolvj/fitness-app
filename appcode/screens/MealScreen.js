import React from 'react';
import { ScrollView, StyleSheet, Text, Button, Modal, TouchableHighlight, TextInput, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import BarcodeScannerExample from '../components/BarcodeScannerExample';
import { SearchBar, Card, List, ListItem } from 'react-native-elements'
import { APP_KEY, APP_ID } from '../components/ApiKeys';
import IngrList from '../components/EnhancedIngrList';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import NutrientData from '../components/NutrientData';

class MealScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingr: "",
      nutrientModalVisible: false,
      barcodeModalVisible: false,
    };
  }
  setNutrientModalVisible(visible) {
    this.setState({nutrientModalVisible: visible});
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
      {/*_______ NUTRIENT MODAL BUTTON_________*/}
      <Button title='Show Nutrient' onPress={()=>{this.setState({nutrientModalVisible:true})}} />

      {/*_______ BARCODE MODAL BUTTON_________*/}
      <Button title='Scan Barcode' onPress={()=>{this.setState({barcodeModalVisible:true})}} />





      {/*_______ SEARCH BOX_________*/}
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => {this._handleOnChangeText(text)}}
        value={this.state.ingr}
      />


      {/*_______ INGRIDIENT LIST_________*/}
       <IngrList currentIngr={this.state.ingr ? this.state.ingr : "Banana"} />


       

      {/*_______ NUTRIENT MODAL_________*/}
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.nutrientModalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>

          <View style={{marginTop: 22}}>
            <View>
              <Button title='Go Back' onPress={()=>{
                this.setNutrientModalVisible(!this.state.nutrientModalVisible);
              }} />

              {/* Model Data Goes Here*/}
              <NutrientData text="Nutrient"/>
              {/*<BarcodeScannerExample />*/}
            </View>
          </View>

        </Modal>
      </View>




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