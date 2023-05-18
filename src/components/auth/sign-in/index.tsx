import { TSignInWithEmailAndPasswordFormData } from '@/firebase/firebase.auth';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import Input from '../../form/input';
import { SignInSchema } from './sign-in.schema';

const { env } = process;

export type TSignInProps = {
  handleSubmit: (formData: TSignInWithEmailAndPasswordFormData) => void;
};

const defaultValues: TSignInProps = {
  handleSubmit: () => false,
};

const formikOptions = (
  handleSubmit: (formData: TSignInWithEmailAndPasswordFormData) => void,
) => ({
  initialValues: {
    email: '',
    password: '',
    rememberMe: false,
  },
  onSubmit: handleSubmit,
  validationSchema: SignInSchema,
});

const SignInForm = (props: TSignInProps = defaultValues) => (
  <Formik {...formikOptions(props.handleSubmit)}>
    <Form className="signin-form" noValidate>
      <Input
        icon={faEnvelope}
        type="email"
        name="email"
        label="Email"
        placeholder="name@example.com"
      />

      <Input
        icon={faKey}
        type="password"
        name="password"
        label="Password"
        placeholder="password"
        autoComplete="false"
      />

      <Button variant="primary" type="submit" className="w-100">
        entrar
      </Button>
    </Form>
  </Formik>
);

export default SignInForm;
