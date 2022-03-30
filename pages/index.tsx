import PageButton from "../components/home/PageButton";

export default function Home() {
    return (
        <div className="flex h-screen font-basic">
            <div className="m-auto space-y-3 text-center ">
                <PageButton page="/portfolio" name="Portfolio" />
                <PageButton page="/socials" name="Socials" />
            </div>
        </div>
    );
}
