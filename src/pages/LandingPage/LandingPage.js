import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class LandingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the first Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default LandingPage;
