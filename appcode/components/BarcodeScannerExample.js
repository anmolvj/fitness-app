import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TextInput } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class App extends Component {
  state = {
    hasCameraPermission: null
  };

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
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
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
