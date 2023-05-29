import { fireEvent, render, screen } from '@testing-library/react';
import SignUpForm from '.';

describe('SignInForm', () => {
  describe('[NAME INPUT]', () => {
    test('Displays error message when name is empty', async () => {
      render(<SignUpForm handleSubmit={() => false} />);

      const input = screen.getByTestId('name');
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);

      const errorMessage = await screen.findByText('el nombre es requerido');

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe('[BIRTHDATE INPUT]', () => {
    test('Displays error message when birthdate empty', async () => {
      render(<SignUpForm handleSubmit={() => false} />);

      const input = screen.getByTestId('birthdate');
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);

      const errorMessage = await screen.findByText(
        'la fecha de nacimiento es requerida',
      );

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe('[GENDER INPUT]', () => {
    test('Displays error message when gender empty', async () => {
      render(<SignUpForm handleSubmit={() => false} />);

      const input = screen.getByTestId('gender');
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);

      const errorMessage = await screen.findByText('selecciona un genero');

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe('[EMAIL INPUT]', () => {
    test('Displays error message when email is empty', async () => {
      render(<SignUpForm handleSubmit={() => false} />);

      const input = screen.getByTestId('email');
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);

      const errorMessage = await screen.findByText('el correo es requerido');

      expect(errorMessage).toBeInTheDocument();
    });

    test('Displays error message when email is invalid', async () => {
      render(<SignUpForm handleSubmit={() => false} />);

      const input = screen.getByTestId('email');
      fireEvent.change(input, { target: { value: 'invalid' } });
      fireEvent.blur(input);

      const errorMessage = await screen.findByText('el correo debe ser valido');

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe('[PASSWORD INPUT]', () => {
    test('Displays error message when password is empty', async () => {
      render(<SignUpForm handleSubmit={() => false} />);

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
