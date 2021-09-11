import Link from "next/link";

interface Project {
    name: string;
    description?: string;
    link: string;
    release: string;
}

export default function Project({ name, description, link, release }: Project) {
    return (
        <div className="font-basic m-10 md:m-16">
            <div className="bg-gray-200 bg-opacity-30 p-4 rounded-xl w-72 md:w-96">
                <div className="text-xl bg-transparent m-auto border-4 border-opacity-40 rounded-xl p-1 border-gray-400 mr-4 inline hover:border-opacity-50 transition ">
                    {release}
                </div>
                <Link href={link}>
                    <a target="blank">
                        <div className="text-2xl inline cursor-pointer hover:opacity-60">
                            {name}
                        </div>
                    </a>
                </Link>
                <div className="text-gray-500 mt-2">{description}</div>
            </div>
        </div>
    );
}
