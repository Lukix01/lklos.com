import Head from "next/head";
import Link from "next/link";
import Project from "../components/Project";
import Layout from "../components/Layout";

export default function Contact() {
    return (
        <>
            <Layout
                name="My Projects"
                icon="my-auto ml-4 fas fa-list-alt text-yellow"
            />
            <div className="flex flex-col items-center text-white font-basic font-bold">
                <Head>
                    <title>lklos.com | Projects</title>
                </Head>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl">
                    <Project
                        name="Fadau"
                        icon="my-auto ml-4 fas fa-gamepad text-blue"
                        link="https://lukix.itch.io/fadau"
                    />
                    <Project
                        name="Cactais"
                        icon="my-auto ml-4 fas fa-window-restore text-red"
                        link="https://github.com/Lukix01/Cactais"
                    />
                    <Project
                        name="Lukix Bot"
                        icon="my-auto ml-4 fas fa-robot text-yellow"
                        link="https://discord.com/oauth2/authorize?client_id=806225903713255507&permissions=592896&scope=bot"
                    />
                    <Project
                        name="Eat It!"
                        icon="my-auto ml-4 fas fa-gamepad text-blue"
                        link="https://lukix.itch.io/eat-it"
                    />
                    <Project
                        name="Biegnij!"
                        icon="my-auto ml-4 fas fa-gamepad text-blue"
                        link="https://lukix.itch.io/biegnij"
                    />
                </div>
            </div>
        </>
    );
}
