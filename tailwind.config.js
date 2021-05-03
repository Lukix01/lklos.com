module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                basic: ["Roboto Mono"],
            },
            textColor: {
                primary: "#495464",
                yellow: "#A4B638",
                red: "#B63838",
                green: "#38B66A",
                blue: "#38A7B6",
            },
            spacing: {
                card: "42rem",
            },
            borderRadius: {
                card: "2rem",
            },
            borderRadius: {
                basic: "5rem",
            },
            backgroundColor: (theme) => ({
                ...theme("colors"),
                basic: "#18191A",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
