import {
    faDiscord,
    faGithub,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../components/socials/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Socials() {
    return (
        <div className="flex h-screen font-basic">
            <div className="m-auto text-center">
                <div className="flex">
                    <div className="m-auto mr-3">
                        <Button href="/" icon={faArrowLeft} small />
                    </div>
                    <div className="text-3xl">My social links</div>
                </div>
                <div className="absolute left-1/2 mt-5 flex -translate-x-1/2 space-x-5">
                    <Button
                        href="https://discord.gg/pzXZN2J"
                        icon={faDiscord}
                    />
                    <Button href="https://github.com/Lukix01" icon={faGithub} />
                    <Button
                        href="https://twitter.com/lklos01"
                        icon={faTwitter}
                    />
                </div>
            </div>
        </div>
    );
}
