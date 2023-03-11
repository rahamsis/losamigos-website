import React from "react";
import { useEffect, useState, useRef } from "react";
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { navigation } from '../../constants';
import { Link } from "react-scroll";

const NavbarPrincipal = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [active, setActive] = useState("");

    const [textColor, setTextColor] = useState("text-guinda");

    const styleActive = "border-b-[3px]"
    const image = "logo_red.png";

    return (
        <div className={`fixed z-20 w-full bg-crema`}>
            <div className="container max-w-screen-xl mx-auto ss:px-12 px-6">
                <div className="flex md:py-7 xs:py-5 justify-between items-center">
                    <Link
                        onClick={() => setActive("/")}
                        to='/'
                        offset={-100}
                        duration={500}
                        smooth={true}
                    >
                        <img src={`/images/${image}`} alt="hoobank" className="w-[170px] cursor-pointer" />
                    </Link>

                    <ul className="list-none lg:flex hidden justify-end items-center flex-1">
                        {navigation.map((nav) => (
                            <li
                                key={nav.name}
                                className={`cursor-pointer text-base py-2 border-guinda text-dorado hover:text-guinda
                                ${active === nav.name ? styleActive : ""}
                                `}
                            >
                                <Link
                                    onClick={() => setActive(nav.name)}
                                    spy={true}
                                    to={nav.href}
                                    offset={-110}
                                    duration={500}
                                    smooth={true}
                                    className={`cursor-pointer text-base hover:border-b-guindaClaro py-2 border-2 border-transparent px-3`}>
                                    {nav.name}
                                </Link>
                                {/* <a href={nav.href} className="flex items-center justify-center py-2">
                                    <ChevronDownIcon className="w-3  text-transparent" /> {nav.name} <ChevronDownIcon className="w-3 text-transparent" />
                                </a> */}
                            </li>
                        ))}
                        <div className="order-3 mt-2 sm:order-2 sm:mt-0 sm:w-auto ml-4">
                            <a href="#" className="text-lg font-medium bg-guinda px-10 py-5 rounded-2xl text-white hover:text-doradoClaro">
                                Записаться
                            </a>
                        </div>
                    </ul>

                    <div className="lg:hidden">
                        <button
                            type="button"
                            className={`flex items-center justify-center rounded-md p-1 ${textColor}`}
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {
                                mobileMenuOpen ? (
                                    <XMarkIcon className="h-11 w-11" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="h-11 w-11"aria-hidden="true" />
                                )
                            }
                            {/* <Bars3Icon className="h-11 w-11"aria-hidden="true" /> */}

                        </button>
                    </div>
                </div>

                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel focus="true" className="fixed inset-0 z-20 overflow-y-auto bg-crema lg:hidden">
                        <div className="flex items-center justify-between container max-w-screen-2xl mx-auto ss:px-12 px-6 py-6">
                            <div className="flex">
                                <a href="#" className="">
                                    <span className="sr-only">Your Company</span>
                                    {/* <img src={`/images/${image}`} alt="hoobank" className="w-[170px]" /> */}
                                </a>
                            </div>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="flex items-center justify-center rounded-md p-1 text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 flow-root container max-w-screen-2xl mx-auto px-12">
                            <div className="">
                                <div className="text-center">
                                    {navigation.map((item) => (
                                        <Link
                                            onClick={() => setMobileMenuOpen(false)}
                                            spy={true}
                                            to={item.href}
                                            offset={-95}
                                            duration={500}
                                            smooth={true}
                                            className={`block py-2 px-3 text-xl font-medium font-montserrat text-doradoOscuro hover:text-guinda`}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                        <a href="#" className="flex items-center justify-center  border border-transparent bg-guinda px-20 py-8 rounded-2xl text-2xl font-medium text-white  hover:text-doradoClaro">
                                            Записаться
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </div>
    );
};

export default NavbarPrincipal;