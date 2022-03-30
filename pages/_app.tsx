import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { NextSeo } from "next-seo";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/img/logo.png" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <meta
                    name="keywords"
                    content="Łukasz Kłos, Fadau, Linkys, Programmer, lklos"
                ></meta>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            </Head>
            <NextSeo
                title="Łukasz Kłos"
                description="My personal website with my portfolio and some other info about me."
            />
            <Component {...pageProps} />
        </>
    );
}

export default App;
