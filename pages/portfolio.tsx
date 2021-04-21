import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";

let visits = 0;

const Portfolio = () => {
    return (
        <div className="text-white font-basic overflow-auto">
            <Head>
                <title>lklos.com | Portfolio</title>
            </Head>
            <Link href="/">
                <i className="mt-8 ml-8 md:mt-12 md:ml-12 fa-2x md:fa-3x fas cursor-pointer fa-arrow-left absolute"></i>
            </Link>
            <div className="flex flex-col justify-content items-center">
                <div className="animate-pulse text-5xl md:text-8xl mt-24 text-gray-400 font-bold">
                    My Projects
                </div>
            </div>
            <Card
                name="Cactais"
                date="16 April 2021"
                link="https://github.com/Lukix01/Cactais"
                image="img/cactais.png"
            />
            <Card
                name="Lukix Bot"
                date="27 March 2021"
                link="https://discord.com/oauth2/authorize?client_id=806225903713255507&permissions=592896&scope=bot"
                image="img/lukix-bot.png"
            />
            <Card
                name="Eat It!"
                date="30 October 2020"
                link="https://lukix.itch.io/eat-it"
                image="img/eat-it.png"
            />
            <Card
                name="Biegnij!"
                date="3 October 2020"
                link="https://lukix.itch.io/biegnij"
                image="img/biegnij.png"
            />
        </div>
    );
};

export default Portfolio;
