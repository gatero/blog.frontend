import { Inter } from 'next/font/google';
import { Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

type THomeProps = {};

export function getStaticProps() {
  return {
    props: {},
  };
}

const Home = (props: THomeProps) => (
  <Container fluid className="sign-in">
    <Row>
      <Col className="sign-in-greeting">
        <h1>home</h1>
      </Col>
    </Row>
  </Container>
);

export default Home;
