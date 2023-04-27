import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Login from '../components/Login'
import Layout from '../components/Layout'

export default function ScoreboardPage() {
  return (
    <>
      <Head>
        <title>The Dart Scoreboard</title>
        <meta name="description" content="High quality score tracking and statistics for darts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Layout>
<Login/>
</Layout>
     </>
   )
   }