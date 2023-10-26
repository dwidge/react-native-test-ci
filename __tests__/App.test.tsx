import {test, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';

import React from 'react';
import App from '../App';

test('renders correctly', async () => {
  const app = render(<App />);
  expect(app.toJSON()).toMatchSnapshot();
  expect(await app.findByText('Layout')).toBeDefined();
  await expect(app.findByText('Nothing123')).rejects.toThrow();
});
