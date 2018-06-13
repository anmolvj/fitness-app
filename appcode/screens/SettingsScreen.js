{/*__ LIBRARY IMPORTS___*/ }
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Switch, FlatList, SectionList, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ListItem, Button } from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';
{/*___ MY COMPONENT IMPORTS___*/ }



export default class SettingsScreen extends React.Component {



  static navigationOptions = {
    title: 'Settings',
  };
  constructor(props) {
    super(props);
    this.state = {
      "users":
        [
          {
            "name": "Proxima Midnight",
          }
        ],
      "sectionTitle": "Allergies",
      sections: [
        { title: 'Allergies', data: ['Proxima Midnight'] }
      ]
    };
    this.setUserId = this.setUserId.bind(this);
  }

  setUserId = () => {
    try {
      AsyncStorage.setItem('@UserId', "");
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Button
          text="LOGOUT"
          buttonStyle={{ width: 200, height: 70, backgroundColor: '#960000', margin: 10 }}
          textStyle={{
            fontSize: 20
          }}
          onPress={() => {
            this.setUserId();
            navigate('Welcome');
          }}
          icon={
            <EntypoIcon
              name={'log-out'}
              size={35}
              color='white'
              raised
            />
          }
          iconRight
        />
        {/*___ 
      <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>

            <View style={styles.flatview}>

              <View style={styles.leftContainer} >
                <Text style={styles.name}>{item.name}</Text>
              </View>

              <View style={styles.rightContainer} >
                <Switch />
              </View>
            </View>
          }
          keyExtractor={item => item.email}
        />
___*/ }
        {/*<SectionList
          sections={this.state.sections}
          keyExtractor={(item, index) => item + index}

          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          )}
          renderItem={({ item, index, section }) => {
            return (
              <View style={styles.flatview}>

                <View style={styles.leftContainer} >
                  <Text style={styles.name}>{item}</Text>
                </View>

                <View style={styles.rightContainer} >
                  <Switch />
                </View>
              </View>
            )
          }}
        />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  flatview: {
    flexDirection: "row",
    borderRadius: 2,
    backgroundColor: "white",
    padding: 10
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10


  },



});