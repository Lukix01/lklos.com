import Head from "next/head";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="text-white font-basic">
            <Head>
                <title>lklos.com | Contact</title>
            </Head>
            <Link href="/">
                <i className="invisible md:visible transition duration-300  absolute md:mt-9 md:ml-40 fa-2x md:fa-3x fas cursor-pointer fa-arrow-left"></i>
            </Link>
            <div className="ml-12 md:ml-56 mt-32 md:mt-48">
                <div className="animate-pulse text-7xl md:text-8xl text-gray-400 font-bold">
                    Contact
                </div>
            </div>
            <div className="inline-block ml-12 md:ml-56 mt-12 text-5xl">
                <Link href="https://twitter.com/LukiXKK">
                    <div
                        id="btn"
                        className="transition duration-300 mt-7 hover:text-gray-400 cursor-pointer"
                    >
                        Twitter
                    </div>
                </Link>
                <Link href="https://github.com/Lukix01">
                    <div
                        id="btn"
                        className="transition duration-300 mt-9 hover:text-gray-400 cursor-pointer"
                    >
                        Github
                    </div>
                </Link>
                <Link href="mailto:lukaszklosx@gmail.com">
                    <div
                        id="btn"
                        className="transition duration-300 mt-9 hover:text-gray-400 cursor-pointer"
                    >
                        E-Mail
                    </div>
                </Link>
                <Link href="https://discord.gg/pmpszsf7Cf">
                    <div
                        id="btn"
                        className="transition duration-300 mt-9 hover:text-gray-400 cursor-pointer"
                    >
                        Discord
                    </div>
                </Link>
            </div>
        </div>
    );
}
