import { motion } from "framer-motion"
import { Trans_Page } from "../../components/_Animations"

const Page_Lofts = e => {
    return (
        <motion.div
            variants={Trans_Page}
            initial="initial" animate="animate" exit='exit'
        >
            <section className="min-h-screen mt-36">
                <p className="text-4xl">Lofts List</p>

            </section>
        </motion.div>
    )
}

export default Page_Lofts