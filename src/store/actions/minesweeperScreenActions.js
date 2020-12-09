export const MINESWEEPER_INIT_INFO_GRID = 'MINESWEEPER_INIT_INFO_GRID';
export const MINESWEEPER_SET_INFO_CELL = 'MINESWEEPER_SET_INFO_CELL';

export const initInfoGrid = (width, height) => ({
  type: MINESWEEPER_INIT_INFO_GRID,
  width,
  height,
});

export const setInfoCell = (x, y, infoCell) => ({
  type: MINESWEEPER_SET_INFO_CELL,
  x,
  y,
  infoCell,
});
