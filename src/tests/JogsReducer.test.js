import { jogsActions } from '../redux/jogs/jogsActions';
import { jogsReducer } from '../redux/jogs/jogsReducer';

it('length of jogs should be incremented', () => {
  let jog = { distance: 1, time: 1, date: '27.10.2020' };

  let action = jogsActions.addJogSuccess(jog);

  let state = {
    jogs: [],
  };

  let newState = jogsReducer(state, action);

  expect(newState.jogs.length).toBe(1);
});


it('length of jogs should be decremented', () => {
  let jogId = 123;

  let action = jogsActions.deleteJogSuccess(jogId);

  let state = {
    jogs: [{id: 123, distance: 1, time: 1, date: '27.10.2020' }],
  };

  let newState = jogsReducer(state, action);

  expect(newState.jogs.length).toBe(0);
});
