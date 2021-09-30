export type TailwindVariantTypes = {
    // [x in 'flex' | 'grid' | 'text' | 'heading' | 'link' | 'button' | 'image' | 'form']: object,
    flex: Record<string, string>,
    grid: Record<string, string>,
    text: Record<string, string>,
    heading: Record<string, string>,
    link: Record<string, string>,
    button: Record<string, string>,
    image: Record<string, string>,
    // form: {
    //     label: Record<string, string>,
    //     input: Record<string, string>,
    //     textarea: Record<string, string>,
    //     select: Record<string, string>,
    //     radio: Record<string, string>,
    //     checkbox: Record<string, string>,
    //     switch: Record<string, string>,
    // },
    label: Record<string, string>,
    input: Record<string, string>,
    textarea: Record<string, string>,
    select: Record<string, string>,
    radio: Record<string, string>,
    checkbox: Record<string, string>,
    switch: Record<string, string>,
}

const TailwindVariants: TailwindVariantTypes = {
    flex: {},
    grid: {},
    text: {
        intro: 'text-gray-700 font-light leading-relaxed',
    },
    heading: {
        DEFAULT: 'font-bold',
        display1: 'text-display1 leading-none',
        display2: 'text-display2 leading-none',
        h1: 'text-h1 leading-none',
        h2: 'text-h2 leading-tight',
        h3: 'text-h3 leading-tight',
        h4: 'text-h4 leading-tight',
        h5: 'text-h5',
        h6: 'text-h6',
    },
    link: {
        compact: 'uppercase text-sm tracking-wide',
    },
    button: {
        DEFAULT: 'px-6 py-3',
        filled: 'text-white bg-gray-700 rounded hover:bg-gray-800 hover:border-gray-800 focus:bg-gray-800 focus:border-gray-800',
        outline:
            'text-gray-700 bg-transparent rounded ring-2 ring-inset ring-gray-700 hover:bg-gray-100 hover:border-gray-100 hover:ring-gray-800 focus:bg-gray-100 focus:border-gray-100 focus:ring-gray-800',
    },
    image: {},
    label: {},
    input: {},
    textarea: {},
    select: {},
    radio: {},
    checkbox: {},
    switch: {},
}

export default TailwindVariants
