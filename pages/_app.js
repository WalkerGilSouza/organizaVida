import React from 'react'
import '../css/tailwind.css'

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>

  )
}
export default App