const polished = require('polished')

const breakpoints = {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
    print: { raw: 'print' },
}

const fluidValue = (min, max) => polished.between(min, max, '20rem', '90rem')

module.exports = {
    content: [
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/contexts/**/*.{js,jsx,ts,tsx}',
        './src/hooks/**/*.{js,jsx,ts,tsx}',
        './src/layouts/**/*.{js,jsx,ts,tsx}',
        './src/lib/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/utils/**/*.{js,jsx,ts,tsx}',
        './tailwind.variants.ts',
        './tw-safelist.txt',
    ],
    theme: {
        extend: {
            spacing: {
                em: '1em',
                128: '32rem', // 512px
                144: '36rem', // 576px
                160: '40rem', // 640px
                192: '48rem', // 768px
                224: '56rem', // 896px
                256: '64rem', // 1024px
                320: '80rem', // 1280px
                360: '90rem', // 1440px
                vw: '100vw',
                vh: '100vh',
                full: '100%',
            },
            minHeight: theme => ({
                ...theme('spacing'),
            }),
            zIndex: {
                top: '9999',
                bottom: '-9999',
                '-1': '-1',
            },
        },
        screens: breakpoints,
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#222222',
            white: '#ffffff',
            outline: 'rgba(59, 130, 246, 0.5)',
            gray: {
                50: '#fafafa',
                100: '#f5f5f5',
                200: '#e5e5e5',
                300: '#d4d4d4',
                400: '#a3a3a3',
                500: '#737373',
                600: '#525252',
                700: '#404040',
                800: '#262626',
                900: '#171717',
            },
        },
        fontSize: {
            xxs: '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            intro: fluidValue('1rem', '1.25rem'),
            display1: fluidValue('1.875rem', '4rem'),
            display2: fluidValue('1.5rem', '3rem'),
            h1: fluidValue('1.25rem', '2.25rem'),
            h2: fluidValue('1.25rem', '1.875rem'),
            h3: fluidValue('1.25rem', '1.5rem'),
            h4: fluidValue('1rem', '1.25rem'),
            h5: '1rem',
            h6: '1rem',
        },
        lineHeight: {
            none: 1,
            tight: 1.25,
            snug: 1.375,
            normal: 1.5,
            relaxed: 1.625,
            loose: 2,
        },
        borderRadius: {
            none: '0',
            DEFAULT: '3px',
            5: '5px',
            8: '8px',
            16: '16px',
            100: '100%',
            full: '9999px',
        },
        transitionDuration: {
            DEFAULT: '200ms',
        },
        transitionTimingFunction: {
            DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },
    variants: {},
    plugins: [
        // https://github.com/tailwindlabs/tailwindcss-forms
        require('@tailwindcss/forms'),
        // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
        require('@tailwindcss/aspect-ratio'),
    ],
}
