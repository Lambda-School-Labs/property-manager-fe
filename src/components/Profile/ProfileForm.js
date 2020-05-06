/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import { jsx } from '@emotion/core';
import FormErrors from '../../helpers/FormErrors';
import MuiModal from '../UI/MuiModal';
import Loading from '../UI/Loading';
import profileValues from './ProfileFormValues';
import { profileValidation } from './ProfileValidation';
import SubmitButton from '../Buttons/SubmitButton';

export default function ProfileForm({
  submit,
  loading,
  isSubmitting,
  opened,
  close
}) {
  const initialValues = { firstName: '', lastName: '', phone: '' };

  if (loading || isSubmitting) {
    return <Loading />;
  }

  return (
    <MuiModal open={opened} close={close}>
      <div className="form-card">
        <h2>Update User Info</h2>
        <Formik
          enableReinitialize
          validationSchema={profileValidation}
          initialValues={initialValues}
          onSubmit={values => {
            submit(values);
          }}
        >
          {({ errors, isSubmitting, touched }) => (
            <Form data-testid="form-element">
              {profileValues.map(
                ({ className, htmlFor, html, placeholder, name, type }) => (
                  <div className={className}>
                    <label htmlFor={htmlFor}>{html}</label>
                    <Field placeholder={placeholder} name={name} type={type} />
                    <FormErrors
                      touched={touched && touched[name]}
                      message={errors && errors[name]}
                    />
                  </div>
                )
              )}
              <SubmitButton disabled={isSubmitting} />
            </Form>
          )}
        </Formik>
      </div>
    </MuiModal>
  );
}
