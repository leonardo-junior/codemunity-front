import Head from 'next/head'
import { Flex } from '@styles/commonStyles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Codemunity</title>
        <meta name="description" content="Página inicial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <Flex>Hello World!</Flex>
    </>
  )
}
