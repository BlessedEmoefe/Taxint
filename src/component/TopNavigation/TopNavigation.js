import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../logo/Logo';

const TopNavigation = ({headerContent}) => {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.container}>
        <Logo height={40} width={40} borderRadius={7} />
        <Text style={styles.topNavigationText}>{headerContent}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#A55967',
  },
  container: {
    // backgroundColor: 'red',
    display: 'flex',
    width: '80%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },
  topNavigationText: {
    color: '#A55967',
    fontSize: 25,
    marginLeft: '25%',
  },
});
export default TopNavigation;
