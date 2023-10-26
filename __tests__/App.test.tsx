import {test, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';

import React from 'react';
import App from '../App';

test('renders correctly', () => {
  const app = render(<App />);
  expect(app.toJSON()).toMatchSnapshot();
  const element = app.getByText('Layout');
  expect(element).toBeDefined();
});
