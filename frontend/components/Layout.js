import { useCookies } from 'react-cookie';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  return (
    <div className='flex flex-col'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
