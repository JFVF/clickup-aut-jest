const functions = require('../e2e/functions');

test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 NOT equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Add 2 + 2 NOT equal 4', () => {
  expect(functions.isNull()).null;
});

test('User should be juan perez', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'juan',
    lastName: 'perez'
  });
});
//Regex
  test('There is no I in team', () => {
    expect('teami').not.toMatch(/I/);
  });
