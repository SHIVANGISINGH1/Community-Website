// This is similar to react app component 
// for adding layouts like header and footer on every page can be added here

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
