// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                "theme-green": "#92A74B",
                "theme-brown": "#EADFD1",
                "theme-darkbrown": "#C3765A",
                "theme-darkerbrown": "#4E2F24",
                "theme-blue": "#C45567",
                "theme-gray": "#E6E5E5"
            },
            textColor: {
                "theme-green": "#92A74B",
                "theme-brown": "#EADFD1",
                "theme-darkbrown": "#C3765A",
                "theme-darkerbrown": "#4E2F24"
            },
            colors: {
                "theme-green": "92A74B"
            },
            scale: {
                '105': '1.05',
            },
            rotate: {
                '18': '18deg',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}