import { forwardRef } from 'react'
import { default as NextLink } from 'next/link'
import { default as NextImage } from 'next/image'
import cx from 'classnames'
import { parseVideoUrl, getMargin, omitMargin } from '@/utils/helpers'
import TailwindVariants, { TailwindVariantTypes } from '@root/tailwind.variants'
import type {
    BoxProps,
    FlexProps,
    GridProps,
    TextProps,
    HeadingProps,
    LinkProps,
    ButtonProps,
    ImageProps,
    SvgProps,
    AspectRatioProps,
    AspectImageProps,
    EmbedProps,
} from '.'

/**
 * Box
 */
export const Box = forwardRef(
    (
        {
            as: Tag = 'div',
            __variantKey,
            variant = '',
            className,
            ...props
        }: BoxProps,
        ref
    ) => (
        <Tag
            ref={ref}
            className={cx([
                __variantKey &&
                    variant && [
                        TailwindVariants?.[__variantKey]?.['DEFAULT'],
                        TailwindVariants?.[__variantKey]?.[variant],
                    ],
                className,
            ])}
            {...props}
        />
    )
)

Box.displayName = 'Box'

/**
 * Flex
 */
export const Flex = forwardRef(({ className, ...props }: FlexProps, ref) => (
    <Box
        ref={ref}
        __variantKey="flex"
        className={cx('flex', className)}
        {...props}
    />
))

Flex.displayName = 'Flex'

/**
 * Grid
 */
export const Grid = forwardRef(({ className, ...props }: GridProps, ref) => (
    <Box
        ref={ref}
        __variantKey="grid"
        className={cx('grid', className)}
        {...props}
    />
))

Grid.displayName = 'Grid'

/**
 * Text
 */
export const Text = forwardRef((props: TextProps, ref) => (
    <Box ref={ref} as="p" __variantKey="text" {...props} />
))

Text.displayName = 'Text'

/**
 * Heading
 */
export const Heading = forwardRef((props: HeadingProps, ref) => (
    <Box ref={ref} as="h2" __variantKey="heading" variant="h2" {...props} />
))

Heading.displayName = 'Heading'

/**
 * Link
 */
export const Link = forwardRef(
    (
        { href, as, prefetch, replace, scroll, shallow, ...props }: LinkProps,
        ref
    ) => {
        return href.startsWith('http') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ? (
            <Box
                ref={ref}
                as="a"
                __variantKey="link"
                href={href}
                rel="nofollow noopener"
                {...props}
            />
        ) : (
            <NextLink
                href={href.replace(/^\/?([^\/]+(?:\/[^\/]+)*)\/?$/, '/$1')}
                prefetch={prefetch}
                replace={replace}
                scroll={scroll}
                shallow={shallow}
                passHref={true}
            >
                <Box ref={ref} as="a" __variantKey="link" {...props} />
            </NextLink>
        )
    }
)

Link.displayName = 'Link'

/**
 * Button
 */
export const Button = forwardRef(
    ({ as, type = '', ...props }: ButtonProps, ref) => (
        <Box
            ref={ref}
            as="button"
            __variantKey="button"
            type={as && as !== 'button' ? null : 'button'}
            {...props}
        />
    )
)
Button.displayName = 'Button'

/**
 * Image
 */
export const Image = forwardRef(
    ({ ratio = '4 / 3', width, height, src, ...props }: ImageProps, ref) => (
        <Box
            ref={ref}
            as={NextImage}
            __variantKey="image"
            alt=""
            width={width}
            height={height || (width && width / parseInt(ratio, 10))}
            src={src}
            {...props}
        />
    )
)

Image.displayName = 'Image'

/**
 * SVG
 */
export const SVG = ({ width = 16, height = 16, ...props }: SvgProps) => (
    <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={width + 'px'}
        height={height + 'px'}
        viewBox={`0 0 ${width} ${height}`}
        fill="currentcolor"
        {...props}
    />
)

SVG.displayName = 'SVG'

/**
 * AspectRatio
 */
export const AspectRatio = forwardRef(
    ({ ratio = '4 / 3', className, ...props }: AspectRatioProps, ref) => {
        const [width, height] = ratio.split('/').map(x => x.trim())
        return (
            <Box
                ref={ref}
                className={cx(
                    `aspect-w-${width} aspect-h-${height}`,
                    className
                )}
                {...props}
            />
        )
    }
)

AspectRatio.displayName = 'AspectRatio'

/**
 * AspectImage
 */
export const AspectImage = forwardRef(
    ({ ratio = '4 / 3', className, ...props }: AspectImageProps, ref) => (
        <AspectRatio ratio={ratio} className={getMargin(className)}>
            <Image
                ref={ref}
                ratio={ratio}
                className={cx(
                    'w-full h-full object-cover',
                    omitMargin(className)
                )}
                layout="fill"
                {...props}
            />
        </AspectRatio>
    )
)

AspectImage.displayName = 'AspectImage'

/**
 * Embed
 */
export const Embed = forwardRef(
    (
        {
            ratio = '16 / 9',
            src,
            frameBorder = 0,
            allowFullScreen = true,
            allow,
            className,
            ...props
        }: EmbedProps,
        ref
    ) => (
        <AspectRatio ratio={ratio} className={getMargin(className)}>
            <Box
                ref={ref}
                as="iframe"
                src={parseVideoUrl.createEmbed(src)}
                frameBorder={frameBorder}
                allowFullScreen={allowFullScreen}
                allow={allow || parseVideoUrl.parse(src).allow}
                className={omitMargin(className)}
                {...props}
            />
        </AspectRatio>
    )
)

Embed.displayName = 'Embed'
