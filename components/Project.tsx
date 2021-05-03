import Link from "next/link";

interface Project {
    name: string;
    icon: string;
    link: string;
}

const Project = ({ name, icon, link }: Project) => {
    return (
        <div className="mt-7">
            <Link href={link}>
                <div className="transform duration-500 motion-safe:hover:scale-105 flex rounded-2xl w-80 h-16 bg-basic cursor-pointer">
                    <i className={icon}></i>
                    <div className="text-3xl m-auto pr-8">{name}</div>
                </div>
            </Link>
        </div>
    );
};

export default Project;
