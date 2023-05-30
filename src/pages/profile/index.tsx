import ProfileUpdateForm from '@/components/formik/profile/profile-update-form';
import { Inter } from 'next/font/google';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

type TProfileProps = {};

export const getStaticProps = () => ({
  props: {},
});

const Profile = (props: TProfileProps) => (
  <Container className="profile">
    <Row>
      <Col md={2}>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={10}>
        <h1>profile</h1>
        <ProfileUpdateForm handleSubmit={() => false} />
      </Col>
    </Row>
  </Container>
);

export default Profile;
