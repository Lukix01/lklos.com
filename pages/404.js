import Link from "next/link";

const Error = () => {
    return (
        <div class="font-basic">
            <div class="flex flex-col justify-content items-center">
                <div class="animate-pulse text-8xl mt-80 text-gray-400 font-bold">
                    <div class="text-red-600 text-center">
                        Error <div class="text-white text-5xl">in loading the page</div>
                    </div>
                </div>
                <div class="text-3xl mt-6 text-white hover:text-gray-400">
                    <Link href="/">Back to the Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
