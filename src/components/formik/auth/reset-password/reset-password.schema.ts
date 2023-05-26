import { object, string } from 'yup';

export const ResetPasswordSchema = object().shape({
  email: string()
    .required('el correo electronico es requerido')
    .email('el correo electronico debe ser valido'),
});
