import { Inter } from 'next/font/google';
import { Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

type TMyWorkProps = {};

export function getStaticProps() {
  return {
    props: {},
  };
}

const MyWork = (props: TMyWorkProps) => (
  <Container fluid className="sign-in">
    <Row>
      <Col className="sign-in-greeting">
        <h1>My work</h1>
      </Col>
    </Row>
  </Container>
);

export default MyWork;
