import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import BaseButton from './BaseButton';

describe('BaseButton', () => {
  let BaseButtonCmp;

  beforeAll(() => {
    BaseButtonCmp = () => (
      <BaseButton title="LOG IN" size="default" level="primary" />
    );
  });

  it('should render with props passed ', () => {
    const { getByText } = render(<BaseButtonCmp />);
    expect(getByText(/LOG IN/)).toBeDefined();
  });

  it('should have styles and content as per respective props', () => {
    const { container } = render(<BaseButtonCmp />);
    expect(container.firstChild).toHaveClass('button_container');
    expect(container.querySelector('button')).toBeDefined();
    expect(container.querySelector('button')).toHaveClass(
      'btn btn_level--primary btn_size--default'
    );
    expect(container.querySelector('button').innerHTML).toBeDefined();
    expect(container.querySelector('button').innerHTML).toEqual('LOG IN');
  });
});
