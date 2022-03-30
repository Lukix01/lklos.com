import Link from "next/link";

interface Props {
    name: string;
    page: string;
}

export default function PageButton({ name, page }: Props) {
    return (
        <Link href={page}>
            <div className="cursor-pointer text-3xl opacity-50 transition hover:rotate-3 hover:scale-125 hover:opacity-70">
                <h1>{name}</h1>
            </div>
        </Link>
    );
}
