import React, { Component } from 'react';
import { Text } from 'react-native';

class Cat extends Component {
  render() {
    return (
    <Text>Hello, I am your cat, {this.props.name}!</Text>
    );
  }
}

export default Cat;