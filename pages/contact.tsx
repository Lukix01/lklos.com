import Head from "next/head";
import Project from "../components/Project";
import Layout from "../components/Layout";

export default function Contact() {
    return (
        <>
            <Layout
                name="Contact"
                icon="my-auto ml-4 fas fa-envelope"
                color="text-green"
            />
            <div className="flex flex-col items-center text-white font-basic font-bold">
                <Head>
                    <title>lklos.com | Contact</title>
                </Head>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl">
                    <Project
                        name="Github"
                        icon="my-auto ml-4 fab fa-github text-white"
                        link="https://github.com/Lukix01"
                    />
                    <Project
                        name="Discord"
                        icon="my-auto ml-4 fab fa-discord text-red"
                        link="https://discord.gg/pmpszsf7Cf"
                    />
                    <Project
                        name="Twitter"
                        icon="my-auto ml-4 fab fa-twitter text-blue"
                        link="https://twitter.com/LukiXKK"
                    />
                    <Project
                        name="E-Mail"
                        icon="my-auto ml-4 fas fa-envelope text-yellow"
                        link="mailto:lukaszklosx@gmail.com"
                    />
                </div>
            </div>
        </>
    );
}
