import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import BaseCheckbox from './BaseCheckbox';

describe('BaseCheckbox', () => {
  it('should render toast container ', () => {
    const { container, getByText } = render(
      <BaseCheckbox id="test" label="test" selected={false} />
    );
    expect(getByText('test')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      `<div class="checkbox_container"><input type="checkbox" aria-label="checkbox-element" id="test"><label for="test"><span class="label_title">test</span></label></div>`
    );
  });
});
