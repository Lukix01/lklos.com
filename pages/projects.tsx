import Head from "next/head";
import Project from "../components/projects/Project";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../projects.json";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex h-screen font-basic">
            <div className="m-auto">
                <div className="h-96 overflow-auto">
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
                        <div className="mx-auto mt-10 text-2xl cursor-pointer opacity-50 hover:opacity-70 transition">
                            Homepage
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
