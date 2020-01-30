import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Taxint from '../../../assets/taxint.jpg';

const Logo = ({height, width, borderRadius}) => (
  <View style={styles.LogoImage}>
    <Image
      source={Taxint}
      style={{height: height, width: width, borderRadius: borderRadius}}
    />
  </View>
);

const styles = StyleSheet.create({
  LogoImage: {
    marginLeft: 10,
  },
});
export default Logo;
