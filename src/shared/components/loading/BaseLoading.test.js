import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import BaseLoading from './BaseLoading';

describe('BaseLoading', () => {
  let BaseLoadingCmp;

  beforeAll(() => {
    BaseLoadingCmp = () => <BaseLoading message="loading" />;
  });

  it('should render with props passed ', () => {
    const { getByText } = render(<BaseLoadingCmp />);
    expect(getByText(/loading/)).toBeDefined();
  });
});
