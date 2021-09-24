import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Heading, Link } from '@/components/core'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Simple Focus Next.js Starter</title>
                <meta
                    name="description"
                    content="Simple Focus Next.js starter project."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="p-8 text-center">
                <Heading className="pb-4">
                    Welcome to the Simple Focus Next.js Starter!
                </Heading>
                <Link href="patterns">
                    <Button variant="filled">View Patterns</Button>
                </Link>
            </main>
        </>
    )
}

export default Home
