import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../../component/logo/Logo';
import AppName from '../../component/appName/AppName';
import ButtonComponent from '../../component/button/Button';
import TaxintAndLogo from '../../component/TaxintAndLogo/TaxintAndLogo';

const CreateAccountAndLogIn = () => {
  return (
    <View style={styles.ContainerForCreateAccountAndLogIn}>
      <View style={styles.body}>
        <View style={styles.firstSection}>
          <TaxintAndLogo />
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
          <ButtonComponent title="Create Account" color={'#A55967'} />
          <ButtonComponent title="Login" color={'#A55967'} />
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
