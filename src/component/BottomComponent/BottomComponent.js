import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {white} from 'ansi-colors';

const BottomComponent = ({text}) => (
  <TouchableNativeFeedback onPress={alert('its working')} style={styles.touch}>
    <View style={styles.bottomContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableNativeFeedback>
);
const styles = StyleSheet.create({
  bottomContainer: {
    // backgroundColor: 'red',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#A55967',
    borderTopWidth: 1,
  },
  text: {
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 12,
    color: 'white',
  },
});
export default BottomComponent;
