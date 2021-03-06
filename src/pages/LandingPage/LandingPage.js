import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../../component/logo/Logo';
import AppName from '../../component/appName/AppName';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class LandingPage extends Component {
  handleSwitchtoHome = () => {
    setTimeout(() => {
      this.props.navigation.navigate('CreateAccountAndLogIn');
    }, 5000);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.handleSwitchtoHome()}
        <AppName />
        <Text style={styles.subtext}>Helping you keep track of you Tax</Text>
        <View style={styles.LogoContainer}>
          <Logo height={'100%'} width={'100%'} borderRadius={20} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#1E1113',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  subtext: {
    fontSize: 15,
    color: 'white',
    paddingTop: 1,
    paddingBottom: 10,
  },
  LogoContainer: {
    width: '70%',
    height: '45%',
  },
});

export default LandingPage;
