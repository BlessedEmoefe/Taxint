import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const handleCreateAccount = () => {
  alert('this is the registeration button');
};

const handleLogin = () => {
  alert('this is the Login button');
};

const ButtonComponent = ({title}) => (
  <View style={styles.buttonContainer}>
    <Button
      style={styles.button}
      title={title}
      onPress={title == 'Login' ? handleLogin : handleCreateAccount}
      color="#A55967"
    />
  </View>
);
const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingTop: 10,
    marginBottom: 10,
    borderRadius: 30,
  },
  button: {
    width: '100%',
    color: '#A55967',
  },
});
export default ButtonComponent;
