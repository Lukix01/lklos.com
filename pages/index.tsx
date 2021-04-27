import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <div className="text-white font-basic">
            <Head>
                <title>lklos.com | Homepage</title>
            </Head>
            <div className="ml-12 md:ml-56 mt-32 md:mt-48">
                <div className="animate-pulse text-7xl md:text-8xl text-gray-400 font-bold">
                    Łukasz Kłos
                </div>
            </div>
            <div className="inline-block ml-12 md:ml-56 mt-12  text-5xl">
                <Link href="/portfolio">
                    <div
                        id="btn"
                        className="transition duration-300 ease-in-out mt-7 hover:text-gray-400 cursor-pointer"
                    >
                        Portfolio
                    </div>
                </Link>
                <Link href="/contact">
                    <div
                        id="btn"
                        className="transition duration-300 mt-9 hover:text-gray-400 cursor-pointer"
                    >
                        Contact
                    </div>
                </Link>
            </div>
        </div>
    );
}
