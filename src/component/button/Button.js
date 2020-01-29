import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ButtonComponent = ({title, onPress}) => (
  <View style={styles.buttonContainer}>
    <Button style={styles.button} title={title} onPress={onPress} />
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
  },
});
export default ButtonComponent;
