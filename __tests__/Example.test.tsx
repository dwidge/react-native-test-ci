import {test, expect} from '@jest/globals';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import React from 'react';
import {Example} from '../components/Example';

test('examples of some things', async () => {
  const screen = render(<Example />);

  const expectedUsername = 'Ada Lovelace';
  fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
  fireEvent.press(screen.getByText('Print Username'));
  const usernameOutput = await waitFor(
    () => screen.getByTestId('printed-username'),
    {timeout: 1000},
  );
  expect(usernameOutput.props.children).toBe(expectedUsername);
  expect(usernameOutput.props.children).not.toBe(expectedUsername + '123');

  await screen.findByText(expectedUsername);

  expect(screen.toJSON()).toMatchSnapshot();
});
