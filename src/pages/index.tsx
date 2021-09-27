import type { ReactElement } from 'react'
import type { NextPage } from 'next'
import BaseLayout from '@/layouts/BaseLayout'
import { Heading } from '@/components/core'

const Home: NextPage = () => {
    return (
        <main className="p-8 md:p-16 text-center">
            <Heading className="pb-4">
                Welcome to the Simple Focus Next.js Starter!
            </Heading>
        </main>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>
}

export default Home
