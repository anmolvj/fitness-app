{/*__ LIBRARY IMPORTS___*/ }
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Switch, FlatList, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ListItem } from 'react-native-elements';
{/*___ MY COMPONENT IMPORTS___*/ }



export default class SettingsScreen extends React.Component {



  static navigationOptions = {
    title: 'Settings',
  };

  state = {
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
  }


  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View >
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
        <SectionList
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
        />
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