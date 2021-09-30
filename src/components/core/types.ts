import type { ElementType, ReactNode } from 'react'

/**
 * Base
 */
export type BoxProps = {
    as?: ElementType<any>,
    __variantKey?:
        | 'flex'
        | 'grid'
        | 'text'
        | 'heading'
        | 'link'
        | 'button'
        | 'image'
        | 'label'
        | 'input'
        | 'textarea'
        | 'select'
        | 'radio'
        | 'checkbox'
        | 'switch',
    variant?: string,
    className?: string,
    children: ReactNode,
    [x: string]: any,
}

export type FlexProps = BoxProps

export type GridProps = BoxProps

export type TextProps = BoxProps & {
    variant?: 'intro',
}

export type HeadingProps = BoxProps & {
    variant?: 'display1' | 'display2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

// TODO: Extend NextLink types?
export type LinkProps = BoxProps & {
    href: string,
    prefetch?: boolean,
    replace?: boolean,
    scroll?: boolean,
    shallow?: boolean,
    variant?: 'compact',
}

export type ButtonProps = BoxProps & {
    as?: 'button',
    type?: string,
    variant?: 'filled' | 'outline',
}

// TODO: Extend NextImage types?
export type ImageProps = BoxProps & {
    ratio?: string,
    width?: number,
    height?: number,
    layout?: 'intrinsic' | 'fixed' | 'responsive' | 'fill',
    src: string,
    alt?: string,
}

export type SvgProps = BoxProps & {
    xmlns?: string,
    width?: number,
    height?: number,
}

export type AspectRatioProps = BoxProps & {
    ratio?: string,
}

export type AspectImageProps = BoxProps &
    ImageProps & {
        ratio?: string,
    }

export type EmbedProps = BoxProps & {
    ratio?: string,
    src: string,
    frameBorder?: number,
    allowFullScreen?: boolean,
    allow?: string,
}

/**
 * Forms
 */
export type LabelProps = BoxProps

export type InputProps = BoxProps & {
    type?: string,
}

export type TextareaProps = BoxProps

export type SelectProps = BoxProps

export type RadioProps = BoxProps & {
    label?: string | ReactNode,
    labelClassName?: string,
}

export type CheckboxProps = BoxProps & {
    label?: string | ReactNode,
    labelClassName?: string,
}

export type SwitchProps = BoxProps & {
    checked?: boolean,
    onLabel?: string | ReactNode,
    offLabel?: string | ReactNode,
    labelClassName?: string,
}
