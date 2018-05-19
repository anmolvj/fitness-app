import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: "",
        }
    }
    changeText = (food) => {
        this.setState({ food: food }, () => {
            console.log(this.state.food);
        });
    };

    submitText = () => {
        this.props.onSubmit(this.state.food);
      };

    render() {
        return (
            <TextInput
                style={styles.textStyle}
                onChangeText={(text) =>  this.changeText(text) }
                onSubmitEditing={(event) => this.submitText()}
                value={this.state.food}
                clearTextOnFocus={true}
                placeholder="Search Food"
                enablesReturnKeyAutomatically={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        flex: 7,
        height: 40,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 2,
        paddingLeft: 20,
        borderRadius: 20
    }
});

export default SearchBox;