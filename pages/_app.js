import React from 'react';
import { useRouter } from 'next/router';

// import '../styles/style.css';
import 'antd/dist/antd.min.css';

function MyApp({ Component, pageProps}) {
  const router = useRouter();
  return <Component {...pageProps} {...router} />
}

export default MyApp;