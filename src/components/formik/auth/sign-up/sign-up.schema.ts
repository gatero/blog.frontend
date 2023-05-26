import {
  containsLowercase,
  containsNumber,
  containsSymbol,
  containsUppercase,
} from '@/constants/regexp';
import { date, object, ref, string } from 'yup';

export const SignUpSchema = object().shape({
  name: string().required('el nombre es requerido'),
  birthdate: date().required('a de nacimiento es requerida'),
  gender: string().required(),
  email: string()
    .required('el correo es requerido')
    .email('el correo debe ser valido'),
  password: string()
    .required('la contraseña es requerida')
    .matches(containsUppercase, 'debe contener letras mayusculas')
    .matches(containsLowercase, 'debe contener letras minusculas')
    .matches(containsNumber, 'debe contener números')
    .matches(containsSymbol, 'debe contener simbolos'),
  repassword: string()
    .required('por favor, vuelve a escribir tu contraseña')
    .oneOf([ref('password')], 'las contraseñas no coinciden'),
});
