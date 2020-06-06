import React from 'react';
import { render } from '@testing-library/react';

import BaseLayout from './BaseLayout';

describe('BaseLayout', () => {
  let BaseLayoutCmp;

  beforeAll(() => {
    BaseLayoutCmp = () => <BaseLayout children="header" />;
  });

  it('should render with props passed ', () => {
    const { container, getByText } = render(<BaseLayoutCmp />);
    expect(container).toBeDefined();
    expect(getByText('header')).toBeDefined();
  });

  it('should have respective header and content layouts', () => {
    const { container } = render(<BaseLayoutCmp />);
    expect(container.querySelector('.layout_container')).toBeDefined();
    expect(container.querySelector('.header_container')).toBeDefined();
    expect(container.querySelector('.logo_container')).toBeDefined();
    expect(container.querySelector('.login_btn_container')).toBeDefined();
    expect(container.querySelector('.button_container')).toBeDefined();
    expect(container.querySelector('.content_container')).toBeDefined();
  });
});
