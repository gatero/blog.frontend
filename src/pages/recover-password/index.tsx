import RecoverPasswordForm from '@/components/auth/recover-password';
import SignInWithSocial from '@/components/auth/sign-with-social';
import {
  TRecoverPasswordFormData,
  TSignInWithSocialFormData,
} from '@/firebase/firebase.auth';
import { useAuth } from '@/firebase/firebase.hook';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Card, Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

type TRecoverPasswordProps = {};

export default function RecoverPassword(props: TRecoverPasswordProps) {
  const { sendPasswordResetEmail, signInWithSocial } = useAuth();

  // TODO: use firebase name
  const handleRecoverPassword = (formData: TRecoverPasswordFormData) => {
    try {
      sendPasswordResetEmail(formData);
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
              Si no tienes una cuenta &nbsp;
              <Link href="/sign-up" className="text-decoration-none">
                registrate aquí
              </Link>
            </p>
          </div>
        </Col>

        <Col className="sign-in-auth">
          <Card>
            <Card.Body>
              <Card.Title as="h1">recuperar contraseña</Card.Title>
              <RecoverPasswordForm recoverPassword={handleRecoverPassword} />

              <div className="text-end my-4">
                <Link href="/sign-in" className="text-decoration-none">
                  inicia sesión
                </Link>
                &nbsp;|&nbsp;
                <Link href="/sign-up" className="text-decoration-none">
                  registrate
                </Link>
              </div>

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

export function getStaticProps() {
  return {
    props: {},
  };
}
