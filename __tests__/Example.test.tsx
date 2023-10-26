import {test, expect} from '@jest/globals';
import {render, fireEvent} from '@testing-library/react-native';

import React from 'react';
import {Example} from '../components/Example';

test('examples of some things', async () => {
  const expectedUsername = 'Ada Lovelace';

  const screen = render(<Example />);

  // fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
  // fireEvent.press(screen.getByText('Print Username'));

  const usernameOutput = await screen.findByTestId(
    'printed-username',
    {},
    {
      timeout: 1000,
    },
  );
  expect(usernameOutput.props.children).not.toBe(expectedUsername);
  expect(usernameOutput.props.children).not.toBe(expectedUsername + '123');

  expect(screen.toJSON()).toMatchSnapshot();
});
