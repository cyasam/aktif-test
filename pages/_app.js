import { appWithTranslation } from 'next-i18next';
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <><Header navData={pageProps.navData} /><Component {...pageProps} /></>
}

export default appWithTranslation(MyApp)
