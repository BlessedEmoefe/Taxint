import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../../component/logo/Logo';
import AppName from '../../component/appName/AppName';
import ButtonComponent from '../../component/button/Button';

const handleCreateAccount = () => {
  alert('this is the registeration button');
};

const handleLogin = () => {
  alert('this is the Login button');
};

const CreateAccountAndLogIn = () => {
  return (
    <View style={styles.ContainerForCreateAccountAndLogIn}>
      <View style={styles.body}>
        <View style={styles.firstSection}>
          <AppName />
          <Logo height={100} width={100} borderRadius={20} />
        </View>
        <View style={styles.secondSection}>
          <Text style={styles.subText}>See how much you spend on taxes</Text>
        </View>
        <View style={styles.thirdSection}>
          <Text style={styles.information}>
            By clicking on create account, you agree with our Terms and
            Conditions. You may go through our Privacy Policy for more insight
          </Text>
        </View>
        <View style={styles.buttons}>
          <ButtonComponent
            title="Create Account"
            onPress={handleCreateAccount}
          />
          <ButtonComponent title="Login" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ContainerForCreateAccountAndLogIn: {
    backgroundColor: '#1E1113',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: '80%',
    // backgroundColor: 'blue',
  },
  firstSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondSection: {
    marginTop: 2,
    marginBottom: 20,
  },
  subText: {
    fontSize: 24,
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  thirdSection: {
    marginBottom: 8,
  },
  information: {
    fontSize: 12,
    color: 'white',
    display: 'flex',
    // textAlign: 'center',
    flexWrap: 'wrap',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
export default CreateAccountAndLogIn;
