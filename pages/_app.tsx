import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import ChatWidget from '../components/ChatWidget'
import { SUPPORT } from '../lib/support.config'

export default function App({ Component, pageProps }: AppProps) {
  return       <><Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TestPilot" />
        <meta property="og:description" content="Paste a prompt and expected behavior; get an eval checklist and version regression guard. For dev and QA teams shipping LLM-powered product features." />
        <meta property="og:url" content="https://testpilot-ai.lxsaihub.com/" />
        <meta property="og:image" content="https://testpilot-ai.lxsaihub.com/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TestPilot" />
        <meta name="twitter:description" content="Paste a prompt and expected behavior; get an eval checklist and version regression guard. For dev and QA teams shipping LLM-powered product features." />
        <meta name="twitter:image" content="https://testpilot-ai.lxsaihub.com/og.png" />
                                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"SoftwareApplication","name":"TestPilot","url":"https://testpilot-ai.lxsaihub.com/","description":"Paste a prompt and expected behavior; get an eval checklist and version regression guard. For dev and QA teams shipping LLM-powered product features.","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","priceCurrency":"USD","price":"0","availability":"https://schema.org/OnlineOnly"}}' }} />
      </Head>
      <Component {...pageProps} />
      <ChatWidget productName={SUPPORT.productName} brandColor={SUPPORT.brandColor} sessionKeyPrefix={SUPPORT.productSlug} /></>
}
