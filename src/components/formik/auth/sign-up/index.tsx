import { TSignUpWithEmailAndPasswordFormData } from '@/components/firebase/firebase.auth.service';
import Input from '@/components/formik/form/input';
import Select, { TSelectOption } from '@/components/formik/form/select';
import {
  faCalendar,
  faEnvelope,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faGenderless, faKey } from '@fortawesome/free-solid-svg-icons';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { SignUpSchema } from './sign-up.schema';

export type TSignUpFormData = {
  name: string;
  birthdate: string;
  gender: string;
  email: string;
  password: string;
  repassword: string;
};

const gendersOptions: TSelectOption[] = [
  {
    value: 'GENDER_FEMALE',
    label: 'femenino',
  },
  {
    value: 'GENDER_MALE',
    label: 'masculino',
  },
  {
    value: 'GENDER_OTHER',
    label: 'otro',
  },
];

export type TSignUpProps = {
  handleSubmit: (formData: TSignUpWithEmailAndPasswordFormData) => void;
};

const defaultValues: TSignUpProps = {
  handleSubmit: () => true,
};

const formikOptions = (
  handleSubmit: (formData: TSignUpWithEmailAndPasswordFormData) => void,
) => ({
  initialValues: {
    name: '',
    birthdate: '',
    gender: '',
    email: '',
    password: '',
    repassword: '',
  },
  onSubmit: handleSubmit,
  validationSchema: SignUpSchema,
});

const SignUpForm = (props: TSignUpProps = defaultValues) => (
  <Formik {...formikOptions(props.handleSubmit)}>
    <Form className="sign-in-form" noValidate>
      <Input
        testId="name"
        icon={faUser}
        type="name"
        name="name"
        label="nombre"
        placeholder="name"
      />

      <div className="row">
        <div className="col-6">
          <Input
            testId="birthdate"
            icon={faCalendar}
            type="date"
            name="birthdate"
            label="birthdate"
            placeholder="fecha de nacimiento"
          />
        </div>
        <div className="col-6">
          <Select
            testId="gender"
            icon={faGenderless}
            name="gender"
            placeholder="genero"
            options={gendersOptions}
          />
        </div>
      </div>

      <Input
        testId="email"
        icon={faEnvelope}
        type="email"
        name="email"
        label="email"
        placeholder="name@example.com"
      />

      <Input
        testId="password"
        icon={faKey}
        type="password"
        name="password"
        label="password"
        placeholder="contraseña"
      />

      <Input
        testId="repassword"
        icon={faKey}
        type="password"
        name="repassword"
        label="repassword"
        placeholder="repetir contraseña"
      />

      <Button variant="primary" type="submit" className="w-100">
        entrar
      </Button>
    </Form>
  </Formik>
);

export default SignUpForm;
