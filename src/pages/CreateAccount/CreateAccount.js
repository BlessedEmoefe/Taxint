import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SignIn from '../signIn/SignIn';
import CreateAccountAndLogIn from '../CreateAccountAndLogIn/CreateAccountAndLogIn';
import LandingPage from '../LandingPage/LandingPage';
import TaxintAndLogo from '../../component/TaxintAndLogo/TaxintAndLogo';
import Input from '../../component/input/Input';
import ButtonComponent from '../../component/button/Button';
import BottomComponent from '../../component/BottomComponent/BottomComponent';

class CreateAccount extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleNameChange = name => {
    this.setState({name: name});
  };
  handleEmailChange = email => {
    this.setState({email: email});
  };
  handlePasswordChange = password => {
    this.setState({password: password});
  };

  render() {
    return (
      <View style={styles.CreateAccountPage}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.CreateAccountContainer}>
              <TaxintAndLogo />
              <Input
                placeholder="Full Name"
                onChangeText={this.handleNameChange}
                value={this.state.name}
              />
              <Input
                placeholder="Email"
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                autoCompleteType="email"
              />
              <Input
                placeholder="Password"
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
              />

              <Text>
                {Input.value
                  ? 'Click Create Account'
                  : 'fill in the blank spaces'}
              </Text>
              <ButtonComponent title="Create Account" />
              <Text
                style={styles.subtext}
                onPress={() => {
                  this.props.navigation.navigate('SignIn');
                }}>
                Already have an account? Login
              </Text>
            </View>
          </View>
        </ScrollView>
        <BottomComponent
          text="Already Have an Account? Login"
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  CreateAccountPage: {
    backgroundColor: '#1E1113',
    display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    flex: 1,
  },
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  CreateAccountContainer: {
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
export default CreateAccount;
