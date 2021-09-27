import Head from 'next/head'
import { Flex } from '@/components/core'
import { Footer, Header, ScreenReader } from '@/components/common'

const BaseLayout = ({ title, description, children }) => (
    <>
        <Head>
            <title>{title && `${title} | `}Simple Focus Next.js Starter</title>
            <meta
                name="description"
                content={
                    description || 'Simple Focus Next.js starter project demo.'
                }
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ScreenReader as="a" href="#content">
            Skip to content
        </ScreenReader>

        <Flex className="flex-col min-h-screen">
            <Header />

            <Flex
                as="main"
                id="content"
                role="main"
                className="flex-1 flex-col"
            >
                {children}
            </Flex>

            <Footer />
        </Flex>
    </>
)

BaseLayout.defaultProps = {
    title: '',
    children: null,
}

export default BaseLayout
