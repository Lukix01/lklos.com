import Link from "next/link";

interface Props {
    name: string;
    page: string;
}

export default function PageButton({ name, page }: Props) {
    return (
        <Link href={page}>
            <div className="font-basic text-3xl cursor-pointer">
                <h1>{name}</h1>
            </div>
        </Link>
    );
}
