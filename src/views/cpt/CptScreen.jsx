import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { increment } from '../../store/actions/cptScreenActions';

@connect(
  (state) => ({
    cpt: state.cptScreen.cpt,
  }),
  (dispatch) => ({
    dispatchIncrement: () => dispatch(increment())
  }),
)
export default class CptScreen extends React.Component {

  handleOnPress = () => {
    this.props.dispatchIncrement();
  }

  render() {
    return (
      <View>
        <Text>cptScreen</Text>
        <Text>{this.props.cpt}</Text>
        <Button
          onPress={this.handleOnPress}
          title="Increment"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
