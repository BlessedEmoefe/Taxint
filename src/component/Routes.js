import React from 'react';
import {View, Text} from 'react-native';
import {Navigation, Tabs, Tab, Card} from 'react-router-navigation';
import LandingPage from '../pages/LandingPage/LandingPage';
import CreateAccountAndLogIn from '../pages/CreateAccountAndLogIn/CreateAccountAndLogIn';
import SignIn from '../pages/signIn/SignIn';

const RouteComponent = () => (
  <View>
    <Navigation>
      <Card path="/landingPage" exact component={LandingPage} />
      <Card path="/signIn" component={SignIn} />
      <Card path="/createAccoutAndLogIn" component={CreateAccountAndLogIn} />
      <Card path="/landingPage" exact component={LandingPage} />
    </Navigation>
  </View>
);
export default RouteComponent;
