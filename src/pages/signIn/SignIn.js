import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TaxintAndLogo from '../../component/TaxintAndLogo/TaxintAndLogo';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Input from '../../component/input/Input';
import ButtonComponent from '../../component/button/Button';
import BottomComponent from '../../component/BottomComponent/BottomComponent';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = email => {
    this.setState({email: email});
  };
  handlePasswordChange = password => {
    this.setState({password: password});
  };

  render() {
    return (
      <View style={styles.SignInPage}>
        <View style={styles.SignInContainer}>
          <TaxintAndLogo />
          <Input
            placeholder="Email"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
          <Input
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
          />
          <ButtonComponent
            title="Login"
            onPress={() => {
              this.props.navigation.navigate('LandingPage');
            }}
          />
          <Text
            style={styles.subtext}
            onPress={() => {
              this.props.navigation.navigate('CreateAccount');
            }}>
            Forgot your login details? Create Account
          </Text>
        </View>
        <BottomComponent
          text="Don't have an account? Create Account"
          onPress={() => {
            this.props.navigation.navigate('CreateAccount');
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  SignInPage: {
    backgroundColor: '#1E1113',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  SignInContainer: {
    // backgroundColor: 'red',
    width: '90%',
    marginTop: 15,
  },
  subtext: {
    color: 'white',
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
});
export default SignIn;
