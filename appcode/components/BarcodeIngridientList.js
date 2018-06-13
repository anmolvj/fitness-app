{/*__ LIBRARY IMPORTS___*/ }
import React from 'react';
import { Text, TextInput, View, StyleSheet, Modal, ScrollView, AsyncStorage } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements'
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Spinner } from 'nachos-ui';

{/*___ MY COMPONENT IMPORTS___*/ }
import MyFoodList from './MyFoodList';
import NutrientData from './NutrientData';
import NutrientModal from '../components/EnhancedNutrientModal';
import SimpleModal from '../components/SimpleModal';

class BarcodeIngridientList extends React.Component {

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
            selectedFood: null,
            mealName: this.props.mealName
        };
        this.itemClickHandler = this.itemClickHandler.bind(this);
        this.handleFoodAdd = this.handleFoodAdd.bind(this);
        console.log(props);

    }

    componentWillMount = () => {
        AsyncStorage.getItem('@UserId').then((value) => this.setState({ 'myKey': value }))
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

    handleFoodAdd = () => {
        var sendFood = {};
        sendFood.id = this.state.myKey;
        sendFood.mealname = this.state.mealName.toUpperCase();
        sendFood.foodname = this.state.selectedFood.name;
        sendFood.brand = this.state.selectedFood.brand;
        sendFood.calorie = this.state.selectedFood.calorie;
        sendFood.date = "01-01-2018";

        console.log(sendFood);
        this.setBarcodeModalVisible(!this.state.barcodeModalVisible);
    }

    render() {
        if (this.props.data.error) {
            console.log(this.props.data.error)
            return (<View ><Text>An unexpected error occurred</Text></View>)
        }

        if (this.props.data.loading || !this.props.data.findBarcode) {
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

        if (!this.props.barcode) {
            return (
                <View><Text>Nothing</Text></View>
            )
        }
        console.log("HERE IS THE FINAL BARCODE DATA" + JSON.stringify(this.props.data.findBarcode))

        let listData = {
            name: this.props.data.findBarcode.name,
            calorie: this.props.data.findBarcode.calorie,
            brand: this.props.data.findBarcode.brand,
            calorie_fat: this.props.data.findBarcode.calorie_fat,
            fat: this.props.data.findBarcode.fat,
            fat_saturated: this.props.data.findBarcode.fat_saturated,
            fat_monosaturated: this.props.data.findBarcode.fat_monosaturated,
            fat_polyunsaturated: this.props.data.findBarcode.fat_polyunsaturated,
            cholestrol: this.props.data.findBarcode.cholestrol,
            sodium: this.props.data.findBarcode.sodium,
            carbohydrate: this.props.data.findBarcode.carbohydrate,
            fiber_dietary: this.props.data.findBarcode.fiber_dietary,
            sugar: this.props.data.findBarcode.sugar,
            protien: this.props.data.findBarcode.protien
        }
        /*vitamin_a_percentage: elm.vitamin_a_percentage,
        vitamin_c_percentage: elm.vitamin_c_percentage,
        calcium: elm.calcium,
        potassium: elm.potassium,
        serving_per_container: elm.serving_per_container,
        serving_size_quantity: elm.serving_size_quantity,
        serving_size_unit: elm.serving_size_unit,
        serving_weight_grams: elm.serving_weight_grams,
        images_front_full_url: elm.images_front_full_url*/



        console.log(listData.length);

        return (

            <View>
                {/*<Button title="btn"  onPress={()=>{this.setState({barcodeModalVisible:true})}} /> */}

                {/*__________FOOD ITEM LIST___________-*/}
                <List>

                    <MyFoodList
                        onPress={this.itemClickHandler}
                        elementkey={1}
                        item={listData}
                        name={listData.name}
                        brand={listData.brand}
                        calorie={listData.calorie}
                    />
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

                                <Button
                                    text="RETURN"
                                    buttonStyle={{ width: 200, height: 70, backgroundColor: '#f45841', margin: 10, borderRadius: 50 }}
                                    textStyle={{
                                        fontSize: 20
                                    }}
                                    onPress={() => {
                                        this.setBarcodeModalVisible(!this.state.barcodeModalVisible);
                                    }}
                                    icon={
                                        <EntypoIcon
                                            name={'back'}
                                            size={35}
                                            color='white'
                                            raised
                                        />
                                    }
                                />
                                <Button
                                    text="ADD"
                                    buttonStyle={{ width: 200, height: 70, backgroundColor: '#4164f4', margin: 10, borderRadius: 50 }}
                                    textStyle={{
                                        fontSize: 20
                                    }}
                                    onPress={this.handleFoodAdd}
                                    icon={
                                        <EntypoIcon
                                            name={'add-to-list'}
                                            size={35}
                                            color='white'
                                            raised
                                        />
                                    }
                                    iconRight
                                />

                                <SimpleModal data={this.state.selectedFood} />
                            </View>
                        </ScrollView>

                    </Modal>
                </View>
            </View >
        );
    }

}

const Query = gql`
  query Query($barcode: String!) {
    findBarcode(barcode: $barcode) {
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
     
    }}`


const BarcodeIngrList = graphql(Query, {
    options: (ownProps) => ({
        variables: {
            barcode: ownProps.barcode
        }
    })
}
)(BarcodeIngridientList)

export default BarcodeIngrList;

const styles = StyleSheet.create({
    modalCloseButton: {
        backgroundColor: "red",
        width: 50,
        height: 50,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 50
    },
});
