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
            <div className="flex items-center  w-52 h-52 bg-basic rounded-basic">
                <i className="m-auto fas fa-6x fa-list-alt text-yellow"></i>
            </div>
            <div className="flex items-center w-52 h-52 bg-basic rounded-basic">
                <i className="m-auto fas fa-6x fa-address-card text-green"></i>
            </div>
            <div className="flex items-center w-52 h-52 bg-basic rounded-basic">
                <i className="m-auto fas fa-6x fa-gamepad text-red"></i>
            </div>
            <div className="flex items-center w-52 h-52 bg-basic rounded-basic">
                <i className="m-auto fas fa-6x fa-user-lock text-blue"></i>
            </div>
        </div>
    );
}
