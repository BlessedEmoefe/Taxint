import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

class Input extends Component {
  state = {};

  render() {
    return (
      <View>
        <TextInput
          style={styles.textinput}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#A55967',
    paddingLeft: 4,
    width: '100%',
  },
});
export default Input;
