import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [image, setImage] = useState("logo_red.png");
	return (
		<>
			<nav className="flex w-full  scroll-smooth border-b-2 border-guinda border-dashed">
				<div className="container max-w-screen-xl mx-auto ss:px-12 px-5">
					<div className="flex py-6 justify-between items-center">
						<div className="flex justify-center items-center flex-shrink-0 ">
							<a href="/">
								<img
									src={`/images/${image}`}
									alt="hoobank"
									className="w-[170px] cursor-pointer"
								/>
							</a>
						</div>
						<div className="list-none lg:flex hidden justify-center items-center flex-1 text-sm">
							<a
								href="#lecciones"
								className="cursor-pointer text-dorado font-normal px-3 py-2 hover:text-guinda font-montserrat"
							>
								Уровни
							</a>

							<a
								href="#metodo"
								className="cursor-pointer text-dorado font-normal px-3 py-2 hover:text-guinda font-montserrat"
							>
								Методика
							</a>
							<a
								href="#nuestrasClases"
								className="cursor-pointer text-dorado font-normal px-3 py-2 hover:text-guinda font-montserrat"
							>
								Как проходят занятия
							</a>

							<a
								href="#profesores"
								className="cursor-pointer text-dorado font-normal px-3 py-2 hover:text-guinda font-montserrat"
							>
								Преподователи
							</a>

							<a
								href="#precios"
								className="cursor-pointer text-dorado font-normal px-3 py-2 hover:text-guinda font-montserrat"
							>
								Стоимость занятий
							</a>
							<a
								href="#contacto"
								className="cursor-pointer text-dorado font-normal px-3 py-2 hover:text-guinda font-montserrat"
							>
								Контакты
							</a>
						</div>
						<div className="lg:flex hidden ">
							<a
								href=""
								className="cursor-pointer bg-guinda text-white ml-10 px-10 py-5 rounded-2xl text-lg font-medium hover:text-doradoClaro"
							>
								Записаться
							</a>
						</div>
						<div className="mr-0 flex lg:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-guinda inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-guinda focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-crema px-2 text-center pt-2 h-screen pb-3 space-y-1 sm:px-3"
							>
								<div>
									<a
										href="/home"
										className="cursor-pointer border-2 text-dorado hover:text-guinda block px-3 py-2 rounded-md text-base font-medium font-montserrat"
									>
										Уровни
									</a>
									<a
										href="/about"
										activeClass="about"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-dorado hover:text-guinda block px-3 py-2 rounded-md text-base font-medium font-montserrat"
									>
										Методика
									</a>

									<a
										href="/work"
										activeClass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-dorado hover:text-guinda block px-3 py-2 rounded-md text-base font-medium font-montserrat"
									>
										Как проходят занятия
									</a>
									<a
										href="/services"
										activeClass="services"
										to="services"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-dorado hover:text-guinda block px-3 py-2 rounded-md text-base font-medium font-montserrat"
									>
										Преподователи
									</a>

									<a
										href="/contact"
										activeClass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-dorado hover:text-guinda block px-3 py-2 rounded-md text-base font-medium font-montserrat"
									>
										Стоимость занятий
									</a>
								</div>
								<div className="pt-10">
									<a
										activeClass="contact2"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="bg-guinda text-white px-20 py-5  rounded-2xl text-lg font-medium font-montserrat hover:text-doradoClaro"
									>
										Записаться
									</a>
								</div>
							</div>
						</div>
					)}
				</Transition>
			</nav>

			
		</>
	);
}

export default Navbar;
