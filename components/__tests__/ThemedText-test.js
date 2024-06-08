import * as React from 'react';
import { render } from '@testing-library/react';

import { ThemedText } from '../ThemedText';

it(`renders correctly`, () => {
  const { getByText } = render(<ThemedText>Snapshot test!</ThemedText>);
  // Assert the content
  expect(getByText('Snapshot test!')).toBeInTheDocument();
});
