import { Inter } from 'next/font/google';
import { Container } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] });

type THomeProps = {};

export default function Home(props: THomeProps) {
  return (
    <Container fluid className="home">
      <h1>home</h1>
    </Container>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
