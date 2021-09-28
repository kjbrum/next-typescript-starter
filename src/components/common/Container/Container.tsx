import cx from 'classnames'
import { Box } from '@/components/core'
import type { ContainerProps } from '.'

const Container = ({ className = '', ...props }: ContainerProps) => (
    <Box
        className={cx(
            'w-full max-w-screen-2xl mx-auto my-0 px-6 sm:px-8',
            className
        )}
        {...props}
    />
)

export default Container
