import Head from "next/head";
import Layout from "../components/Layout";

export default function Contact() {
    return (
        <>
            <Layout
                name="About Me"
                icon="my-auto ml-4 fas fa-address-card"
                color="text-blue"
            />
            <div className="text-white font-basic ">
                <Head>
                    <title>lklos.com | About Me</title>
                </Head>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                    <div>
                        My name is Łukasz and I live in Poland. My greatest
                        passion is programming, which I started to be interested
                        in about 5 years ago. In the beginning, I did nothing
                        more than the websites written in
                        <span className="text-yellow"> HTMl</span> +
                        <span className="text-blue"> CSS.</span> I created a lot
                        of small projects that I spent a lot of time on. I also
                        happened to write something in
                        <span className="text-blue"> Lua</span> on the
                        <span className="text-red"> Love2d </span>
                        engine. Some of my more serious projects are listed on
                        the <span className="text-green">"Projects" </span>
                        website. At the moment, my main focus is on web projects
                        with <span className="text-blue">Next JS</span>,
                        <span className="text-red"> React JS</span> and
                        Tailwindcss. I have some interesting plans for the
                        future that I would like to implement and if you want to
                        know about all the changes, I invite you to my
                        <span className="text-green"> socials </span>
                        where I will inform you about everything.
                    </div>
                </div>
            </div>
        </>
    );
}
