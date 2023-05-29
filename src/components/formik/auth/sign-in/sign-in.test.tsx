import { fireEvent, render, screen } from '@testing-library/react';
import SignInForm from '.';

describe('SignInForm', () => {
  describe('[EMAIL_INPUT]', () => {
    describe('ERRORS', () => {
      test('Displays error message when email is empty', async () => {
        render(<SignInForm handleSubmit={() => false} />);

        const input = screen.getByTestId('email');
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.blur(input);

        const errorMessage = await screen.findByText(
          'el correo electronico es requerido',
        );

        expect(errorMessage).toBeInTheDocument();
      });

      test('Displays error message when email is invalid', async () => {
        render(<SignInForm handleSubmit={() => false} />);

        const input = screen.getByTestId('email');
        fireEvent.change(input, { target: { value: 'invalid' } });
        fireEvent.blur(input);

        const errorMessage = await screen.findByText(
          'el correo electronico debe ser valido',
        );

        expect(errorMessage).toBeInTheDocument();
      });
    });
  });

  describe('[PASSWORD_INPUT]', () => {
    describe('ERRORS', () => {
      test('Displays error message when password is empty', async () => {
        render(<SignInForm handleSubmit={() => false} />);

        const input = screen.getByTestId('password');
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.blur(input);

        const errorMessage = await screen.findByText(
          'la contraseña es requerida',
        );

        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
