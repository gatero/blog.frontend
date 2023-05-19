// Fontawesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { I18nextProvider } from 'react-i18next';

config.autoAddCss = false;

// Next
import type { AppProps } from 'next/app';

// Styles
import AuthProvider from '@/firebase/firebase.context';
import i18n from '@/lang/i18n';
import '@/styles/main.scss';
import useLayout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  const Layout = useLayout();

  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </I18nextProvider>
  );
}
