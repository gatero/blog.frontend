import { Inter } from 'next/font/google';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const inter = Inter({ subsets: ['latin'] });

type THomeProps = {};

export function getStaticProps() {
  return {
    props: {},
  };
}

const Home = (props: THomeProps) => {
  const { t } = useTranslation();

  return (
    <Container fluid className="sign-in">
      <Row>
        <Col className="sign-in-greeting">
          <h1>{t('home.job')}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
