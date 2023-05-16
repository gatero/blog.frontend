import Input from '@/components/form/input';
import { TRecoverPasswordFormData } from '@/redux/auth/auth.actions';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { RecoverPasswordSchema } from './recover-password.schema';

export type TRecoverPasswordProps = {
  recoverPassword(formData: TRecoverPasswordFormData): any;
};

function RecoverPasswordForm(props: TRecoverPasswordProps) {
  const formikOptions = {
    initialValues: {
      email: '',
    },
    onSubmit: props.recoverPassword,
    validationSchema: RecoverPasswordSchema,
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

        <Button variant="primary" type="submit" className="w-100" size="lg">
          enviar
        </Button>
      </Form>
    </Formik>
  );
}

RecoverPasswordForm.defaultProps = {
  recoverPassword: () => false,
};

export default RecoverPasswordForm;
