import Head from "next/head";
import Layout from "../components/Layout";

export default function Contact() {
    return (
        <>
            <Layout
                name="404 Error"
                icon="my-auto ml-4 fas fa-exclamation-triangle"
                color="text-red"
            />
            <div className="text-white font-basic font-bold">
                <Head>
                    <title>lklos.com | 404 Error</title>
                </Head>
                <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                    <i className="fas fa-exclamation-triangle text-9xl animate-pulse text-red"></i>
                    <div className="mt-8">The page could not be found</div>
                </div>
            </div>
        </>
    );
}
