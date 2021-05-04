import Link from "next/link";

interface Layout {
    name: string;
    icon: string;
    color: string;
}

const Layout = ({ name, icon, color }: Layout) => {
    return (
        <div className={color}>
            <div className="hidden md:block p-20 absolute text-5xl font-basic font-bold">
                <div className="flex rounded-2xl w-80 h-16 bg-basic">
                    <i className={icon}></i>
                    <div className="text-3xl m-auto pr-8">{name}</div>
                </div>
            </div>
            <div className="hidden md:block p-20 mt-20 absolute text-2xl font-basic font-bold">
                <Link href="/">
                    <div className="flex rounded-xl w-60 h-10 bg-basic cursor-pointer">
                        <i className="my-auto ml-4 fas fa-arrow-left"></i>
                        <div className="text-2xl m-auto pr-12">Homepage</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Layout;
