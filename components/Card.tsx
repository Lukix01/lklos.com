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
                <div className="mr-48 md:mr-0 mt-12 md:mt-28 bg-gray-900 w-24 md:w-card md:h-64 rounded-card">
                    <div className="ml-28 md:ml-64 absolute">
                        <h1 className="text-2xl md:text-7xl text-gray-400 font-bold mt-3 md:mt-6">
                            {name}
                        </h1>
                        <h3 className="text-2xl md:text-4xl text-gray-600 mt-2">
                            {date}
                        </h3>
                        <Link href={link}>
                            <a target="blank">
                                <i className="invisible md:visible mt-6 ml-72 fa-3x fas cursor-pointer fa-link"></i>
                            </a>
                        </Link>
                    </div>
                    <img
                        src={image}
                        className="transform scale-x-60 scale-y-60 md:scale-x-100 md:scale-y-100  md:mt-7 md:ml-6"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
