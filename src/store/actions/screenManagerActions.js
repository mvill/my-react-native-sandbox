export const SCREEN_MANAGER_SET_SCREEN = 'SCREEN_MANAGER_SET_SCREEN';

export const setScreen = (screenId) => ({
  type: SCREEN_MANAGER_SET_SCREEN,
  screenId,
});
