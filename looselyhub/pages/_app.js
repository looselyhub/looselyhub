import { Provider } from 'next-auth/client'
import '../styles/base.scss'
import 'semantic-ui-css/semantic.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
