import ProfileUpdateForm from '@/components/formik/profile/profile-update-form';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

type TProfileProps = {};

export const getStaticProps = () => ({
  props: {},
});

const Profile = (props: TProfileProps) => (
  <Container className="profile">
    <Row>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item action onClick={() => false}>
            Información
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => false}>
            Metodo de pago
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => false}>
            Subscripción
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => false}>
            Grupos
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => false}>
            Usuarios
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col md={9}>
        <div className="profile-information">
          <h1>profile</h1>
          <ProfileUpdateForm handleSubmit={() => false} />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Profile;
