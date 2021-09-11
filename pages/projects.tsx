import Head from "next/head";
import Project from "../components/projects/Project";

export default function Projects() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <Project
                    name="link.lklos.com"
                    description="Url shortener with accounts system and some nice other features."
                    link="https://link.lklos.com/"
                    release="2021"
                />
                <Project
                    name="api.lklos.com"
                    description="API with different image and text endpoints to help you while making bot or website."
                    link="https://api.lklos.com/"
                    release="2021"
                />

                <Project
                    name="Lukix Bot"
                    description="Simple discord bot with lots of great commands. You can invite it to your server."
                    link="https://discord.com/oauth2/authorize?client_id=806225903713255507&permissions=592896&scope=bot"
                    release="2021"
                />
                <Project
                    name="Biegnij!"
                    description="Mi first public game made in Unity."
                    link="https://lukix.itch.io/biegnij"
                    release="2020"
                />
            </div>
        </div>
    );
}
