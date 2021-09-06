import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Jogs from '../containers/Jogs';

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

it('renders jogs without jogsArray page correctly', () => {
  act(() => {
    render(
      <Provider store={store}>
        <Jogs />
      </Provider>,
      container
    );
  });

  expect(container.textContent).toBe('Nothing is thereCreate your jog first');
});
