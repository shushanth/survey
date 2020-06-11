import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import BaseToast from './BaseToast';

describe('BaseToast', () => {
  it('should render toast container ', () => {
    const { container, getByText } = render(
      <BaseToast id="123" msg="hello world" level="success" offset={3} />
    );
    expect(getByText('hello world')).toBeInTheDocument();
    expect(container.innerHTML).toBe(
      '<div class="toast toast--success"><p class="toast_msg">hello world</p></div>'
    );
  });
});
