//Import libraries for Component
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { ListItem, List } from 'react-native-elements';
import LoggedFoodList from './LoggedFoodList';

//make a Component
class Meal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mealTitle: this.props.mealTitle
        }
    }
    handleAddFood = () => {
        this.props.onClickAdd(this.props.mealTitle);
    }

    render() {
        return (
            <View>
                {/*HEADER*/}
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{this.state.mealTitle}</Text>
                </View>


                {/*FOOD LIST*/}
                <LoggedFoodList data={this.props.data} />



                {/*ADD BUTTON*/}
                <ListItem
                    onPress={() => { this.handleAddFood(this.state.mealTitle) }}
                    key={1}
                    title={"Add Food"}
                    titleStyle={{ fontSize: 15 }}
                    hideChevron={true}
                    leftIcon={{
                        name: "add"
                    }}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#333333',
        paddingLeft: 10
    },
    headerText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white"
    }
});
//make the component available to other parts of the application
export default Meal;
