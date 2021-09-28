import { Box, Text } from '@/components/core'
import { Container } from '@/components/common'

const Footer = () => (
    <Box as="footer" className="py-4 bg-gray-800">
        <Container>
            <Text className="text-center text-white">
                &copy; {new Date().getFullYear()} Simple Focus
            </Text>
        </Container>
    </Box>
)

export default Footer
