import Head from "next/head"
import { motion } from "framer-motion"
import { Trans_Page } from "../components/_Animations"

const IndexPage = e => {
  return (
    <>
      <Head>
        <title>Home | MegaSystems-ETS </title>
      </Head>

      <motion.div
        variants={Trans_Page}
        initial="initial" animate="animate" exit='exit'
      >
        <section className="min-h-screen flex flex-col justify-center items-center">
          <p className="text-2xl text-accent">This is a Landing Page</p>
        </section>
        <section className="min-h-screen flex flex-col justify-center items-center">
          <p className="text-2xl text-accent">This is where the features comes in</p>
        </section>

      </motion.div>

    </>
  )
}

export default IndexPage