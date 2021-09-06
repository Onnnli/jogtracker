export const validateJogForm = values => {
  const errors = {};
  const isValidTime = new RegExp('^\\d+$').test(values.time);
  const isValidDistance = new RegExp('^\\d+$').test(values.distance);

  if (!values.distance) {
    errors.distance = 'Required';
  } else if (!isValidDistance) {
    errors.distance = 'Not valid distance';
  }

  if (!values.date) {
    errors.date = 'Required';
  }

  if (!values.time) {
    errors.time = 'Required';
  } else if (!isValidTime) {
    errors.time = 'Not valid time';
  }

  return errors;
};
