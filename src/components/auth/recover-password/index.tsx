import Input from '@/components/form/input';
import { TRecoverPasswordFormData } from '@/firebase/firebase.auth';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { RecoverPasswordSchema } from './recover-password.schema';

export type TRecoverPasswordProps = {
  handleSubmit: (formData: TRecoverPasswordFormData) => any;
};

const defaultValues: TRecoverPasswordProps = {
  handleSubmit: () => false,
};

const formikOptions = (
  handleSubmit: (formData: TRecoverPasswordFormData) => void,
) => ({
  initialValues: {
    email: '',
  },
  onSubmit: handleSubmit,
  validationSchema: RecoverPasswordSchema,
});

const RecoverPasswordForm = (props: TRecoverPasswordProps = defaultValues) => (
  <Formik {...formikOptions(props.handleSubmit)}>
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

export default RecoverPasswordForm;
