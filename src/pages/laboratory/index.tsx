import { Inter } from 'next/font/google';
import { Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

type TLaboratoryProps = {};

export function getStaticProps() {
  return {
    props: {},
  };
}

const Laboratory = (props: TLaboratoryProps) => (
  <Container className="sign-in">
    <Row>
      <Col className="sign-in-greeting">
        <h1>Laboratory</h1>
      </Col>
    </Row>
  </Container>
);

export default Laboratory;
