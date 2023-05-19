import { Inter } from 'next/font/google';
import { Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

type TAboutProps = {};

export function getStaticProps() {
  return {
    props: {},
  };
}

const About = (props: TAboutProps) => (
  <Container fluid className="sign-in">
    <Row>
      <Col className="sign-in-greeting">
        <h1>about</h1>
      </Col>
    </Row>
  </Container>
);

export default About;
