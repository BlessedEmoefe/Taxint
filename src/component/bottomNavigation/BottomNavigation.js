import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {Icon} from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const BottomNavigation = ({navigation}) => {
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity
        title="Profile"
        style={styles.icons}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Entypo name="user" size={20} color="white" />
        <Text style={styles.iconText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icons}
        onPress={() => navigation.navigate('HomePage')}>
        <Octicons name="home" size={20} color="white" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icons}
        onPress={() => navigation.navigate('TaxCheck')}>
        <MaterialIcons name="money-off" size={20} color="white" />
        <Text style={styles.iconText}>Tax-check</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icons}
        onPress={() => navigation.navigate('Setting')}>
        <Ionicon name="md-settings" size={20} color="white" />
        <Text style={styles.iconText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomNavigation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#A55967',
    borderTopWidth: 1,
    backgroundColor: '#1E1113',
    paddingTop: 6,
    paddingBottom: 6,
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 13,
  },
});
export default BottomNavigation;
