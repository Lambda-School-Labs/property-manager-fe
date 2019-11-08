import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import LoginForm from '../../components/LoginForm/Form';

test('should submit the login form', async () => {
  // Arrange

  // Set up a fake handle submit function to replace the real handle submit function
  const handleSubmit = jest.fn();

  //  Set up a test user object which will contain fields matching form to be tested
  const testUser = {
    email: 'testuser@test.com',
    password: 'iamtestingthisform'
  };

  // Get your selectors and render the component you wish to test, pass in any fake functions or props
  const { getByPlaceholderText, getByTestId } = render(
    <LoginForm submit={handleSubmit} />
  );

  // Use your selectors to select the field nodes needed to fill out the form
  const emailNode = getByPlaceholderText('Enter your email address');
  const passwordNode = getByPlaceholderText('Type your password');
  const formNode = getByTestId('form-element');

  // Act

  // Set the value of these nodes to the values from your object
  // emailNode.value = testUser.email;
  fireEvent.change(emailNode, { target: { value: testUser.email } });
  // passwordNode.value = testUser.password;
  fireEvent.change(passwordNode, { target: { value: testUser.password } });

  // Fire off the event by clicking on the submit button
  fireEvent.submit(formNode);

  // Assert
  await wait(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    // expect(handleSubmit).toHaveBeenCalledWith(testUser);
  });
});