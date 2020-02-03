import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingPage from './pages/LandingPage/LandingPage';
import SignIn from './pages/signIn/SignIn';
import CreateAccountAndLogIn from './pages/CreateAccountAndLogIn/CreateAccountAndLogIn';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import BottomNavigation from './component/bottomNavigation/BottomNavigation';
import TopNavigation from './component/TopNavigation/TopNavigation';
import MainAppPage from './pages/MainAppPage/MainAppPage';
import Setting from './pages/Setting/Setting';
import TaxCheck from './pages/TaxCheck/TaxCheck';
import HomePage from './pages/HomePage/HomePage';
import Profile from './pages/Profile/Profile';

const AppNavigator = createStackNavigator(
  {
    LandingPage: LandingPage,
    CreateAccountAndLogIn: CreateAccountAndLogIn,
    SignIn: SignIn,
    CreateAccount: CreateAccount,
    BottomNavigation: BottomNavigation,
    TopNavigation: TopNavigation,
    MainAppPage: MainAppPage,
    Setting: Setting,
    TaxCheck: TaxCheck,
    Profile: Profile,
    HomePage: HomePage,
  },
  {
    initialRouteName: 'MainAppPage',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
// const Routers = createAppContainer(AppNavigator);

// export default Routers;
