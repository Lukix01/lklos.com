import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <div class="text-white font-basic">
            <Head>
                <title>lklos.com | Homepage</title>
            </Head>
            <div class="flex flex-col justify-content items-center">
                <div class="animate-pulse text-8xl mt-80 text-gray-400 font-bold">Łukasz Kłos</div>
            </div>
            <div class="mt-3 text-3xl flex justify-center">
                <Link href="https://github.com/Lukix01">
                    <div class="hover:text-gray-400 cursor-pointer">Github</div>
                </Link>
                <Link href="https://twitter.com/LukiXKK">
                    <div class="ml-7 hover:text-gray-400 cursor-pointer">Twitter</div>
                </Link>
                <Link href="https://discord.gg/pmpszsf7Cf">
                    <div class="ml-7 hover:text-gray-400 cursor-pointer">Discord</div>
                </Link>
                <Link href="mailto:lukaszklosx@gmail.com">
                    <div class="ml-7 hover:text-gray-400 cursor-pointer">E-Mail</div>
                </Link>
                <div class="ml-7 text-gray-400">|</div>
                <Link href="/portfolio">
                    <div class="ml-7 hover:text-gray-400 cursor-pointer">Portfolio</div>
                </Link>
            </div>
        </div>
    );
}
