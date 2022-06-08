import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from 'redux/store'
import CustomerThemeProvider from 'styles/themes'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CustomerThemeProvider>
        <Component {...pageProps} />
      </CustomerThemeProvider>
    </Provider>
  )
}

export default MyApp
