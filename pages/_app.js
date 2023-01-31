import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <ToastContainer position='bottom-center' hideProgressBar={true} theme="colored" />
    </Fragment>
  )
}

export default MyApp
