import Head from "next/head";
import "../styles/globals.css";
import "../public/fontawesome/css/all.min.css";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/img/icon.png" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <meta
                    name="keywords"
                    content="Łukasz Kłos, Fadau, Programmer, lklos"
                ></meta>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
