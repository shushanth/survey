import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import BaseHeading from './BaseHeading';

describe('BaseHeading', () => {
  it('should render with h1 when prop level is h1 ', () => {
    const { container, getByText } = render(
      <BaseHeading level="h1">quick</BaseHeading>
    );
    expect(getByText('quick')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      '<h1 class="headings heading-h1">quick</h1>'
    );
  });
  it('should render with h2 when prop level is h2 ', () => {
    const { container, getByText } = render(
      <BaseHeading level="h2">hello</BaseHeading>
    );
    expect(getByText('hello')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      '<h2 class="headings heading-h2">hello</h2>'
    );
  });
  it('should render with h3 when prop level is h3 ', () => {
    const { container, getByText } = render(
      <BaseHeading level="h3">rest</BaseHeading>
    );
    expect(getByText('rest')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      '<h3 class="headings heading-h3">rest</h3>'
    );
  });
  it('should render with h4 when prop level is h4 ', () => {
    const { container, getByText } = render(
      <BaseHeading level="h4">well jsd</BaseHeading>
    );
    expect(getByText('well jsd')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      '<h4 class="headings heading-h4">well jsd</h4>'
    );
  });
  it('should render with h1 when prop level is h5 ', () => {
    const { container, getByText } = render(
      <BaseHeading level="h5">new year recipers</BaseHeading>
    );
    expect(getByText('new year recipers')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      '<h5 class="headings heading-h5">new year recipers</h5>'
    );
  });
  it('should render with h1 when prop level is h6 ', () => {
    const { container, getByText } = render(
      <BaseHeading level="h6">force</BaseHeading>
    );
    expect(getByText('force')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      '<h6 class="headings heading-h6">force</h6>'
    );
  });
});
