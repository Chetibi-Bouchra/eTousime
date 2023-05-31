import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Menu from '@/components/menu';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css" rel="stylesheet" />
      </Head>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
