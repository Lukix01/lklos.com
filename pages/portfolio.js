import Head from "next/head";
import Link from "next/link";
import { Card1, Card2, Card3, Card4 } from "../components/Card";

const Portfolio = () => {
    return (
        <div className="text-white font-basic overflow-auto">
            <Head>
                <title>lklos.com | Portfolio</title>
            </Head>
            <Link href="/">
                <i className="mt-12 ml-12 fa-3x fas cursor-pointer fa-arrow-left absolute"></i>
            </Link>
            <div className="flex flex-col justify-content items-center">
                <div className="animate-pulse text-8xl mt-24 text-gray-400 font-bold">
                    My Projects
                </div>
            </div>
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
        </div>
    );
};

export default Portfolio;
