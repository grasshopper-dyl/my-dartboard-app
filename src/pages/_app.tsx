import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout';



const App: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {

  
  return (
    <SessionProvider session={session}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  
    
  );
}

export default App;
