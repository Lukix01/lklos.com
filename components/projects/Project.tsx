import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Project {
    name: string;
    date: string;
    links: object[];
    description?: string;
}

export default function Project({ name, date, links, description }: Project) {
    return (
        <div className="w-96 my-10">
            <div className="text-4xl">{name}</div>
            <div className="opacity-50">
                <div className="text-2xl">{date}</div>
                <div className="space-x-1">
                    {links.map((link: any) => {
                        return (
                            <Link href={link.href}>
                                <a target="blank">
                                    <FontAwesomeIcon icon={link.icon} />
                                </a>
                            </Link>
                        );
                    })}
                </div>
                <div className="">{description}</div>
            </div>
        </div>
    );
}
