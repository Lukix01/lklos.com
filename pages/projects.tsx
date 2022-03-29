import Head from "next/head";
import Project from "../components/projects/Project";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../projects.json";

export default function Projects() {
    return (
        <div className="flex h-screen font-basic">
            <div className="m-auto divide-y divide-neutral-800">
                {projects.map((project: any) => {
                    return (
                        <div>
                            <Project
                                name={project.name}
                                date={project.date}
                                links={project.links}
                                description={project.description}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
