import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import {
    faDiscord,
    faGithub,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
    return (
        <div className="fa-2x">
            <Link href="https://twitter.com/LukiXKK">
                <FontAwesomeIcon
                    icon={faTwitter}
                    className="mr-4 cursor-pointer hover:text-blue duration-300"
                />
            </Link>
            <Link href="https://discord.gg/pmpszsf7Cf">
                <FontAwesomeIcon
                    icon={faDiscord}
                    className="mr-4 cursor-pointer hover:text-red duration-300"
                />
            </Link>

            <Link href="https://github.com/Lukix01">
                <FontAwesomeIcon
                    icon={faGithub}
                    className="mr-4 cursor-pointer hover:text-gray-500 duration-300"
                />
            </Link>
            <Link href="mailto:lukaszklosx@gmail.com">
                <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    className="cursor-pointer hover:text-yellow duration-300"
                />
            </Link>
        </div>
    );
}
