import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <div className="text-white font-basic">
            <Head>
                <title>lklos.com | Homepage</title>
            </Head>
            <div className="flex flex-col justify-content items-center">
                <div className="animate-pulse text-8xl mt-80 text-gray-400 font-bold">
                    Łukasz Kłos
                </div>
            </div>
            <div className="mt-3 text-3xl flex justify-center">
                <Link href="https://github.com/Lukix01">
                    <a target="blank">
                        <div className="hover:text-gray-400 cursor-pointer">Github</div>
                    </a>
                </Link>
                <Link href="https://twitter.com/LukiXKK">
                    <a target="blank">
                        <div className="ml-7 hover:text-gray-400 cursor-pointer">Twitter</div>
                    </a>
                </Link>
                <Link href="https://discord.gg/pmpszsf7Cf">
                    <a target="blank">
                        <div className="ml-7 hover:text-gray-400 cursor-pointer">Discord</div>
                    </a>
                </Link>
                <Link href="mailto:lukaszklosx@gmail.com">
                    <a target="blank">
                        <div className="ml-7 hover:text-gray-400 cursor-pointer">E-Mail</div>
                    </a>
                </Link>
                <div className="ml-7 text-gray-400">|</div>
                <Link href="/portfolio">
                    <div className="ml-7 hover:text-gray-400 cursor-pointer">Portfolio</div>
                </Link>
            </div>
        </div>
    );
}
