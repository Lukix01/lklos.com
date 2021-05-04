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
                basic: ["Roboto"],
            },
            textColor: {
                yellow: "#A4B638",
                red: "#B63838",
                green: "#38B66A",
                blue: "#38A7B6",
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
