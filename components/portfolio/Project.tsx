import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface Project {
    name: string;
    date: string;
    links: object[];
    description?: string;
    projects: any;
}

export default function Project({
    name,
    date,
    links,
    description,
    projects,
}: Project) {
    return (
        <div>
            <div className="my-10 w-[27rem]">
                <div className="text-4xl">{name}</div>
                <div className="opacity-50">
                    <div className="text-2xl">{date}</div>
                    <div className="space-x-1">
                        {links.map((link: any) => {
                            return (
                                <Link href={link.href}>
                                    <a target="blank">
                                        <FontAwesomeIcon
                                            icon={
                                                link.icon == "discord"
                                                    ? faDiscord
                                                    : link.icon == "github"
                                                    ? faGithub
                                                    : faLink
                                            }
                                        />
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                    <div>{description}</div>
                </div>
            </div>
            {name !== projects[projects.length - 1].name && (
                <div className="mx-auto h-0.5 w-20 bg-neutral-800" />
            )}
        </div>
    );
}
