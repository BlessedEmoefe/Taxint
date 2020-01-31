import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingPage from './pages/LandingPage/LandingPage';
import SignIn from './pages/signIn/SignIn';
import CreateAccountAndLogIn from './pages/CreateAccountAndLogIn/CreateAccountAndLogIn';
import CreateAccount from './pages/CreateAccount/CreateAccount';

const AppNavigator = createStackNavigator(
  {
    LandingPage: LandingPage,
    CreateAccountAndLogIn: CreateAccountAndLogIn,
    SignIn: SignIn,
    CreateAccount: CreateAccount,
  },
  {
    initialRouteName: 'LandingPage',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
// const Routers = createAppContainer(AppNavigator);

// export default Routers;
