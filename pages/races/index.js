import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import Head from "next/head"
import { useState } from "react"
import { MdGridView, MdList, MdViewList } from "react-icons/md"
import Card_Race from "../../components/Races/Card_Race"
import { Trans_Page, Trans_Tab } from "../../components/_Animations"

const Page_Races = e => {

    const [_view_displayType, set_view_displayType] = useState('list')

    return (
        <>
            <Head>
                <title>Races | MegaSystems-ETS </title>
            </Head>
            <motion.div
                variants={Trans_Page}
                initial="initial" animate="animate" exit='exit'
            >
                <section className="min-h-screen my-28 lg:my-36">
                    {/* header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                        <p className="text-4xl">Races List</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-0 gap-2">
                            <input className="input input-bordered input-md lg:input-sm w-full flex-grow" type='text' placeholder="Search in this list" />


                            <div className="flex gap-2 justify-between lg:justify-end w-full">
                                <select className="select select-bordered max-w-sm select-md lg:select-sm">
                                    <option> &#9650; Name</option>
                                    <option> &#9660; Name</option>
                                    <option> &#9650; Date Registered</option>
                                    <option> &#9660; Date Registered</option>
                                    <option> &#9650; Status</option>
                                    <option> &#9660; Status</option>
                                </select>
                                <button
                                    onClick={() => set_view_displayType(_view_displayType === 'grid' ? 'list' : 'grid')}
                                    className="btn btn-ghost btn-md lg:btn-sm gap-2">
                                    {_view_displayType === 'grid' ? (
                                        <>
                                            <MdGridView size={25} />
                                            <span className="hidden lg:block">Grid View</span>
                                        </>
                                    ) : (
                                        <>
                                            <MdList size={25} />
                                            <span className="hidden lg:block">List View</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* content | grid */}
                    <AnimatePresence >
                        {_view_displayType === 'grid' && (
                            <motion.div
                                layout
                                variants={Trans_Tab} initial='initial' animate='animate'
                                className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                <Card_Race raceID={1000} viewType="card" />
                                <Card_Race raceID={1000} viewType="card" />
                                <Card_Race raceID={1000} viewType="card" />
                                <Card_Race raceID={1000} viewType="card" />
                                <Card_Race raceID={1000} viewType="card" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* content | list */}
                    <AnimatePresence >
                        {_view_displayType === 'list' && (
                            <motion.div
                                layout
                                className="mt-10 overflow-x-scroll"
                                variants={Trans_Tab} initial='initial' animate='animate'
                            >
                                <table className="table w-full select-none table-compact">
                                    <thead>
                                        <tr>
                                            <th>Status</th>
                                            <th>Race Name</th>
                                            <th>Participating Loft</th>
                                            <th>Arrivals</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Card_Race raceID={1000} viewType="list" />
                                        <Card_Race raceID={1000} viewType="list" />
                                        <Card_Race raceID={1000} viewType="list" />
                                        <Card_Race raceID={1000} viewType="list" />
                                        <Card_Race raceID={1000} viewType="list" />
                                    </tbody>
                                </table>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </section>
            </motion.div>
        </>
    )
}

export default Page_Races