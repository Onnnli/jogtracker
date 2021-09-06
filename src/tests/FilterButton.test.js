import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FilterButton from '../components/buttons/FilterButton/FilterButton';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("changes value when clicked", () => {
  const onChange = jest.fn();
  act(() => {
    render(<FilterButton toggleHandler={onChange} />, container);
  });

  // получаем элемент button и кликаем на него несколько раз
  const button = document.querySelector("button");
  expect(button.innerHTML).toBe("<img src=\"filter.svg\" alt=\"filter\" class=\"filter__image\">");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(button.innerHTML).toBe( "<img src=\"filter.svg\" alt=\"filter\" class=\"filter__image\">");

  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onChange).toHaveBeenCalledTimes(6);
  expect(button.innerHTML).toBe("<img src=\"filter.svg\" alt=\"filter\" class=\"filter__image\">");
});
