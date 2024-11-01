import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '@/styles/app.css'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode,
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout,
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
    return getLayout(<Component {...pageProps} />)
}

export default MyApp
