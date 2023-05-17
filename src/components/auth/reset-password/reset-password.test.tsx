import { fireEvent, render, screen } from '@testing-library/react';
import ResetPasswordForm from '.';

describe('SignInForm', () => {
  describe('[EMAIL_INPUT]', () => {
    describe('ERRORS', () => {
      test('Displays error message when email is empty', async () => {
        render(<ResetPasswordForm />);

        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.blur(emailInput);

        const errorMessage = await screen.findByText('El email es requerido');

        expect(errorMessage).toBeInTheDocument();
      });

      test('Displays error message when email is invalid', async () => {
        render(<ResetPasswordForm />);

        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
        fireEvent.blur(emailInput);

        const errorMessage = await screen.findByText(
          'el correo debe ser valido',
        );

        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
