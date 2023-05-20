import { Inter } from 'next/font/google';
import { Col, Container, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

type TBlogProps = {};

export function getStaticProps() {
  return {
    props: {},
  };
}

const Blog = (props: TBlogProps) => (
  <Container className="sign-in">
    <Row>
      <Col className="sign-in-greeting">
        <h1>blog</h1>
      </Col>
    </Row>
  </Container>
);

export default Blog;
