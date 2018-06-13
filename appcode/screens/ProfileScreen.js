import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import PureChart from 'react-native-pure-chart';
import WeightChart from '../components/WeightChart';
import { Gravatar, Indicator, Progress } from 'nachos-ui';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };

  constructor(props) {
    super(props);
    this.state = {
      myKey: null
    }
  }

  componentWillMount = () => {
    AsyncStorage.getItem('@UserId').then((value) => this.setState({ 'myKey': value }))
  }

  render() {
    let graphData = [{
      data: [
        { x: '2018-01-01', y: 130 },
        { x: '2018-01-02', y: 135 },
        { x: '2018-01-03', y: 131 },
        { x: '2018-01-04', y: 127 },
        { x: '2018-01-05', y: 137 },
        { x: '2018-01-06', y: 140 }],
      color: '#ff4d4d'
    }
    ]

    console.log("MY KI  --->" + this.state.myKey);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            <View style={{
              flexDirection: "row",
              justifyContent: "space-around"
            }}
            >

              <Gravatar
                md5='313cbdb52db5b6bb6b3f14bc4ddae461'
                size={100}
                circle
                style={{
                  marginLeft: 20,
                }}
              />

            </View>

            <View style={{
              marginRight: 50
            }}
            >
              <Text style={{
                fontWeight: "bold",
                fontSize: 34
              }}>Jacob Tyler</Text>
              <Text style={{
                fontWeight: "bold",
                fontSize: 14,
                marginTop:7,
              }}>San Francisco Bay Area</Text>

            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#ff4d4d',
              borderBottomWidth: 4,
              borderRadius: 5,
              width: 170,
              marginTop: 0,
              marginBottom: 15,
              marginLeft: 180

            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: 'space-around',
            }}>

            <View>
              <Icon
                name='weight'
                type='material-community'
                color='#1f6aa8'
                raised
              />
              <Text style={{
                marginLeft: 13,
                fontSize: 15,
                fontWeight: "bold",
              }}
              >167 lb</Text>
            </View>
            <View>
              <Icon
                name='birthday-cake'
                type='font-awesome'
                color='#b2f441'
                raised
              />
              <Text style={{
                marginLeft: -5,
                fontSize: 15,
                fontWeight: "bold",
              }}
              >Jan-1-96</Text>
            </View>
            <View>
              <Icon
                name='intersex'
                type='font-awesome'
                color='#f44271'
                raised
              />
              <Text style={{
                marginLeft: 15,
                fontSize: 15,
                fontWeight: "bold",
              }}
              >Male</Text>
            </View>


          </View>
          <View
            style={{
              borderBottomColor: '#ff4d4d',
              borderBottomWidth: 4,
              borderRadius: 5,
              width: 340,
              marginTop: 10,
              marginBottom: 20,
              marginLeft: 30

            }}
          />
          <WeightChart data={graphData} />



          <View>
            {/*<Text>This is the logged in used id -> {this.state.myKey}</Text>*/}
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more and more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
