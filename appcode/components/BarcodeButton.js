import React from 'react';
import { Platform, StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class BarcodeButton extends React.Component {
    constructor(props) {
        super(props);

    }
    handlePress = () => {
        this.props.onPress();
    };

    render() {
        return (
            <TouchableHighlight
                onPress={() => {this.handlePress()}}
                style={styles.buttonStyle} >

                <Ionicons
                    name={Platform.OS === 'ios' ? 'ios-barcode' : 'md-barcode'}
                    size={50}
                    style={styles.iconStyle}
                />

            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        padding: 10,
        marginTop: -3
    },
    iconStyle: {

    }
});

export default BarcodeButton;