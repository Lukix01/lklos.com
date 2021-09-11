import Button from "../components/homepage/Button";
import Header from "../components/homepage/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Socials from "../components/homepage/Socials";

export default function Home() {
    return (
        <div className="flex h-screen">
            <div className="m-auto text-center">
                <Header />
                <div>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="mr-6 invisible sm:visible"
                    />
                    <Button name="Projects" link="/projects" />
                    <Button name="About me" link="/about" />
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="ml-6 invisible sm:visible"
                    />
                </div>
                <Socials />
            </div>
        </div>
    );
}
