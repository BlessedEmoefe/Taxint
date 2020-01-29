import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AppName = () => (
  <View>
    <Text style={styles.welcomeText}>Taxint</Text>
  </View>
);

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 40,
    textTransform: 'capitalize',
    color: 'white',
    paddingBottom: 1,
  },
});
export default AppName;
