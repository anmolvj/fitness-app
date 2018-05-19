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
import { APP_KEY, APP_ID } from '../components/ApiKeys';



class DiaryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "",
      searchModalVisible: false,
      searchText: "",
    };
    this.changeText = this.changeText.bind(this);
    this.submitText = this.submitText.bind(this);
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
            onPress={() => { this.setState({ searchModalVisible: true }) }}
            style={{
              flex: 1,
              padding: 10,
              marginTop: -3
            }} >

            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
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
            onChangeText={(text) => { this.changeText(text) }}
            onSubmitEditing={(event) => this.submitText( event.nativeEvent.text)}
            value={this.state.searchText}
            clearTextOnFocus={true}
            placeholder="Search Food"
          />
        </View>
        

        {/*_______ ENHANCED INGRIDIENT LIST_________*/}
        <IngrList currentIngr={this.state.food} />


        {/*__________BARCODE MODAL___________-*/}
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.searchModalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>

            <View style={{ marginTop: 22 }}>
              <View>
                <Button
                  text='X'
                  titleStyle={{ fontWeight: "700" }}
                  buttonStyle={{
                    backgroundColor: "red",
                    width: 50,
                    height: 50,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 50
                  }}
                  containerStyle={{ marginTop: 20 }}
                  onPress={() => {
                    this.setSearchModalVisible(!this.state.searchModalVisible);
                  }} />

                {/* Model Data Goes Here*/}
                <NutrientData text="Barcode" />

              </View>
            </View>

          </Modal>
        </View>

      </ScrollView>
    );
  }
}


export default DiaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});