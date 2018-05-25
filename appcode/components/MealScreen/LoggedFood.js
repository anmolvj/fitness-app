//Import libraries for Component
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { ListItem, Card } from 'react-native-elements';



import LogListItem from './LogListItem';




//make a Component
class LoggedFood extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        console.log("test data" + this.props.testData)
        return (
            <View>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>BREAKFAST</Text>
                </View>

                <LogListItem testData={"some test data"} />

                <ListItem
                    onPress={() => { return }}
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
export default LoggedFood;
