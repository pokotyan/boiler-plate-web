export const TEST = Symbol('TEST');

export const test = value => ({
  type: TEST,
  payload: value
});
