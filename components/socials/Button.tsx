import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Props {
    href: string;
    icon: IconDefinition;
}

export default function Button({ href, icon }: Props) {
    return (
        <Link href={href}>
            <FontAwesomeIcon
                icon={icon}
                className="cursor-pointer text-2xl opacity-50 transition hover:opacity-70"
            />
        </Link>
    );
}
