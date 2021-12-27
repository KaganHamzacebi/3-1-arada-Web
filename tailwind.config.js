// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                "theme-green": "#a28566",
                "theme-brown": "#d2ba93",
            },
            textColor: {
                "theme-green": "#a28566",
                "theme-brown": "#d2ba93"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}