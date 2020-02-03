import React from 'react';
import TopNavigation from '../../component/TopNavigation/TopNavigation';
// import BottomNavigation from '../../component/bottomNavigation/BottomNavigation';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {Icon} from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Profile from '../Profile/Profile';
import HomePage from '../HomePage/HomePage';
import TaxCheck from '../TaxCheck/TaxCheck';
import Setting from '../Setting/Setting';
import CreateAccount from '../CreateAccount/CreateAccount';

class MainAppPage extends React.Component {
  state = {
    route: '',
  };

  HandleSwitch = () => {
    if (this.state.route == 'Profile') {
      return <Profile />;
    } else if (this.state.route == 'HomePage') {
      return <HomePage />;
    } else if (this.state.route == 'TaxCheck') {
      return <TaxCheck />;
    } else if (this.state.route == 'Setting') {
      return <Setting />;
    } else <CreateAccount />;
  };

  render() {
    return (
      <View style={styles.mainAppContainer}>
        <TopNavigation />
        <ScrollView>{this.HandleSwitch()}</ScrollView>
        <View style={styles.bottomNavigation}>
          <TouchableOpacity
            title="Profile"
            style={styles.icons}
            onPress={() => {
              this.setState({route: 'Profile'});
              console.log(this.state.route);
            }}>
            <Entypo name="user" size={20} color="white" />
            <Text style={styles.iconText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icons}
            onPress={() => {
              this.setState({route: 'HomePage'});
              {
                console.log(this.state.route);
              }
            }}>
            <Octicons name="home" size={20} color="white" />
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icons}
            onPress={() => {
              this.setState({route: 'TaxCheck'});
              console.log(this.state.route);
            }}>
            <MaterialIcons name="money-off" size={20} color="white" />
            <Text style={styles.iconText}>Tax-check</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icons}
            onPress={() => {
              this.setState({route: 'Setting'});
              console.log(this.state.route);
            }}>
            <Ionicon name="md-settings" size={20} color="white" />
            <Text style={styles.iconText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
export default MainAppPage;
