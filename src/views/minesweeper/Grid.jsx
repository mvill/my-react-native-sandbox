/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { View, Text } from 'react-native';

const COLOR_MAP = {
  0: 'gray',
  1: 'blue',
  2: 'green',
  3: 'red',
  4: 'purple',
  5: 'purple',
  6: 'purple',
  7: 'purple',
  8: 'purple',
};

const styleRow = {
  flexDirection: 'row',
};

const styleCell = {
  height: 20,
  width: 20,
  borderColor: '#000000',
  borderWidth: 1,
  textAlign: 'center',
  color: 'red',
  alignItems: 'center',
};

class Grid extends React.Component {

  /*
  renderCell(x, y) {
    const cell = grid[y][x];
    const { revealed, flagged } = infoGrid[y][x];
    return (
      <td
        key={`cell-${x}-${y}`}
        style={{
        }}
        onContextMenu={onContextMenu}
        onMouseUp={(evt) => onMouseUp(evt, x, y)}
      >
        {
          revealed ? (
            <>
              {cell.mine && '*'}
              {!cell.mine && cell.nbMinesAround}
            </>
          ) : (
              flagged && 'P'
            )
        }
      </td>
    )
  }
  */

  getCellColor(cell) {
    if (cell.mine) {
      return 'black';
    }
    return COLOR_MAP[cell.nbMinesAround];
  }

  renderCell(cell) {
    const cellColor = this.getCellColor(cell);
    return (
      <View
        style={
          {
            ...styleCell,
          }
        }
      >
        <Text style={{ color: cellColor }}>
          {cell.mine && '*'}
          {!cell.mine && cell.nbMinesAround}
        </Text>
      </View>
    );
  }

  renderRow(row, rowIdx) {
    return (
      <View style={styleRow} key={`row-${rowIdx}`}>
        {row.map(cell => this.renderCell(cell))}
      </View>
    )
  }

  render() {
    const { grid } = this.props;
    return (
      <View>
        {grid.map((row, rowIdx) => this.renderRow(row, rowIdx))}
      </View>
    );
  }
}

export default Grid;
