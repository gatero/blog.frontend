import { object, string } from 'yup';

export const SignInSchema = object().shape({
  email: string()
    .required('El email es requerido')
    .email('el correo debe ser valido'),
  password: string().required('La contraseña es requerida'),
});
