import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Preconnect to third-party servers */}
                    {/* <link
                        rel="preconnect"
                        href="https://www.google-analytics.com"
                    /> */}

                    {/* Preload local fonts */}
                    {/* <link
                        rel="preload"
                        href="/fonts/ProximaVara.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    /> */}

                    {/* Load custom fonts without waiting for CSS to load */}
                    {/* <style
                        dangerouslySetInnerHTML={{
                            __html: `
                                @font-face {
                                    font-family: 'Proxima Vara';
                                    src: url('/fonts/Proxima.woff2') format('woff2'),
                                            url('/fonts/Proxima.woff2') format('woff2'),
                                            url('/fonts/Proxima.woff') format('woff'),
                                            url('/fonts/Proxima.woff') format('woff');
                                    font-weight: 50 1000;
                                    font-display: swap;
                                }
                            `,
                        }}
                    /> */}
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
