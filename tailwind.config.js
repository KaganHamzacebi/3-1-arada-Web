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
                "theme-darkerbrown": "#4E2F24",
                "theme-pink": "#D18390"
            },
            colors: {
                "theme-green": "#92A74B",
                "theme-pink": "#D18390"
            },
            scale: {
                '105': '1.05',
            },
            rotate: {
                '18': '18deg',
            },
            spacing: {
                '13': '3.25rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}