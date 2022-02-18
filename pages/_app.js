import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return (
    <>
      {/* head */}
      <Head>
        <link rel='shortcut icon' href='/brand_white.svg' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>

      {/* navbar */}
      <Navbar />

      {/* body */}
      <div className='px-5 lg:px-20'>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export default MyApp
