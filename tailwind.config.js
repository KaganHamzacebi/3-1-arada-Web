// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                "theme-green": "#92A74B",
                "theme-brown": "#EADFD1",
                "theme-darkbrown": "#ffc8a2",
            },
            textColor: {
                "theme-green": "#92A74B",
                "theme-brown": "#EADFD1"
            },
            colors: {
                "theme-green": "92A74B"
            },
            scale: {
                '105': '1.05',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}