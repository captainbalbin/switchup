import React from 'react'
import '../styles.css'
import { ThemeProvider } from 'next-themes'

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
