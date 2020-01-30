import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppName from '../appName/AppName';
import Logo from '../logo/Logo';

const TaxintAndLogo = () => (
  <View style={styles.TaxintAndLogoContainer}>
    <AppName />
    <Logo height={100} width={100} borderRadius={20} />
  </View>
);
const styles = StyleSheet.create({
  TaxintAndLogoContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default TaxintAndLogo;
