import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="alternate" hrefLang="x-default" href="https://testpilot-ai.lxsaihub.com/" />
        <link rel="alternate" hrefLang="en" href="https://testpilot-ai.lxsaihub.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
