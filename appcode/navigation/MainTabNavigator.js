import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MealScreen from '../screens/MealScreen';
import FitnessScreen from '../screens/FitnessScreen';

export default TabNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    Meal: {
      screen: MealScreen,
    },
    Settings: {
      screen: SettingsScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Profile':
            iconName =
              Platform.OS === 'ios'
                ? `ios-pulse${focused ? '' : '-outline'}`
                : 'md-pulse';
            break;
          case 'Meal':
            iconName = Platform.OS === 'ios' ? `ios-nutrition${focused ? '' : '-outline'}` : 'md-nutrition';
            break;
          case 'Fitness':
          iconName = Platform.OS === 'ios' ? `ios-body${focused ? '' : '-outline'}` : 'md-body';
          break;  
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false
  }
);
