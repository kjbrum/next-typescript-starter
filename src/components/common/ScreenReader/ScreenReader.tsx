import cx from 'classnames'
import { Box } from '@/components/core'
import type { ScreenReaderProps } from '.'

const ScreenReader = ({ className = '', ...props }: ScreenReaderProps) => (
    <Box
        as="span"
        className={cx('sr-only focus:not-sr-only', className)}
        {...props}
    />
)

export default ScreenReader
