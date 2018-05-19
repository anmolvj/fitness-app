{/*__ LIBRARY IMPORTS___*/ }
import React from 'react';
import { Text, TextInput, View, StyleSheet, Modal, Button, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

{/*___ MY COMPONENT IMPORTS___*/ }
import MyFoodList from './MyFoodList';
import NutrientData from './NutrientData';
import NutrientModal from '../components/EnhancedNutrientModal';
import SimpleModal from '../components/SimpleModal';

class EnhancedIngrList extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      findFood: PropTypes.array,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      barcodeModalVisible: false,
      selectedFood: null
    };
    this.itemClickHandler = this.itemClickHandler.bind(this);
  }

  itemClickHandler(item) {
    this.handleFoodListItemClick(item);
  }


  setBarcodeModalVisible(visible) {
    this.setState({ barcodeModalVisible: visible });
  }

  handleFoodListItemClick(item) {

    this.setState({ selectedFood: item }, () => {

      this.setState({ barcodeModalVisible: true })
    })
  }

  render() {
    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<View ><Text>An unexpected error occurred</Text></View>)
    }

    if (this.props.data.loading || !this.props.data.findFood) {
      return (
        <View><Text>Loading</Text></View>
      )
    }

    if (!this.props.currentIngr) {
      return (
        <View><Text>Nothing</Text></View>
      )
    }

    {/*
     console.log(this.props.data.findFood.map((elm)=>{
      console.log(elm.name);
    }));
  */}

    let listData = this.props.data.findFood.map((elm) => {
      return ({
        name: elm.name,
        calorie: elm.calorie,
        brand: elm.brand,
        calorie_fat: elm.calorie_fat,
        fat: elm.fat,
        fat_saturated: elm.fat_saturated,
        fat_monosaturated: elm.fat_monosaturated,
        fat_polyunsaturated: elm.fat_polyunsaturated,
        cholestrol: elm.cholestrol,
        sodium: elm.sodium,
        carbohydrate: elm.carbohydrate,
        fiber_dietary: elm.fiber_dietary,
        sugar: elm.sugar,
        protien: elm.protien,
        vitamin_a_percentage: elm.vitamin_a_percentage,
        vitamin_c_percentage: elm.vitamin_c_percentage,
        calcium: elm.calcium,
        potassium: elm.potassium,
        serving_per_container: elm.serving_per_container,
        serving_size_quantity: elm.serving_size_quantity,
        serving_size_unit: elm.serving_size_unit,
        serving_weight_grams: elm.serving_weight_grams,
        images_front_full_url: elm.images_front_full_url
      });
    })

    return (

      <View>
        {/*<Button title="btn"  onPress={()=>{this.setState({barcodeModalVisible:true})}} /> */}

        {/*__________FOOD ITEM LIST___________-*/}
        <List>
          {listData.map((item, i) => {
            return (
              <MyFoodList
                onPress={this.itemClickHandler}
                elementkey={i}
                item={item}
                name={item.name}
                brand={item.brand}
                calorie={item.calorie}
              />)
          })}
        </List>






        {/*__________MODAL___________-*/}
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.barcodeModalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>

            <ScrollView style={{ marginTop: 22 }}>
              <View>
                <Button title='Go Back' onPress={() => {
                  this.setBarcodeModalVisible(!this.state.barcodeModalVisible);
                }} />

                {/* NUTRIENT MODAL
            <NutrientModal 
              uri={this.state.modalFoodUri} 
              yield={this.state.yield} 
              quantity={this.state.quantity} 
              measure={this.state.measure} />
              */}
                <SimpleModal data={this.state.selectedFood} />
              </View>
            </ScrollView>

          </Modal>
        </View>
      </View>
    );
  }

}

const Query = gql`
  query Query($food: String!) {
    findFood(food: $food) {
      name,
      calorie,
      brand,
      calorie_fat,
      fat,
      fat_saturated,
      fat_monosaturated,
      fat_polyunsaturated,
      cholestrol,
      sodium,
      carbohydrate,
      fiber_dietary,
      sugar,
      protien,
      vitamin_a_percentage,
      vitamin_c_percentage,
      calcium,
      potassium,
      serving_per_container,
      serving_size_quantity,
      serving_size_unit,
      serving_weight_grams,
      images_front_full_url
    }}`

const IngrList = graphql(Query, {
  options: (ownProps) => ({
    variables: {
      food: ownProps.currentIngr
    }
  })
}
)(EnhancedIngrList)

export default IngrList;


