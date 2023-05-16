import { object, string } from 'yup';

export const RecoverPasswordSchema = object().shape({
  email: string()
    .required('el email es requerido')
    .email('el correo debe ser valido'),
});
