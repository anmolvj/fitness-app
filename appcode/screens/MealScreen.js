{/*__ LIBRARY IMPORTS___*/ }
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, Modal, TouchableHighlight, TextInput, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar, Card, List, ListItem, Button, Icon } from 'react-native-elements';
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

import Meal from '../components/MealScreen/Meal';
import CalorieBar from '../components/MealScreen/CalorieBar';
import MealDate from '../components/MealScreen/MealDate';




class MealPage extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      findLog: PropTypes.object,
    }).isRequired,
  }

  static navigationOptions = {
    title: 'Meal',
  };

  constructor(props) {
    super(props);
    this.state = {
      searchModalVisible: false,
      searchText: "",
      mealName: ""
    };
    this.addFood = this.addFood.bind(this);
    this.closeSearchModal = this.closeSearchModal.bind(this);

    this.testAddFood = this.testAddFood.bind(this);
  }


  setSearchModalVisible = (visible) => {
    this.setState({ searchModalVisible: visible });
  }
  addFood = (mealName) => {
    this.setState({ mealName: mealName },
      this.setState({ searchModalVisible: true })
    );
  }

  
  closeSearchModal = () => {
    this.setSearchModalVisible(!this.state.searchModalVisible);
  }
  testAddFood = (mealName) => {
    console.log(`Passed meal name -> ${mealName}`);
  }


  render() {
    var data = {
      mealTitle: "Breakfast",
      onClickAdd: this.addFood,
      data: [
        {
          title: "Banana",
          brand: "Organics",
          onClick: (() => { return }),
          calories: 110
        },
        {
          title: "Cheetos",
          brand: "Lays",
          onClick: (() => { return }),
          calories: 230
        }
      ]
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<View ><Text>An unexpected error occurred</Text></View>)
    }

    if (this.props.data.loading || !this.props.data.findLog) {
      return (<View><Text>Loading</Text></View>)
    }


    var breakfastData = this.props.data.findLog.breakfast.map((item, i) => {
      return ({
        title: item.title,
        brand: item.brand,
        calories: item.calories,
        onClick: (() => { return })
      });
    });
    var lunchData = this.props.data.findLog.lunch.map((item, i) => {
      return ({
        title: item.title,
        brand: item.brand,
        calories: item.calories,
        onClick: (() => { return })
      });
    });

    var dinnerData = this.props.data.findLog.dinner.map((item, i) => {
      return ({
        title: item.title,
        brand: item.brand,
        calories: item.calories,
        onClick: (() => { return })
      });
    });

    console.log(typeof (data));



    return (
      <ScrollView style={styles.container} >
        {/*<TouchableHighlight
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
        </TouchableHighlight>*/}
        <MealDate date={"monday/16"}/>

        <CalorieBar
          consumed={1870}
          goal={3200}
        />
        <Meal mealTitle={"BreakFast"} onClickAdd={data.onClickAdd} data={breakfastData} />
        <Meal mealTitle={"Lunch"} onClickAdd={data.onClickAdd} data={lunchData} />
        <Meal mealTitle={"Dinner"} onClickAdd={data.onClickAdd} data={dinnerData} />

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});

const Query = gql`
  query Query($userId: String!) {
    findLog(userId: $userId) {
      breakfast,
      lunch,
      dinner
    }}`

const MealScreen = graphql(Query, {
  options: (ownProps) => ({
    variables: {
      userId: "ownProps.userId"
    }
  })
}
)(MealPage)

export default MealScreen;