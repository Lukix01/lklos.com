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
                <a target="blank">
                    <div className="transform duration-500 motion-safe:hover:scale-105 flex rounded-2xl w-64 md:w-80 h-16 bg-basic cursor-pointer">
                        <i className={icon}></i>
                        <div className="text-3xl m-auto pr-4 md:pr-8">
                            {name}
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Project;
