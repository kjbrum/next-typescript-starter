import type { NextPage } from 'next'
import Head from 'next/head'

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

            <main>
                <h1>Welcome to the Simple Focus Next.js Starter!</h1>
            </main>
        </>
    )
}

export default Home
