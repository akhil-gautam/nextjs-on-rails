import '../styles/globals.css';
import { CookiesProvider } from 'react-cookie';
import { Toaster } from 'react-hot-toast';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
  );
}

export default MyApp;
