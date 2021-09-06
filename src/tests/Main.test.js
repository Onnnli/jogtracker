import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Main from '../containers/Main';

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
        <Main />
      </Provider>,
      container
    );
  });

  expect(container.textContent).toBe('Let me in');
});
