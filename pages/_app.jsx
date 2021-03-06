import '../styles/globals.scss'
import { Header } from '../components/Header.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
