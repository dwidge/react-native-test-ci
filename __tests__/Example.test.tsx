import {jest, test, expect} from '@jest/globals';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
// jest.useRealTimers();

import React from 'react';
import {Example} from '../components/Example';

test('examples of some things', async () => {
  // jest.useFakeTimers();
  // jest.advanceTimersByTime(2000);
  const expectedUsername = 'Ada Lovelace';

  const screen = render(<Example />);

  await Promise.resolve(true);
  const ee = await new Promise(r => setTimeout(() => r(true), 300));
  expect(ee).toBe(true);

  fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
  fireEvent.press(screen.getByText('Print Username'));
  // const usernameOutput = await waitFor(
  //   () => screen.getByTestId('printed-username'),
  //   {timeout: 1000},
  // );
  // expect(usernameOutput.props.children).toBe(expectedUsername);
  // expect(usernameOutput.props.children).not.toBe(expectedUsername + '123');

  expect(screen.toJSON()).toMatchSnapshot();
});
