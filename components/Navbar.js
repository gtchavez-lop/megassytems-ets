import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence } from 'framer-motion'
import { MdLanguage, MdLightMode, MdMenu, MdOutlineClose, MdOutlinePhone, MdOutlineContactSupport } from 'react-icons/md'

import SideMenu from './SideMenu'

const Navbar = e => {
    const [_sideMenuOpen, _setSideMenuOpen] = useState(false)

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                {_sideMenuOpen ? <SideMenu closeHandler={() => _setSideMenuOpen(false)} /> : null}
            </AnimatePresence>
            <div className="fixed w-full top-0 left-0 z-50 navbar px-5 lg:px-20 shadow-lg bg-base-300 text-base-content">
                <div className="navbar-start">
                    <Link href="/">
                        <div className="hidden lg:flex items-center cursor-pointer">
                            <Image src='/brand_white.svg' width={30} height={30} />
                            <span className=" ml-4" style={{ fontFamily: 'Exo 2' }}>
                                MegaSystems - ETS
                            </span>
                        </div>
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={() => _setSideMenuOpen(!_sideMenuOpen)}
                            className="btn btn-ghost btn-square">
                            {_sideMenuOpen ? <MdOutlineClose size={25} /> : <MdMenu size={25} />}
                        </button>
                    </div>
                </div>
                <div className="lg:hidden navbar-center">
                    <Link href="/">
                        <div className="cursor-pointer flex items-center">
                            <Image src='/brand_white.svg' width={30} height={30} />
                            <span className="hidden md:block text-lg ml-4" style={{ fontFamily: 'Exo 2' }}>
                                MegaSystems - ETS
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex items-center">
                        <Link href='/races'>
                            <button className="btn btn-ghost btn-sm rounded-sm">
                                Races
                            </button>
                        </Link>
                        <Link href='/lofts'>
                            <button className="btn btn-ghost btn-sm rounded-sm">
                                Lofts
                            </button>
                        </Link>
                        <button className="btn btn-ghost btn-sm rounded-sm">
                            Fanciers
                        </button>

                        <div className="divider divider-vertical mx-3" />
                        <div className="flex items-center gap-1">
                            <div data-tip="Language Selector" className="tooltip tooltip-bottom tooltip-secondary">
                                <button className="btn btn-ghost btn-sm btn-circle">
                                    <MdLanguage size={18} />
                                </button>
                            </div>
                            <div data-tip="Color Scheme" className="tooltip tooltip-bottom tooltip-secondary">
                                <button className="btn btn-ghost btn-sm btn-circle">
                                    <MdLightMode size={18} />
                                </button>
                            </div>
                            <div data-tip="Contact Us" className="tooltip tooltip-bottom tooltip-secondary">
                                <button className="btn btn-ghost btn-sm btn-circle">
                                    <MdOutlinePhone size={18} />
                                </button>
                            </div>
                            <div data-tip="About Us" className="tooltip tooltip-bottom tooltip-secondary">
                                <button className="btn btn-ghost btn-sm btn-circle">
                                    <MdOutlineContactSupport size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden items-center gap-2">
                        <div data-tip="Language Selector" className="tooltip tooltip-left tooltip-secondary">
                            <button className="btn btn-ghost btn-sm btn-circle">
                                <MdLanguage size={18} />
                            </button>
                        </div>
                        <div data-tip="Color Scheme" className="tooltip tooltip-left tooltip-secondary">
                            <button className="btn btn-ghost btn-sm btn-circle">
                                <MdLightMode size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar