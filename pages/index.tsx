import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <div className="text-white font-basic">
            <Head>
                <title>lklos.com | Homepage</title>
            </Head>
            <div className="justify-content items-center">
                <div className="text-center animate-pulse text-6xl md:text-8xl mt-44 md:mt-80 text-gray-400 font-bold">
                    Łukasz Kłos
                </div>
            </div>
            <div className="mt-3 text-3xl md:flex  text-center justify-center">
                <Link href="https://github.com/Lukix01">
                    <a target="blank">
                        <div className="mt-4 md:mt-0 hover:text-gray-400 cursor-pointer">
                            Github
                        </div>
                    </a>
                </Link>
                <Link href="https://twitter.com/LukiXKK">
                    <a target="blank">
                        <div className="md:ml-7 mt-4 md:mt-0 hover:text-gray-400 cursor-pointer">
                            Twitter
                        </div>
                    </a>
                </Link>
                <Link href="https://discord.gg/pmpszsf7Cf">
                    <a target="blank">
                        <div className="md:ml-7 mt-4 md:mt-0 hover:text-gray-400 cursor-pointer">
                            Discord
                        </div>
                    </a>
                </Link>
                <Link href="mailto:lukaszklosx@gmail.com">
                    <a target="blank">
                        <div className="md:ml-7 mt-4 md:mt-0 hover:text-gray-400 cursor-pointer">
                            E-Mail
                        </div>
                    </a>
                </Link>
                <div className="hidden md:block ml-7 text-gray-400">|</div>
                <Link href="/portfolio">
                    <div className="md:ml-7 mt-4 md:mt-0 hover:text-gray-400 cursor-pointer">
                        Portfolio
                    </div>
                </Link>
            </div>
        </div>
    );
}
