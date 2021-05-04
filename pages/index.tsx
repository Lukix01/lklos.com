import Head from "next/head";
import Link from "next/link";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default function Home() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-rows-2 gap-8 grid-cols-2 text-white font-basic">
            <Head>
                <title>lklos.com | Homepage</title>
            </Head>
            <Link href="/projects">
                <div className="group transform duration-500 motion-safe:hover:scale-105 flex items-center w-52 h-52 bg-basic rounded-basic">
                    <i className="m-auto fas fa-6x fa-list-alt text-yellow transform duration-500 group-hover:opacity-25"></i>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-3xl font-bold transform duration-500 select-none">
                        Projects
                    </div>
                </div>
            </Link>
            <Link href="/contact">
                <div className="group transform duration-500 motion-safe:hover:scale-105 flex items-center w-52 h-52 bg-basic rounded-basic">
                    <i className="m-auto fas fa-6x fa-envelope text-green transform duration-500 group-hover:opacity-25"></i>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-3xl font-bold transform duration-500 select-none">
                        Contact
                    </div>
                </div>
            </Link>
            <Link href="/">
                <div className="group transform duration-500 motion-safe:hover:scale-105 flex items-center w-52 h-52 bg-basic rounded-basic">
                    <i className="m-auto fas fa-6x fa-gamepad text-red transform duration-500 group-hover:opacity-25"></i>
                    <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-3xl font-bold transform duration-500 select-none">
                        Current Game
                    </div>
                </div>
            </Link>
            <Link href="/">
                <div className="group transform duration-500 motion-safe:hover:scale-105 flex items-center w-52 h-52 bg-basic rounded-basic">
                    <i className="m-auto fas fa-6x fa-address-card text-blue transform duration-500 group-hover:opacity-25"></i>
                    <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-3xl font-bold transform duration-500 select-none">
                        About Me
                    </div>
                </div>
            </Link>
        </div>
    );
}
