import { Box, Flex, Link } from '@/components/core'
import { Container } from '@/components/common'

const Header = () => (
    <Box as="header" className="py-6 bg-gray-800">
        <Flex as={Container} className="content-between items-center">
            <Box className="flex-grow">
                <Link href="/" className="text-white font-bold">
                    Simple Focus Next.js Starter
                </Link>
            </Box>

            <Box as="nav">
                <Flex as="ul" className="space-x-4">
                    <Box as="li">
                        <Link
                            href="/"
                            className="text-white hover:underline focus:underline"
                        >
                            Home
                        </Link>
                    </Box>

                    <Box as="li">
                        <Link
                            href="/patterns"
                            className="text-white hover:underline focus:underline"
                        >
                            Patterns
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    </Box>
)

export default Header
