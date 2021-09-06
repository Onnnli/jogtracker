import { createSelector } from 'reselect';

const jogsSelector = state => state.jogs;

export const jogsSelect = createSelector(jogsSelector, item => item.jogs);

export const visibleFilterSelect = createSelector(
  jogsSelector,
  item => item.activeFilter
);

const propsSelect = (state, props) => props;

export const filterJogsSelect = createSelector(
  jogsSelector,
  propsSelect,
  (state, date) => {
    return state.jogs
      .filter(jog => jog.date >= date.start && jog.date <= date.end)
      .sort((a, b) => b.date - a.date);
  }
);

export const sortDateJogsSelect = createSelector(jogsSelector, jogsState => {
  if (!jogsState.jogs.length) {
    return { end: Date.now() / 1000, start: Date.now() / 1000 };
  }

  const sort = jogsState.jogs.sort((a, b) => b.date - a.date);
  return { end: sort[0].date, start: sort[sort.length - 1].date };
});
