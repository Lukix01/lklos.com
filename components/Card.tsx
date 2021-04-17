import Link from "next/link";

interface Card {
    name: string;
    date: string;
    link: string;
    image: string;
}

const Card = ({ name, date, link, image }: Card) => {
    return (
        <div className="text-white font-basic overflow-auto">
            <div className="flex flex-col justify-content items-center">
                <div className="mt-28 bg-gray-900 w-card h-64 rounded-card">
                    <div className="ml-64 absolute">
                        <h1 className="text-7xl text-gray-400 font-bold mt-6">{name}</h1>
                        <h3 className="text-4xl text-gray-600 mt-2">{date}</h3>
                        <Link href={link}>
                            <a target="blank">
                                <i className="mt-6 ml-72 fa-3x fas cursor-pointer fa-link"></i>
                            </a>
                        </Link>
                    </div>
                    <img src={image} className="mt-7 ml-6" />
                </div>
            </div>
        </div>
    );
};

export default Card;
