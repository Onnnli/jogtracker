import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Contact from '../containers/Contact';
import Info from '../containers/Info';

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

it('renders info page correctly', () => {
  act(() => {
    render(
      <Provider store={store}>
        <Info />
      </Provider>,
      container
    );
  });
  const title = document.querySelector('h2');
  expect(title.innerHTML).toBe("INFO");
});
