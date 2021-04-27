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
            },
            spacing: {
                card: "42rem",
            },
            borderRadius: {
                card: "2rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
