import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import TaxintAndLogo from '../../component/TaxintAndLogo/TaxintAndLogo';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Input from '../../component/input/Input';
import ButtonComponent from '../../component/button/Button';
import BottomComponent from '../../component/BottomComponent/BottomComponent';
import signInWithGoogle from '../../component/firebase/firebase.utils';
import firebase from 'firebase';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    logedIn: null,
  };

  // handleUsercheck = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({logedIn: true});
  //     } else {
  //       this.setState({logedIn: false});
  //     }
  //   });
  // };
  // handleUser = () => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(() => {
  //       this.state.login = true ? (
  //         this.props.navigation.navigate('BottomNavigation')
  //       ) : (
  //         <Text>incorrect details</Text>
  //       );
  //     });
  // };

  handleEmailChange = email => {
    this.setState({email: email});
  };
  handlePasswordChange = password => {
    this.setState({password: password});
  };

  render() {
    return (
      <View style={styles.SignInPage}>
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
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
                onPress={() =>
                  this.props.navigation.navigate('BottomNavigation')
                }
              />
              <Text style={styles.orText}>or</Text>
              <ButtonComponent
                style={styles.GoogleButton}
                title="Sign in with Google"
                onPress={() =>
                  this.props.navigation.navigate('BottomNavigation')
                }
              />
              <Text
                style={styles.subtext}
                onPress={() => {
                  this.props.navigation.navigate('CreateAccount');
                }}>
                Forgot your login details? Create Account
              </Text>
            </View>
          </View>
        </ScrollView>
        <BottomComponent
          style={styles.BottomComponent}
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
    flex: 1,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
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
  orText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  BottomComponent: {
    flex: 1,
    display: 'flex',
  },
});
export default SignIn;
