import SignInForm from '@/components/auth/sign-in';
import SignInWithSocial from '@/components/auth/sign-with-social';
import {
  TSignInWithEmailAndPasswordFormData,
  TSignInWithSocialFormData,
  signInWithSocial,
  signWithEmailAndPassword,
} from '@/redux/auth/auth.actions';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

type TSignInProps = {
  helloWorld: string;
};

export default function SignIn(props: TSignInProps) {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const auth = useSelector((state: any) => state.auth);

  const handleSignWithEmailAndPassword = (
    formData: TSignInWithEmailAndPasswordFormData,
  ) => {
    try {
      dispatch(signWithEmailAndPassword(formData));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithSocial = (formData: TSignInWithSocialFormData) => {
    try {
      dispatch(signInWithSocial(formData));
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
              <Card.Title as="h1">Iniciar sesión</Card.Title>
              <SignInForm
                signWithEmailAndPassword={handleSignWithEmailAndPassword}
                auth={auth}
              />

              <ul className="my-3 list-unstyled text-end">
                <li>
                  <Link href="/recover-password">recuperar contraseña</Link>
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

export function getStaticProps() {
  return {
    props: {
      helloWorld: 'hello world',
    },
  };
}
