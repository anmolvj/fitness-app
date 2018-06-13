{/*__ LIBRARY IMPORTS___*/ }
import React from 'react';
import { ScrollView, StyleSheet, Modal, View, Text } from 'react-native';
import { SearchBar, Card, List, ListItem, Button, Icon } from 'react-native-elements'
{/*___ MY COMPONENT IMPORTS___*/ }
import SearchBox from './SearchBox';
import BarcodeButton from './BarcodeButton';
import IngrList from './EnhancedIngrList';
import BarcodeIngrList from './BarcodeIngridientList';
import NutrientData from './NutrientData';
import BarcodeScannerExample from './BarcodeScannerExample';


class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "",
      barcode: "",
      barcodeSearched: false,
      barcodeModalVisible: false,
      mealName: this.props.mealName
    };
    this.changeText = this.changeText.bind(this);
    this.submitText = this.submitText.bind(this);
    this.submitBarcode = this.submitBarcode.bind(this);
    this.barcodeOnPress = this.barcodeOnPress.bind(this);
    this.closeBarcodeModal = this.closeBarcodeModal.bind(this);
  }

  setBarcodeModalVisible(visible) {
    this.setState({ barcodeModalVisible: visible });
  }

  submitText = (text) => {
    this.setState({ food: text, barcodeSearched: false }, () => {
      console.log(this.state.food)
    });
  }

  submitBarcode = (barcode) => {
    this.setState({ barcode: barcode }, () => {
      this.setState({barcodeSearched: true});
      console.log("PARENT BARCODE DATA -> " + this.state.barcode);
      console.log("Barcode searched -> " + this.state.barcodeSearched)
    });
    this.setBarcodeModalVisible(!this.state.barcodeModalVisible);
  }

  changeText = (text) => {
    this.setState({ searchText: text }, () => {
      console.log(this.state.food)
    });
  };

  barcodeOnPress = () => {
    this.setState({ barcodeModalVisible: true });
  }

  handleClose = () => {
    this.props.onClose();
  }

  closeBarcodeModal = () => {
    this.setBarcodeModalVisible(!this.state.barcodeModalVisible);
  }

  render() {
    return (
      <ScrollView style={styles.container} >
        <Button
          text='X'
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={styles.modalCloseButton}
          containerStyle={{ marginTop: 20 }}
          onPress={() => { this.handleClose() }} />

        <View style={styles.searchBarContainer}>
          <BarcodeButton onPress={this.barcodeOnPress} />
          <SearchBox onSubmit={this.submitText} />
        </View>
        
        {this.state.barcodeSearched ? (<BarcodeIngrList barcode={this.state.barcode} mealName={this.state.mealName}/> ) : (<IngrList currentIngr={this.state.food} mealName={this.state.mealName}/>)}
 
        {/*__________BARCODE MODAL___________-*/}
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.barcodeModalVisible}
          >

            <View style={{ marginTop: 22 }}>
              <View>
                <Button
                  text='X'
                  titleStyle={{ fontWeight: "700" }}
                  buttonStyle={styles.modalCloseButton}
                  containerStyle={{ marginTop: 20 }}
                  onPress={() => {
                    this.setBarcodeModalVisible(!this.state.barcodeModalVisible);
                  }} />

                {/* Model Data Goes Here*/}
                <BarcodeScannerExample onSubmit={this.submitBarcode} />

              </View>
            </View>

          </Modal>
        </View>
      </ScrollView>
    );
  }


}


export default SearchModal;

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  modalCloseButton: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 50
  },
});