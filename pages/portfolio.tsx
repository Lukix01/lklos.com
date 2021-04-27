import Head from "next/head";
import Link from "next/link";
import Project from "../components/Project";

export default function Contact() {
    return (
        <div className=" text-white font-basic">
            <Head>
                <title>lklos.com | Portfolio</title>
            </Head>
            <Link href="/">
                <i className="invisible md:visible transition duration-300  absolute md:mt-9 md:ml-40 fa-2x md:fa-3x fas cursor-pointer fa-arrow-left"></i>
            </Link>
            <div className="ml-10 md:ml-56 mt-32 md:mt-36">
                <div className="animate-pulse text-6xl md:text-8xl text-gray-400 font-bold">
                    My projects
                </div>
            </div>
            <div className="inline-block ml-10 md:ml-56 mt-6 md:mt-12 text-5xl">
                <div
                    id="year"
                    className="hidden md:block mt-6 md:mt-7 text-4xl md:text-5xl text-gray-600"
                >
                    2021
                </div>
                <div className="block md:hidden mt-6 text-3xl  text-gray-400">
                    2021
                </div>

                <Project
                    name="Fadau"
                    date="27 Apr"
                    link="https://lukix.itch.io/fadau"
                />
                <Project
                    name="Cactais"
                    date="16 Apr"
                    link="https://github.com/Lukix01/Cactais"
                />
                <Project
                    name="Lukix Bot"
                    date="21 Mar"
                    link="https://discord.com/oauth2/authorize?client_id=806225903713255507&permissions=592896&scope=bot"
                />
                <div
                    id="year"
                    className="hidden md:block mt-6 md:mt-7 text-4xl md:text-5xl text-gray-600"
                >
                    2020
                </div>
                <div className="block md:hidden mt-6 text-3xl  text-gray-400">
                    2020
                </div>
                <Project
                    name="Eat It!"
                    date="30 Oct"
                    link="https://lukix.itch.io/eat-it"
                />
                <Project
                    name="Biegnij!"
                    date="03 Oct"
                    link="https://lukix.itch.io/biegnij"
                />
            </div>
        </div>
    );
}
