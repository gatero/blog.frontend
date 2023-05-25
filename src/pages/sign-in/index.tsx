import SignInForm from '@/components/auth/sign-in';
import SignInWithSocial from '@/components/auth/sign-with-social';
import {
  TSignInWithEmailAndPasswordFormData,
  TSignInWithSocialFormData,
} from '@/firebase/firebase.auth.service';
import { useAuth } from '@/firebase/firebase.hook';
import Link from 'next/link';
import { Card, Col, Container, Row } from 'react-bootstrap';
import createProfile from './sign-in.hook';

export default function SignIn() {
  const { signInWithEmailAndPassword, signInWithSocial } = useAuth();

  const handleSignInWithEmailAndPassword = async (
    formData: TSignInWithEmailAndPasswordFormData,
  ) => {
    try {
      await signInWithEmailAndPassword(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithSocial = async (
    formData: TSignInWithSocialFormData,
  ) => {
    try {
      // - INFO
      //  when part of a promise has a popup as part
      // of it's transaction is necessary use implicit awatt,
      // with await, the promise only finish when the user
      // completes the popup transaction before continue program execution
      //
      // this is important when you try to redirect an user after
      // a sign in event, whiout await keyword, the program
      // takes the popup as the end of the promise and
      // redirects whitout finish the transaction
      await signInWithSocial(formData);
      await createProfile();
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
              <SignInForm handleSubmit={handleSignInWithEmailAndPassword} />

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
