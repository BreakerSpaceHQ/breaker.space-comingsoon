tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00AAFF",
                "background-dark": "#001122",
                "text-contrast": "#DDEEFF",
                "surface-dark": "#112233",
                "border-dark": "#6699cc",
                "text-secondary": "#667788"
            },
            fontFamily: {
                "logo": ["Montserrat", "sans-serif"],
                "sans": ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"]
            },
            backgroundImage: {
                'smoke-gradient': 'radial-gradient(circle at 50% 50%, rgba(0, 170, 255, 0.15) 0%, rgba(0, 17, 34, 0) 50%)',
            }
        },
    },
}