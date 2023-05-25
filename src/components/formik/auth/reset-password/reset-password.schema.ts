import { object, string } from 'yup';

export const ResetPasswordSchema = object().shape({
  email: string()
    .required('el email es requerido')
    .email('el correo debe ser valido'),
});
