import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import SignUp from '../components/SignUp'

function signup() {
  return (
<>
<Head>
        <title>The Dart Scoreboard</title>
        <meta name="description" content="High quality score tracking and statistics for darts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Layout>
<SignUp/>
</Layout>
</>
  )
}

export default signup
