import { Inter } from 'next/font/google';
import { Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

type TSignInProps = {};

export function getStaticProps() {
  return {
    props: {},
  };
}

const Profile = (props: TSignInProps) => (
  <Container className="sign-in">
    <Row>
      <Col className="sign-in-greeting">
        <h1>profile</h1>
      </Col>
    </Row>
  </Container>
);

export default Profile;
