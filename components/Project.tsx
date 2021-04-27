import Link from "next/link";

interface Project {
    name: string;
    date: string;
    link: string;
}

const Project = ({ name, date, link }: Project) => {
    return (
        <div className="tracking-lighter font-basic">
            <div className="mt-6 md:mt-11 text-3xl md:text-5xl">
                <div className="inline text-gray-600">{date} | </div>
                <div className="inline transition duration-300 hover:text-gray-400">
                    <Link href={link}>{name}</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;
