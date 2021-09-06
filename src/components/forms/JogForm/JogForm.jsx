import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

import CustomDatePicker from '../../fields/CustomDatePicker/CustomDatePicker';
import Button from '../../buttons/Button';
import { jogsActions } from '../../../redux/jogs/jogsActions';
import { validateJogForm } from '../../../validation/validateJogForm';
import FormField from '../../fields/FormField/FormField';

import styles from './JogForm.module.css';
import fieldStyle from '../../fields/FormField/FormField.module.css';

const JogForm = ({ onClose, updateValues }) => {
  const dispatch = useDispatch();

  const submitHandler = useCallback(
    values => {
      if (updateValues) {
        dispatch(
          jogsActions.updateJog({
            ...updateValues,
            ...values,
          })
        );
      } else {
        dispatch(jogsActions.addJog(values));
      }
      onClose();
    },
    [dispatch, updateValues, onClose]
  );

  const initialValues = updateValues
    ? { ...updateValues }
    : { date: '', time: '', distance: '' };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={submitHandler}
      validate={validateJogForm}
    >
      {({ handleSubmit, ...props }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Field name="distance">
            {({ input, meta }) => (
              <div className={styles.form__item}>
                <FormField label="Distance" {...input} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="time">
            {({ input, meta }) => (
              <div className={styles.form__item}>
                <FormField label="Time" {...input} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="date">
            {({ input, meta }) => (
              <div className={styles.form__item}>
                <CustomDatePicker
                  label="Date"
                  className={fieldStyle.field}
                  {...input}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Button type="submit" className={styles.button__submit}>
            Save
          </Button>
        </form>
      )}
    </Form>
  );
};

export default JogForm;

JogForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  updateValues: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.string,
    distance: PropTypes.number,
    time: PropTypes.number,
    date: PropTypes.number,
  }),
};
