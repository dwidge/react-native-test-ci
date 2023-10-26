import {jest, test, expect} from '@jest/globals';
import {render, fireEvent} from '@testing-library/react-native';

import React from 'react';
import {Example} from '../components/Example';

test('examples of some things', async () => {
  const expectedUsername = 'Ada Lovelace';

  const screen = render(<Example />);

  fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
  fireEvent.press(screen.getByText('Print Username'));

  // // Using `findBy` query to wait for asynchronous operation to finish
  const usernameOutput = await screen.findByTestId('printed-username');

  expect(usernameOutput.props.children).toBe(expectedUsername);

  expect(screen.toJSON()).toMatchSnapshot();
});
