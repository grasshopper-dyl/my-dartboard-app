import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
const inter = Inter({ subsets: ['latin'] })
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Dart Scoreboard</title>
        <meta name="description" content="High quality score tracking and statistics for darts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Layout>
<Hero/>
</Layout>
     </>
   )
   }