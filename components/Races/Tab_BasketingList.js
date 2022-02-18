import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { MdGridView, MdList } from "react-icons/md"
import { Trans_Tab } from '../_Animations'
import Card_BasketingList from "./Card_BasketingList"

const Tab_BasketingList = e => {

    const [_view_DisplayType, _set_view_DisplayType] = useState('list')

    return (
        <>
            {/* header */}
            <div className="flex flex-col lg:flex-row justify-between align-middle">
                <p className="text-3xl text-center lg:text-left">Basketing List</p>
                <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-0 gap-2">
                    <input className="input input-bordered input-md lg:input-sm" type='text' placeholder="Search in this list" />

                    <div className="flex gap-2 justify-between lg:justify-end w-full">
                        <select className="select select-bordered select-md lg:select-sm">
                            <option> &#9650; Name</option>
                            <option> &#9660; Name</option>
                            <option> &#9650; Date Registered</option>
                            <option> &#9660; Date Registered</option>
                            <option> &#9650; Status</option>
                            <option> &#9660; Status</option>
                        </select>
                        <button
                            onClick={() => _set_view_DisplayType(_view_DisplayType === 'grid' ? 'list' : 'grid')}
                            className="btn btn-ghost btn-md lg:btn-sm gap-2">
                            {_view_DisplayType === 'list' ? (
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

            {/* content */}
            <AnimatePresence>
                {_view_DisplayType == 'grid' && (
                    <motion.div
                        variants={Trans_Tab}
                        initial='initial' animate='animate'
                        className="mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <Card_BasketingList
                                country={'PH'}
                                fancier={'John Doe'}
                                id={'12345'}
                                name={'John Doe'}
                                basketTime={'2020-01-01'}
                                viewType='card' />
                            <Card_BasketingList
                                country={'PH'}
                                fancier={'John Doe'}
                                id={'12345'}
                                name={'John Doe'}
                                basketTime={'2020-01-01'}
                                viewType='card' />
                            <Card_BasketingList
                                country={'PH'}
                                fancier={'John Doe'}
                                id={'12345'}
                                name={'John Doe'}
                                basketTime={'2020-01-01'}
                                viewType='card' />
                            <Card_BasketingList
                                country={'PH'}
                                fancier={'John Doe'}
                                id={'12345'}
                                name={'John Doe'}
                                basketTime={'2020-01-01'}
                                viewType='card' />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {_view_DisplayType == 'list' && (
                    <motion.div
                        variants={Trans_Tab}
                        initial='initial' animate='animate'
                        className="mt-10">
                        <div className="flex flex-col items-stretch gap-3 overflow-x-scroll pb-5">
                            <Card_BasketingList
                                country={'PH'}
                                fancier={'John Doe'}
                                id={'12345'}
                                name={'John Doe'}
                                basketTime={'2020-01-01'}
                                viewType='list' />
                            <Card_BasketingList
                                country={'PH'}
                                fancier={'John Doe'}
                                id={'12345'}
                                name={'John Doe'}
                                basketTime={'2020-01-01'}
                                viewType='list' />
                            <Card_BasketingList
                                country={'PH'}
                                fancier={'John Doe'}
                                id={'12345'}
                                name={'John Doe'}
                                basketTime={'2020-01-01'}
                                viewType='list' />

                        </div>


                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Tab_BasketingList