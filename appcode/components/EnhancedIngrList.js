import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class EnhancedIngrList extends React.Component {

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
      return (
        <View><Text>Loading</Text></View>
    )
    }
    
    this.props.data.getIngridient.map((elm)=>{
      return elm.label;
    }).map((x)=>{
      console.log(x);
    })

    return (
       <List >       
          {this.props.data.getIngridient.map((elm)=>{
            return elm.label;
          }).map((name,i)=>{
            return ( <ListItem
              key={i}
              title={name}
              subtitle={"Serving Size"}
              titleStyle={{fontSize: 15}}
              subtitleStyle={{fontSize: 10}}
              hideChevron={true}
              badge={
                { value: 3, 
                  textStyle: { 
                    color: 'white', 
                  }, 
                  containerStyle: { 
                    marginTop: 0,
                    backgroundColor: "grey" 
                  } }}
            />)
          })}
       </List>   
    );
  }

}

const Query = gql`
  query Query($ingr: String!) {
    getIngridient(ingr: $ingr) {
      label
    }
  }
`

const IngrList = graphql(Query, {
    options: (ownProps) => ({
        variables: {
          ingr: ownProps.currentIngr
        }
      }) 
  }
)(EnhancedIngrList)

export default IngrList;


styles = StyleSheet.create({
  containerStyle: {
    fontSize: 5
  },
  
})

