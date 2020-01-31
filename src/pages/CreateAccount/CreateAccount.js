import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SignIn from '../signIn/SignIn';
import CreateAccountAndLogIn from '../CreateAccountAndLogIn/CreateAccountAndLogIn';
import LandingPage from '../LandingPage/LandingPage';
import TaxintAndLogo from '../../component/TaxintAndLogo/TaxintAndLogo';
import Input from '../../component/input/Input';
import ButtonComponent from '../../component/button/Button';
import BottomComponent from '../../component/BottomComponent/BottomComponent';

class CreateAccount extends Component {
  state = {
    text: '',
  };

  handleChange = () => {
    console.log('hello');
  };

  render() {
    return (
      <View style={styles.CreateAccountPage}>
        <View style={styles.CreateAccountContainer}>
          <TaxintAndLogo />
          <Input
            placeholder="Full Name"
            onChangeText={event => {
              this.setState({text: event.target.value});
            }}
            value={this.state.text}
            autoCompleteType="email"
          />
          <Input
            placeholder="Email"
            value={this.state.text}
            onChangeText={this.handleChange}
          />
          <Input
            placeholder="Password"
            value={this.state.text}
            onChangeText={this.handleChange}
          />

          <Text>
            {Input.value ? 'Click Create Account' : 'fill in the blank spaces'}
          </Text>
          <ButtonComponent title="Create Account" />
          <Text style={styles.subtext}>Already have an account? Login</Text>
        </View>
        <BottomComponent text="Already Have an Account? Login" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  CreateAccountPage: {
    backgroundColor: '#1E1113',
    display: 'flex',
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
