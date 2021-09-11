import { useRouter } from "next/router";
import { useEffect } from "react";

const error404 = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    });
    return <></>;
};
export default error404;
