/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'green': '#02B43d',
                "light-green": "#00c541",
                "third-green": "#00C541"
            },
            keyframes: {
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            animation: {
                slideIn: 'slideIn 1s ease-out forwards',
            },
            container:{
                center: true
            }
        },
    },
    plugins: [],

}