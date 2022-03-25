import Link from "next/link";

interface Props {
    name: string;
    page: string;
}

export default function PageButton({ name, page }: Props) {
    return (
        <Link href={page}>
            <div className="text-3xl cursor-pointer opacity-50 hover:opacity-70 transition hover:rotate-3 hover:scale-125">
                <h1>{name}</h1>
            </div>
        </Link>
    );
}
