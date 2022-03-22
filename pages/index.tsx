import PageButton from "../components/home/PageButton";

export default function Home() {
    return (
        <div className="flex h-screen">
            <div className="m-auto text-center">
                <PageButton page="/projects" name="Portfolio" />
            </div>
        </div>
    );
}
