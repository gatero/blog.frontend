// Fontawesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

// Next
import type { AppProps } from 'next/app';

// Styles
import AuthProvider from '@/firebase/firebase.context';
import '@/styles/main.scss';
import useLayout from './layout/auth.layout';

type LayoutProps = {
  children: React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const Layout = useLayout();

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
