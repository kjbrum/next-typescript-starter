import type { ReactElement } from 'react'
import { BaseLayout } from '@/layouts/BaseLayout'
import { Heading } from '@/components/core'

const Home = () => {
    return (
        <main className="p-8 md:p-16 text-center">
            <Heading className="pb-4">
                Welcome to the Next + TypeScript + TailwindCSS Starter!
            </Heading>
        </main>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>
}

export default Home
