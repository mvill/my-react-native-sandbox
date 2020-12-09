import React from 'react';
import { Text, View } from 'react-native';
import Grid from './Grid';

const styleScreen = {
  flex: 1,
  backgroundColor: 'red',
};

const styleHeader = {
  backgroundColor: 'yellow',
};

const styleContent = {
  backgroundColor: '#FFDDDD',
  flex: 1,
};

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

function initGrid(width, height, nbMines) {
  // init grid
  const grid = [];
  for (let i = 0; i < height; i += 1) {
    const line = [];
    for (let j = 0; j < width; j += 1) {
      line.push({
        mine: false,
        nbMinesAround: 0,
      });
    }
    grid.push(line);
  }

  // init mines
  for (let i = 0; i < nbMines; i += 1) {
    let done = false;
    while (!done) {
      const randomX = getRandomInt(width);
      const randomY = getRandomInt(height);
      const randomCell = grid[randomY][randomX];
      if (!randomCell.mine) {
        randomCell.mine = true;
        done = true;
      }
    }
  }

  // nbMinesAround
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let nbMinesAround = 0;
      if (y > 0) {
        // up left
        if (x > 0) {
          nbMinesAround += grid[y - 1][x - 1].mine ? 1 : 0;
        }

        // up
        nbMinesAround += grid[y - 1][x].mine ? 1 : 0;

        // up right
        if (x < width - 1) {
          nbMinesAround += grid[y - 1][x + 1].mine ? 1 : 0;
        }
      }

      // left
      if (x > 0) {
        nbMinesAround += grid[y][x - 1].mine ? 1 : 0;
      }
      // right
      if (x < width - 1) {
        nbMinesAround += grid[y][x + 1].mine ? 1 : 0;
      }

      if (y < height - 1) {
        // down left
        if (x > 0) {
          nbMinesAround += grid[y + 1][x - 1].mine ? 1 : 0;
        }

        // down
        nbMinesAround += grid[y + 1][x].mine ? 1 : 0;

        // down right
        if (x < width - 1) {
          nbMinesAround += grid[y + 1][x + 1].mine ? 1 : 0;
        }
      }

      grid[y][x].nbMinesAround = nbMinesAround;
    }
  }

  return grid;
}
class MinesweeperScreen extends React.Component {
  render() {


    const height = 9;
    const width = 9;
    const nbMines = 10;
    const grid = initGrid(width, height, nbMines);


    return (
      <View style={styleScreen}>
        <View style={styleHeader}><Text>Header</Text></View>
        <View style={styleContent}>
          <Text>Grid</Text>
          <Grid grid={grid} />
        </View>
      </View>
    );
  }
}

export default MinesweeperScreen;
