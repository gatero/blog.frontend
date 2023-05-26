import {
  TSignInWithSocialFormData,
  TSignUpWithEmailAndPasswordFormData,
} from '@/components/firebase/firebase.auth.service';
import { useAuth } from '@/components/firebase/firebase.hook';
import SignUpForm from '@/components/formik/auth/sign-up';
import SignInWithSocial from '@/components/formik/auth/sign-with-social';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Card, Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

function SignUp() {
  const router = useRouter();
  const { signUpWithEmailAndPassword, signInWithSocial } = useAuth();

  const handleSignUpWithEmailAndPassword = (
    formData: TSignUpWithEmailAndPasswordFormData,
  ) => {
    try {
      signUpWithEmailAndPassword(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithSocial = (formData: TSignInWithSocialFormData) => {
    try {
      signInWithSocial(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="sign-in">
      <Row>
        <Col className="sign-in-greeting">
          <div>
            <h1 className="display-1 w-100">
              Sign in to <br />
              <b>unlock</b>
              the
              <b>world</b>
            </h1>

            <p>
              Si tienes una cuenta inicia sesión &nbsp;
              <Link href="/sign-up" className="text-decoration-none">
                aquí
              </Link>
            </p>
          </div>
        </Col>

        <Col className="sign-in-auth">
          <Card>
            <Card.Body>
              <Card.Title as="h1">Iniciar sesión</Card.Title>
              <SignUpForm handleSubmit={handleSignUpWithEmailAndPassword} />

              <hr />

              <ul className="my-3 list-unstyled text-end">
                <li>
                  <Link href="/reset-password">recuperar contraseña</Link>
                </li>
              </ul>

              <Card.Title as="h6" className="title-line-through">
                también puedes unirte con
              </Card.Title>

              <SignInWithSocial signInWithSocial={handleSignInWithSocial} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
