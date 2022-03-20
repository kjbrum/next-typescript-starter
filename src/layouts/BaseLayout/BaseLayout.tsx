import Head from 'next/head'
import { Flex } from '@/components/core'
import { Footer, Header, ScreenReader } from '@/components/common'
import type { BaseLayoutProps } from '.'

const BaseLayout = ({
    title = '',
    description = '',
    children,
}: BaseLayoutProps) => (
    <>
        <Head>
            <title>
                {title && `${title} | `}Next + TypeScript + TailwindCSS Starter
            </title>
            <meta
                name="description"
                content={
                    description ||
                    'Next + TypeScript + TailwindCSS Starter project demo.'
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

export default BaseLayout
