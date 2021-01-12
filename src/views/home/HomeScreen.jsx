import React from 'react';
import { Button } from 'react-native';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { setScreen } from '../../store/actions/screenManagerActions';

@connect(
  null,
  dispatch => ({
    dispatchSetScreen: (screenId) => dispatch(setScreen(screenId)),
  })
)
class HomeScreen extends React.Component {
  handleNewGameButtonClick = () => {
    this.props.dispatchSetScreen('MINESWEEPER');
  }

  render() {
    return (
      <View>
        <Text>Welcome to React Native</Text>
        <Text>Step One</Text>
        <Text>
          Edit App.js to change this screen and turn it
          into your app.
        </Text>
        <Text>See Your Changes</Text>
        <Text>
          Press Cmd + R inside the simulator to reload
          your app’s code.
        </Text>
        <Text >Debug</Text>
        <Text>
          Press Cmd + M or Shake your device to open the
          React Native Debug Menu.
        </Text>
        <Text>Learn</Text>
        <Text>
          Read the docs to discover what to do next:
        </Text>
        <Button
          onPress={this.handleNewGameButtonClick}
          title="New game"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        >
          MINESWEEPER
        </Button>
      </View>
    );
  }
}

export default HomeScreen;
