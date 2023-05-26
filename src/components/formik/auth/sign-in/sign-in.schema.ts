import { object, string } from 'yup';

export const SignInSchema = object().shape({
  email: string()
    .required('el correo electronico es requerido')
    .email('el correo electronico debe ser valido'),
  password: string().required('la contraseña es requerida'),
});
