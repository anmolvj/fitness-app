{/*__ LIBRARY IMPORTS___*/}
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, Modal, TouchableHighlight, TextInput, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar, Card, List, ListItem, Button, Icon } from 'react-native-elements'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

{/*___ MY COMPONENT IMPORTS___*/}
import Header from '../components/Header';
import NutrientData from '../components/NutrientData';
import IngrList from '../components/EnhancedIngrList';
import BarcodeScannerExample from '../components/BarcodeScannerExample';
import { APP_KEY, APP_ID } from '../components/ApiKeys';



class MealScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "",
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
      <ScrollView style={styles.container} >

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
          value={this.state.food? this.state.food: "Banana"}
          clearTextOnFocus={true}
          placeholder="Search Food"
        />
      </View>

      {/*_______ ENHANCED INGRIDIENT LIST_________*/}
       <IngrList currentIngr={this.state.food ? this.state.food : "Banana"} />


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
              <Button 
              icon={
                <Icon
                  name='arrow-left'
                  size={15}
                  color='white'
                />
              }
              iconLeft
              title='Go Back'
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              containerStyle={{ marginTop: 20 }}
              onPress={()=>{
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
    this.setState({food: text},()=>{
      console.log(this.state.food)
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