import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import BaseHeader from './BaseHeader';

describe('BaseHeader', () => {
  let BaseHeaderCmp;

  beforeAll(() => {
    BaseHeaderCmp = () => <BaseHeader title="surveys" />;
  });

  it('should render with props passed ', () => {
    const { container } = render(<BaseHeaderCmp />);
    expect(container).toBeDefined();
    expect(container.firstChild).toHaveClass('header_container');
    expect(container.querySelector('.header_container')).toBeDefined();
  });
});
