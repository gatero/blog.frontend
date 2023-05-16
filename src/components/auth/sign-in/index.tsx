import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import Input from '../../form/input';
import { SignInSchema } from './sign-in.schema';

const { env } = process;

export type TSignInProps = {
  signWithEmailAndPassword: Function;
};

function SignInForm(props: any) {
  const formikOptions = {
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: props.signWithEmailAndPassword,
    validationSchema: SignInSchema,
  };

  console.log('aaa - env: ', env);

  return (
    <Formik {...formikOptions}>
      <Form className="signin-form" noValidate>
        <Input
          id="email"
          icon={faEnvelope}
          type="email"
          name="email"
          label="Email"
          placeholder="name@example.com"
        />

        <Input
          id="password"
          icon={faKey}
          type="password"
          name="password"
          label="Password"
          placeholder="password"
        />

        <Button variant="primary" type="submit" className="w-100">
          entrar
        </Button>
      </Form>
    </Formik>
  );
}

SignInForm.defaultProps = {
  signWithEmailAndPassword: () => false,
};

export default SignInForm;
