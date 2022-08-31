
import { ApolloProvider } from '@apollo/client';
import { appWithTranslation } from 'next-i18next';
import { client } from '../client';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header navData={pageProps.navData} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);
