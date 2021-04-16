import Link from "next/link";

let name1 = "Lukix Bot";
let name2 = "Biegnij!";
let name3 = "Eat It!";
let name4 = "Cactais";
let date1 = "27 March 2021";
let date2 = "3 October 2020";
let date3 = "30 October 2020";
let date4 = "16 April 2021";

const Card = () => {
    return (
        <div class="text-white font-basic overflow-auto">
            <div class="flex flex-col justify-content items-center">
                <div class="mt-28 bg-gray-900 w-card h-64 rounded-card">
                    <div class="ml-64 absolute">
                        <h1 class="text-7xl text-gray-400 font-bold mt-6">{name}</h1>
                        <h3 class="text-4xl text-gray-600 mt-2">{date}</h3>
                        <Link
                            href="https://discord.com/oauth2/authorize?client_id=806225903713255507&permissions=592896&scope=bot"
                            target="blank"
                        >
                            <i class="mt-6 ml-72 fa-3x fas cursor-pointer fa-link"></i>
                        </Link>
                    </div>
                    <img src="img/lukix-bot.png" class="mt-7 ml-6" />
                </div>
            </div>
        </div>
    );
};

export default Card;

const Card1 = () => {
    return (
        <div class="text-white font-basic overflow-auto">
            <div class="flex flex-col justify-content items-center">
                <div class="mt-28 bg-gray-900 w-card h-64 rounded-card">
                    <div class="ml-64 absolute">
                        <h1 class="text-7xl text-gray-400 font-bold mt-6">{name1}</h1>
                        <h3 class="text-4xl text-gray-600 mt-2">{date1}</h3>
                        <Link
                            href="https://discord.com/oauth2/authorize?client_id=806225903713255507&permissions=592896&scope=bot"
                            target="blank"
                        >
                            <i class="mt-6 ml-72 fa-3x fas cursor-pointer fa-link"></i>
                        </Link>
                    </div>
                    <img src="img/lukix-bot.png" class="mt-7 ml-6" />
                </div>
            </div>
        </div>
    );
};

const Card2 = () => {
    return (
        <div class="text-white font-basic overflow-auto">
            <div class="flex flex-col justify-content items-center">
                <div class="mt-28 bg-gray-900 w-card h-64 rounded-card">
                    <div class="ml-64 absolute">
                        <h1 class="text-7xl text-gray-400 font-bold mt-6">{name2}</h1>
                        <h3 class="text-4xl text-gray-600 mt-2">{date2}</h3>
                        <Link href="https://lukix.itch.io/biegnij" target="blank">
                            <i class="mt-6 ml-72 fa-3x fas cursor-pointer fa-link"></i>
                        </Link>
                    </div>
                    <img src="img/biegnij.png" class="mt-7 ml-6" />
                </div>
            </div>
        </div>
    );
};
const Card3 = () => {
    return (
        <div class="text-white font-basic overflow-auto">
            <div class="flex flex-col justify-content items-center">
                <div class="mt-28 bg-gray-900 w-card h-64 rounded-card">
                    <div class="ml-64 absolute">
                        <h1 class="text-7xl text-gray-400 font-bold mt-6">{name3}</h1>
                        <h3 class="text-4xl text-gray-600 mt-2">{date3}</h3>
                        <Link href="https://lukix.itch.io/eat-it" target="blank">
                            <i class="mt-6 ml-72 fa-3x fas cursor-pointer fa-link"></i>
                        </Link>
                    </div>
                    <img src="img/eat-it.png" class="mt-7 ml-6" />
                </div>
            </div>
        </div>
    );
};

const Card4 = () => {
    return (
        <div class="text-white font-basic overflow-auto">
            <div class="flex flex-col justify-content items-center">
                <div class="mt-28 bg-gray-900 w-card h-64 rounded-card">
                    <div class="ml-64 absolute">
                        <h1 class="text-7xl text-gray-400 font-bold mt-6">{name4}</h1>
                        <h3 class="text-4xl text-gray-600 mt-2">{date4}</h3>
                        <Link href="https://github.com/Lukix01/Cactais" target="blank">
                            <i class="mt-6 ml-72 fa-3x fas cursor-pointer fa-link"></i>
                        </Link>
                    </div>
                    <img src="img/cactais.png" class="mt-7 ml-6" />
                </div>
            </div>
        </div>
    );
};

export { Card1, Card2, Card3, Card4 };
