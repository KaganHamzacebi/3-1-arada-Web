// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                "theme-green": "#92A74B",
                "theme-brown": "#EADFD1",
            },
            textColor: {
                "theme-green": "#92A74B",
                "theme-brown": "#EADFD1"
            },
            colors: {
                "theme-green": "92A74B"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}