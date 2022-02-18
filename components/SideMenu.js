import { motion } from "framer-motion"
import { Trans_SideMenu_Content, Trans_SideMenu_Overlay } from './_Animations'
import Link from "next/link"

const SideMenu = ({ closeHandler }) => {
    return (
        <>
            <motion.div
                variants={Trans_SideMenu_Overlay}
                initial="initial" animate="open" exit="exit"
                className="fixed top-0 left-0 lg:hidden h-screen w-screen bg-black bg-opacity-20 z-40">
                <motion.div
                    variants={Trans_SideMenu_Content}
                    initial="initial" animate="open" exit="exit"
                    className="absolute top-0 left-0 h-full w-3/4 md:w-1/2 bg-base-300 flex flex-col justify-center gap-2 overflow-hidden"
                >
                    <Link href='/'>
                        <button
                            onClick={() => closeHandler()}
                            className="btn btn-block btn-ghost rounded-none">Home</button>
                    </Link>
                    <Link href='/races'>
                        <button
                            onClick={() => closeHandler()}
                            className="btn btn-block btn-ghost rounded-none">Races</button>
                    </Link>
                    <Link href='/lofts'>
                        <button
                            onClick={() => closeHandler()}
                            className="btn btn-block btn-ghost rounded-none">Lofts</button>
                    </Link>
                    <button
                        onClick={() => closeHandler()}
                        className="btn btn-block btn-ghost rounded-none">Fanciers</button>
                    <button
                        onClick={() => closeHandler()}
                        className="btn btn-block btn-ghost rounded-none">About</button>
                    <button
                        onClick={() => closeHandler()}
                        className="btn btn-block btn-ghost rounded-none">Contact</button>
                </motion.div>
            </motion.div>
        </>
    )
}

export default SideMenu