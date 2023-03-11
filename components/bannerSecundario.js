import React from 'react'

const BannerSecundario = () => (
    <section className="relative flex flex-col items-center justify-center overflow-hidden">
        <div className="relative flex mx-auto w-full bg-cover bg-repeat bg-[url('/images/bg.png')] md:py-20 xxs:py-5 h-auto">
            <div className="container max-w-screen-xl mx-auto lg:px-12 md:px-3 px-0 ">
                <div className="flex items-center justify-between xxs:mx-3 md:mx-4">
                    <div className="flex-[2_2_50%] xxs:text-center md:text-left md:pr-10 xxs:pr-0">
                        <h1 className="font-semibold md:text-4xl xxs:text-[25px] font-montserrat text-dorado xxs:mx-3 md:mx-0">
                            Запишитесь на <span className="font-semibold md:text-4xl xxs:text-[25px] font-montserrat text-guinda">бесплатный урок</span>
                        </h1>
                        <h2 className="md:text-[22px] xxs:text-base font-montserrat xxs:my-2 md:py-10 text-dorado ">Начни говорить на испанском уже после первого занятия!</h2>

                        <button href="#" className="xxs:w-full md:w-auto cursor-pointer bg-guinda text-white px-10 py-5 rounded-2xl md:text-2xl xxs:text-lg font-medium hover:text-doradoClaro">
                            Оставить заявку
                        </button>
                    </div>
                    <div className="xxs:hidden md:block">
                        <div className="md:w-full float-right">
                            <img src="/images/image.jpg" className=" rounded-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default BannerSecundario;