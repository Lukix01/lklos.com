import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-rows-1 grid-rows-2 gap-8 md:grid-cols-2 text-white font-basic">
            <Head>
                <title>lklos.com | Homepage</title>
            </Head>
            <Button
                name="Projects"
                icon="m-auto fas fa-6x fa-list-alt text-yellow transform duration-500 group-hover:opacity-25"
                link="/projects"
            />
            <Button
                name="Contact"
                icon="m-auto fas fa-6x fa-envelope text-green transform duration-500 group-hover:opacity-25"
                link="/contact"
            />
            <Button
                name="Current Game"
                icon="m-auto fas fa-6x fa-gamepad text-red transform duration-500 group-hover:opacity-25"
                link="/"
            />
            <Button
                name="About Me"
                icon="m-auto fas fa-6x fa-address-card text-blue transform duration-500 group-hover:opacity-25"
                link="/about"
            />
        </div>
    );
}
