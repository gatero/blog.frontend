import { fireEvent, render, screen } from '@testing-library/react';
import SignUpForm from '.';

describe('SignInForm', () => {
  describe('[EMAIL_INPUT]', () => {
    describe('ERRORS', () => {
      test('Displays error message when email is empty', async () => {
        render(<SignUpForm handleSubmit={() => false} />);

        const emailInput = screen.getByTestId('email');
        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.blur(emailInput);

        const errorMessage = await screen.findByText('el correo es requerido');

        expect(errorMessage).toBeInTheDocument();
      });

      test('Displays error message when email is invalid', async () => {
        render(<SignUpForm handleSubmit={() => false} />);

        const emailInput = screen.getByTestId('email');
        fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
        fireEvent.blur(emailInput);

        const errorMessage = await screen.findByText(
          'el correo debe ser valido',
        );

        expect(errorMessage).toBeInTheDocument();
      });
    });
  });

  describe('[PASSWORD_INPUT]', () => {
    describe('ERRORS', () => {
      test('Displays error message when password is empty', async () => {
        render(<SignUpForm handleSubmit={() => false} />);

        const passwordInput = screen.getByTestId('password');
        fireEvent.change(passwordInput, { target: { value: '' } });
        fireEvent.blur(passwordInput);

        const errorMessage = await screen.findByText(
          'la contraseña es requerida',
        );

        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
