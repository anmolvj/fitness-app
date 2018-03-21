import React from 'react';
import { Text, TextInput, View, StyleSheet, Modal, Button } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import MyFoodList from './MyFoodList';
import NutrientData from './NutrientData';
import NutrientModal from '../components/EnhancedNutrientModal';

class EnhancedIngrList extends React.Component {

static propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool,
        error: PropTypes.object,
        getIngridient: PropTypes.array,
    }).isRequired,
}

constructor(props) {
    super(props);
    this.state = {
      barcodeModalVisible: false,
      modalFoodUri: "http://www.edamam.com/ontologies/edamam.owl#Food_11529",
      yield: 1,
      quantity: 1,
      measures: [],
      measure: "pound"
    };
    this.parentAlert = this.parentAlert.bind(this);
  }

  parentAlert(food_uri){
    this.setState({barcodeModalVisible:true})
  }


setBarcodeModalVisible(visible) {
  this.setState({barcodeModalVisible: visible});
} 



handleFoodListItemClick(food_uri) {
  this.setState({modalFoodUri: food_uri},()=>{
    this.setState({barcodeModalVisible:true})
  });

} 

  render() {
    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<View ><Text>An unexpected error occurred</Text></View>)
    }

    if (this.props.data.loading || !this.props.data.getIngridient) {
      return (
        <View><Text>Loading</Text></View>
    )
    }
    
  {/*
      this.props.data.getIngridient.map((elm)=>{
      return elm.label;
    }).map((x)=>{
      console.log(x);
    })
  */}

    let listData = this.props.data.getIngridient.map((elm)=>{
      return ({ "label" : elm.label, food_uri: elm.food_uri, "measures": elm.measures});
    })
    return (
      <View>

      {/*<Button title="btn"  onPress={()=>{this.setState({barcodeModalVisible:true})}} /> */}
      




       <List> 
          {listData.map((item,i)=>{
            return (
               <MyFoodList 
                onPress={this.parentAlert} 
                elementkey={i} 
                title={item.label} 
                measure={item.measures[0]} 
                food_uri={item.food_uri}/>)
          })}
       </List> 
       





       {/*__________MODAL___________-*/}
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

            {/* NUTRIENT MODAL*/}
            <NutrientModal 
              uri={this.state.modalFoodUri} 
              yield={this.state.yield} 
              quantity={this.state.quantity} 
              measure={this.state.measure} />
          </View>
        </View>

        </Modal>
      </View>
    </View>
    );
  }

}

const Query = gql`
  query Query($ingr: String!) {
    getIngridient(ingr: $ingr) {
      label,
      food_uri,
      measures
    }}`

const IngrList = graphql(Query, {
    options: (ownProps) => ({
        variables: {
          ingr: ownProps.currentIngr
        }
      }) 
  }
)(EnhancedIngrList)

export default IngrList;


