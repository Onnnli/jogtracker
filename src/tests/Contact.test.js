import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Contact from '../containers/Contact';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders main page correctly', () => {
  act(() => {
    render(
      <Provider store={store}>
        <Contact />
      </Provider>,
      container
    );
  });

  expect(container.textContent).toBe('Nothing is thereLogout');
});
