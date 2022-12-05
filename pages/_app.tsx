import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { NavMenu } from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <NavMenu />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
