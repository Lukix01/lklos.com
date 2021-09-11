import Link from "next/link";

interface Button {
    name: string;
    link: string;
}

export default function Button({ name, link }: Button) {
    return (
        <Link href={link}>
            <div className="text-2xl underline cursor-pointer font-basic hover:text-blue  duration-200 inline-block m-5">
                <h1>{name}</h1>
            </div>
        </Link>
    );
}
