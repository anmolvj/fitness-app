import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Header from '../components/Header';
import BarcodeScannerExample from '../components/BarcodeScannerExample';
import { SearchBar, Card, Button } from 'react-native-elements'
import { APP_KEY, APP_ID } from '../components/ApiKeys';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class MealScreen extends React.Component {
  static navigationOptions = {
    title: 'Meal',
  };
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      getIngridient: PropTypes.array,
    }).isRequired,
  }

  render() {
    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<View ><Text>An unexpected error occurred</Text></View>)
    }

    if (this.props.data.loading || !this.props.data.getIngridient) {
      return (<View ><Text>Loading</Text></View>)
    }
    
    console.log(this.props.data.getIngridient.map((elm)=>{return elm.label;}))
    return (
      <ScrollView style={styles.container}>
      <SearchBar
            lightTheme
            onChangeText={this._handleOnChangeText()}
            onClearText={this._handleOnChangeText()}
            placeholder='Type Here...' />
       {/*<BarcodeScannerExample />*/}
       <View >
        <Text>
          {this.props.data.getIngridient.map((elm)=>{return elm.label;})}
        </Text>
       </View>    
      </ScrollView>
    );
  }

  _handleOnChangeText = () => {
    
  };

  _handleOnClearText = () => {
    
  };

  _handleGetIngridient = (ingr) => {
    
  };

}

const Query = gql`
  query Query($ingr: String!) {
    getIngridient(ingr: $ingr) {
      label
    }
  }
`

const ScreenWithData = graphql(Query, {
  options: {
      variables: {
        ingr: "apple"
      }
    }
  }
)(MealScreen)

export default ScreenWithData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});