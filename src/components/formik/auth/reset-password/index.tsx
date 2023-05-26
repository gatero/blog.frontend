import { TResetPasswordFormData } from '@/components/firebase/firebase.auth.service';
import Input from '@/components/formik/form/input';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { ResetPasswordSchema } from './reset-password.schema';

export type TResetPasswordProps = {
  handleSubmit: (formData: TResetPasswordFormData) => any;
};

const defaultValues: TResetPasswordProps = {
  handleSubmit: () => false,
};

const formikOptions = (
  handleSubmit: (formData: TResetPasswordFormData) => void,
) => ({
  initialValues: {
    email: '',
  },
  onSubmit: handleSubmit,
  validationSchema: ResetPasswordSchema,
});

const ResetPasswordForm = (
  props: TResetPasswordProps = defaultValues,
): React.ReactElement => (
  <Formik {...formikOptions(props.handleSubmit)}>
    <Form className="signin-form" noValidate>
      <Input
        testId="email"
        icon={faEnvelope}
        type="email"
        name="email"
        label="Email"
        placeholder="name@example.com"
      />

      <Button variant="primary" type="submit" className="w-100">
        enviar
      </Button>
    </Form>
  </Formik>
);

export default ResetPasswordForm;
