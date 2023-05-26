import Input from '@/components/formik/form/input';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { SignInSchema } from './sign-out.schema';

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
          placeholder="name@example.com"
        />

        <Button variant="primary" type="submit" className="w-100" size="lg">
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
