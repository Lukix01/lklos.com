import Head from "next/head";
import Project from "../components/portfolio/Project";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../projects.json";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex h-screen font-basic">
            <div className="m-auto">
                <div className="relative h-[26rem] overflow-auto">
                    {projects.map((project: any) => {
                        return (
                            <div>
                                <Project
                                    name={project.name}
                                    date={project.date}
                                    links={project.links}
                                    description={project.description}
                                    projects={projects}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="flex">
                    <Link href="/">
                        <div className="mx-auto mt-10 cursor-pointer text-2xl opacity-50 transition hover:opacity-70">
                            Homepage
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
