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
import _ from 'lodash';

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




class EnhancedMealPage extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      User: PropTypes.object,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      searchModalVisible: false,
      searchText: "",
      mealName: "",
      myKey: ""
    };
    this.addFood = this.addFood.bind(this);
    this.closeSearchModal = this.closeSearchModal.bind(this);
  }


  setSearchModalVisible = (visible) => {
    this.setState({ searchModalVisible: visible });
  }

  closeSearchModal = () => {
    this.setSearchModalVisible(!this.state.searchModalVisible);
  }

  addFood = (mealName) => {
    this.setState({ mealName: mealName },
      this.setState({ searchModalVisible: true })
    );
  }


  render() {

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<View ><Text>An unexpected error occurred</Text></View>)
    }

    if (this.props.data.loading || !this.props.data.User) {
      return (

        <View style={{
          margin: 15,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Spinner />
        </View>

      )
    }

    var breakfastData = {}
    var lunchData = {}
    var dinnerData = {}

if(this.props.data.User.day[0].meals[0]){   
    breakfastData.title = JSON.stringify(this.props.data.User.day[0].meals[0].foods[0].name) ;
    breakfastData.subtitle = JSON.stringify(this.props.data.User.day[0].meals[0].foods[0].brand);
    breakfastData.calories = JSON.stringify(this.props.data.User.day[0].meals[0].foods[0].calorie);
}
if(this.props.data.User.day[0].meals[1]){
    
    lunchData.title = JSON.stringify(this.props.data.User.day[0].meals[1].foods[0].name) ;
    lunchData.subtitle = JSON.stringify(this.props.data.User.day[0].meals[1].foods[0].brand);
    lunchData.calories = JSON.stringify(this.props.data.User.day[0].meals[1].foods[0].calorie);
}
if(this.props.data.User.day[0].meals[2]){
    
    dinnerData.title = JSON.stringify(this.props.data.User.day[0].meals[2].foods[0].name) ;
    dinnerData.subtitle = JSON.stringify(this.props.data.User.day[0].meals[2].foods[0].brand);
    dinnerData.calories = JSON.stringify(this.props.data.User.day[0].meals[2].foods[0].calorie);
}  

  



   

    return (
      <ScrollView style={styles.container} >

        <MealDate date={"monday/16"} />

        <CalorieBar
          consumed={1870}
          goal={3200}
        />
        <Meal mealTitle={"BreakFast"} onClickAdd={this.addFood} data={[breakfastData]} />
        <Meal mealTitle={"Lunch"} onClickAdd={this.addFood} data={[lunchData]} />
        <Meal mealTitle={"Dinner"} onClickAdd={this.addFood} data={[dinnerData]} />

        {/*__________SEARCH MODAL___________-*/}
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.searchModalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>

            <SearchModal onClose={this.closeSearchModal} mealName={this.state.mealName} />

          </Modal>
        </View>

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

const Query = gql`
  query Query($id: ID!) {
    User(id: $id) {
      day{
          id,
          meals{
              name,
              foods{
                  name,
                  brand,
                  calorie
              }
          }
      }
    }}`


const EnhancedMealScreen = graphql(Query, {
  options: (props) => ({
    variables: { id: props.id }
  })
})(EnhancedMealPage)

export default EnhancedMealScreen;