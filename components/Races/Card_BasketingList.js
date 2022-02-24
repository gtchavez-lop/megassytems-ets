import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import { MdClose, MdPerson, MdSensors } from "react-icons/md"
import Image from "next/image"
import { Trans_BottomMenu_Content, Trans_BottomMenu_Overlay, Trans_SideMenu_Overlay } from "../_Animations"

const _menu_pigeonData = ({ closeHandler, _pigeonData }) => {
    return (
        <motion.div
            variants={Trans_BottomMenu_Overlay}
            initial="initial" animate="open" exit="exit"
            className="w-full h-full bg-black bg-opacity-50 z-40 fixed top-0 left-0">
            <motion.div
                variants={Trans_BottomMenu_Content}
                initial="initial" animate="open" exit="exit"
                className="absolute bottom-0 left-0 w-full h-3/4 pt-5 px-5 lg:px-20 bg-base-100">
                <div className="mt-5 flex items-center gap-3">
                    <button onClick={closeHandler} className="btn btn-square btn-sm"> <MdClose size={25} /> </button>
                    <p className="text-3xl">Pigeon Data</p>
                </div>
            </motion.div>
        </motion.div>
    )
}
const _menu_fancierData = ({ closeHandler, _fancierData }) => {
    return (
        <motion.div
            onClick={(e) => { closeHandler(); e.stopPropagation() }}
            variants={Trans_BottomMenu_Overlay}
            initial="initial" animate="open" exit="exit"
            className="w-full h-full bg-black bg-opacity-50 z-40 fixed top-0 left-0">
            <motion.div
                variants={Trans_BottomMenu_Content}
                initial="initial" animate="open" exit="exit"
                className="absolute bottom-0 left-0 w-full h-3/4 pt-5 px-5 lg:px-20 bg-base-100">
                <div className="mt-5 flex items-center gap-3">
                    <button onClick={closeHandler} className="btn btn-square btn-sm"> <MdClose size={25} /> </button>
                    <p className="text-3xl">Fancier Data</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

const Card_BasketingList = (
    { country, fancier, id, name, basketTime, viewType, _pigeonData, _fancierData }
) => {

    const [_view_PigeonData, set_view_PigeonData] = useState(false)
    const [_view_FancierData, set_view_FancierData] = useState(false)


    if (viewType == 'card') {
        return (
            <>
                <AnimatePresence exitBeforeEnter>
                    {_view_PigeonData && _menu_pigeonData({
                        closeHandler: () => set_view_PigeonData(false),
                    })}
                </AnimatePresence>
                <AnimatePresence exitBeforeEnter>
                    {_view_FancierData && _menu_fancierData({
                        closeHandler: () => set_view_FancierData(false),
                    })}
                </AnimatePresence>
                <div className="card lg:card-side border-2 rounded-lg border-gray-500 border-opacity-50">
                    <div className="card-body p-5">
                        <h2 className="card-title">
                            <span className="text-gray-500 mr-3">{country}</span>
                            <span className="">{fancier}</span>
                        </h2>
                        <div className="flex flex-col justify-between">
                            <div className="flex justify-between">
                                <p className="text-gray-500">Pigeon ID</p>
                                <p >{id}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-500">Pigeon Name</p>
                                <p >{name}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-500">Basket Time</p>
                                <p >{basketTime}</p>
                            </div>
                        </div>

                        <div className="card-actions justify-end mt-2">
                            <button
                                onClick={() => set_view_FancierData(true)}
                                className="btn btn-square btn-sm btn-primary ">
                                <MdPerson size={20} />
                            </button>
                            <button
                                onClick={() => set_view_FancierData(true)}
                                className="btn btn-square btn-sm btn-primary ">
                                <Image src="/brand_white.svg" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if (viewType == 'list') {
        return (
            <>
                <AnimatePresence exitBeforeEnter>
                    {_view_PigeonData && _menu_pigeonData({
                        closeHandler: () => set_view_PigeonData(false),
                    })}
                </AnimatePresence>
                <AnimatePresence exitBeforeEnter>
                    {_view_FancierData && _menu_fancierData({
                        closeHandler: () => set_view_FancierData(false),
                    })}
                </AnimatePresence>
                <div className="min-w-full w-fit mx-2 lg:mx-0 px-5 p-3 border-2 rounded-lg border-gray-500 border-opacity-50">
                    <div className="flex justify-start bg-base-100">
                        <div className="flex flex-col justify-center min-w-fit ">
                            <p className="text-primary font-bold">Pigeon ID</p> 
                            <p className="text-sm">{id}</p>
                        </div>
                        <div className="divider divider-vertical mx-5" />
                        <div className="flex flex-col justify-center min-w-fit ">
                            <p className="text-primary font-bold">Country</p>
                            <p className="text-sm">{country}</p>
                        </div>
                        <div className="divider divider-vertical mx-5" />
                        <div className="flex flex-col justify-center min-w-fit ">
                            <p className="text-primary font-bold">Fancier</p>
                            <p className="text-sm">{fancier}</p>
                        </div>
                        <div className="divider divider-vertical mx-5" />
                        <div className="flex flex-col justify-center min-w-fit ">
                            <p className="text-primary font-bold">Pigeon</p>
                            <p className="text-sm">{name}</p>
                        </div>
                        <div className="divider divider-vertical mx-5" />
                        <div className="flex flex-col justify-center min-w-fit ">
                            <p className="text-primary font-bold">Basketing Time</p>
                            <p className="text-sm">{basketTime}</p>
                        </div>
                        <div className="divider divider-vertical opacity-0 mx-10" />
                        <div className="flex gap-2 min-w-fit ml-auto items-center">
                            <button
                                onClick={() => set_view_FancierData(true)}
                                className="btn btn-square btn-sm btn-primary ">
                                <MdPerson size={20} />
                            </button>
                            <button
                                onClick={() => set_view_FancierData(true)}
                                className="btn btn-square btn-sm btn-primary ">
                                <Image src="/brand_white.svg" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </>

        )
    } else {
        return null
    }
}

export default Card_BasketingList