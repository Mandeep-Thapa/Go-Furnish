import { Head, Html, Main, NextScript } from "next/document"
import type { DocumentProps } from "next/document"

export default function Document(props: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Your e-commerce website description" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

