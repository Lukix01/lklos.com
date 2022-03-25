import PageButton from "../components/home/PageButton";

export default function Home() {
    return (
        <div className="flex h-screen font-basic">
            <div className="m-auto text-center space-y-3 ">
                <PageButton page="/projects" name="Portfolio" />
                <PageButton page="/projects" name="Socials" />
            </div>
        </div>
    );
}
