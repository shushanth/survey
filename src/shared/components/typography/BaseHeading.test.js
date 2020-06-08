import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import BaseHeading from './BaseHeading';

describe('BaseHeading', () => {
  it('should render with h2 when prop level is h2 ', () => {
    const { container, getByText } = render(
      <BaseHeading level="h2">hello</BaseHeading>
    );
    expect(getByText('hello')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      '<h2 class="headings headings-theme--default">hello</h2>'
    );
  });
  it('should render with h4 when prop level is h4 ', () => {
    const { container, getByText } = render(
      <BaseHeading level="h4">well jsd</BaseHeading>
    );
    expect(getByText('well jsd')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      '<h4 class="headings headings-theme--default">well jsd</h4>'
    );
  });
});
