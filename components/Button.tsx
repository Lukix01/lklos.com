import Link from "next/link";

interface Button {
    name: string;
    icon: string;
    link: string;
}

const Button = ({ name, icon, link }: Button) => {
    return (
        <Link href={link}>
            <div className="group transform duration-500 motion-safe:hover:scale-105 flex items-center w-36 h-36 md:w-52 md:h-52 bg-basic rounded-3xl md:rounded-basic">
                <i className={icon}></i>
                <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-3xl font-bold transform duration-500 select-none">
                    {name}
                </div>
            </div>
        </Link>
    );
};

export default Button;
