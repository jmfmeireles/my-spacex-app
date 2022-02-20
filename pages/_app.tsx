import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import '../styles/globals.css';
import Header from '../components/common/Header';
import { en } from '../locales/en';
import { pt } from '../locales/pt';
import TranslationContext from '../context/Translation';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.spacex.land/graphql/',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const t: typeof en = router.locale === 'pt' ? pt : en;
  return (
    <ApolloProvider client={client}>
      <TranslationContext.Provider value={{ t }}>
        <Header />
        <Component {...pageProps} />
      </TranslationContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
