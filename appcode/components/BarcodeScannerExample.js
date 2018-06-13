import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TextInput } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null
    };
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    console.log('Scan successful!', JSON.stringify(data));
    var e = "02289902"
    var a = "" //022000008992
    if (e.charAt(0) !== '0' && e.charAt(0) !== '1')
      a = "";
    else if (e.charAt(6) == 0 || e.charAt(6) == 1 || e.charAt(6) == 2)
      a = e.substring(0, 3) + e.charAt(6) + "0000" + e.substring(3, 6) + e.charAt(7);
    else if (e.charAt(6) == 3)
      a = e.substring(0, 4) + "00000" + e.substring(4, 6) + e.charAt(7);
    else if (e.charAt(6) == 4)
      a = e.substring(0, 5) + "00000" + e.charAt(5) + e.charAt(7);
    else if (e.charAt(6) == 5 || e.charAt(6) == 6 || e.charAt(6) == 7 || e.charAt(6) == 8 || e.charAt(6) == 9)
      a = e.substring(0, 6) + "0000" + e.charAt(6) + e.charAt(7);



    console.log("final barcode--> " + a);
    //this.props.onSubmit(JSON.stringify(data.data));
    this.props.onSubmit(a);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <View>
              <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.upc_e]}
                style={styles.scanner}
              />
              <TextInput
                style={styles.textStyle}
                value={null}
                clearTextOnFocus={true}
                placeholder="Enter Barcode Manually"
                enablesReturnKeyAutomatically={true}
              />
            </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  scanner: {
    marginTop: 30,
    width: 350,
    height: 220
  },
  textStyle: {
    flex: 7,
    height: 40,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 2,
    padding: 20,
    borderRadius: 20
  }
});
