import { forwardRef } from 'react'
import { default as NextLink } from 'next/link'
import { default as NextImage } from 'next/image'
import cx from 'classnames'
import { parseVideoUrl, getMargin, omitMargin } from '@/utils/helpers'
import twVariants from '@root/tailwind.variants'

export const Box = forwardRef(
    (
        {
            as: Tag = 'div',
            __variantKey = null,
            variant = null,
            className,
            ...props
        },
        ref
    ) => (
        <Tag
            ref={ref}
            className={cx([
                __variantKey &&
                    variant && [
                        twVariants?.[__variantKey]?.['DEFAULT'],
                        twVariants?.[__variantKey]?.[variant],
                    ],
                className,
            ])}
            {...props}
        />
    )
)
Box.displayName = 'Box'

export const Flex = forwardRef(({ className, ...props }, ref) => (
    <Box ref={ref} className={cx('flex', className)} {...props} />
))
Flex.displayName = 'Flex'

export const Grid = forwardRef(({ className, ...props }, ref) => (
    <Box
        ref={ref}
        __variantKey="grids"
        className={cx('grid', className)}
        {...props}
    />
))
Grid.displayName = 'Grid'

export const Text = forwardRef((props, ref) => (
    <Box ref={ref} as="p" __variantKey="texts" {...props} />
))
Text.displayName = 'Text'

export const Heading = forwardRef((props, ref) => (
    <Box ref={ref} as="h2" __variantKey="headings" variant="h2" {...props} />
))
Heading.displayName = 'Heading'

export const Link = forwardRef(
    ({ href, as, prefetch, replace, scroll, shallow, ...props }, ref) => {
        return href &&
            (href.startsWith('http') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:')) ? (
            <Box
                ref={ref}
                as="a"
                __variantKey="links"
                href={href}
                rel="nofollow noopener"
                {...props}
            />
        ) : (
            <NextLink
                href={href.replace(/^\/?([^\/]+(?:\/[^\/]+)*)\/?$/, '/$1')}
                as={as}
                prefetch={prefetch}
                replace={replace}
                scroll={scroll}
                shallow={shallow}
                passHref={true}
            >
                <Box ref={ref} as="a" __variantKey="links" {...props} />
            </NextLink>
        )
    }
)
Link.displayName = 'Link'

export const Button = forwardRef((props, ref) => (
    <Box
        ref={ref}
        as="button"
        __variantKey="buttons"
        type={props?.as && props.as !== 'button' ? null : 'button'}
        {...props}
    />
))
Button.displayName = 'Button'

export const Image = forwardRef(
    ({ ratio = 4 / 3, width, height, src, ...props }, ref) => (
        <Box
            ref={ref}
            as={NextImage}
            __variantKey="images"
            alt=""
            width={width}
            height={height || (width && width / ratio)}
            src={src}
            {...props}
        />
    )
)
Image.displayName = 'Image'

export const SVG = ({ width = 16, height = 16, ...props }) => (
    <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={width + 'px'}
        height={height + 'px'}
        viewBox={`0 0 ${parseInt(width, 10)} ${parseInt(height, 10)}`}
        fill="currentcolor"
        {...props}
    />
)
SVG.displayName = 'SVG'

export const AspectRatio = forwardRef(
    ({ ratio = '4 / 3', className, ...props }, ref) => {
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

export const AspectImage = forwardRef(
    ({ ratio = '4 / 3', className, ...props }, ref) => (
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
        },
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
