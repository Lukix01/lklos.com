import Head from 'next/head';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta name="keywords" content="Łukasz Kłos, lklos, personal website, portfolio, projects" />
        <meta charSet="utf8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <NextSeo
        title="Łukasz Kłos"
        description="My personal website with my projects and contact details."
      />
      <Component {...pageProps} />
    </>
  );
}

