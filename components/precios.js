import React from 'react'

const Precios = () => (
    <>
        <section className="relative flex flex-col items-center justify-center  bg-crema h-auto">
            <div className="flex relative mx-auto w-full"id="precios">
                <div className="container max-w-screen-xl mx-auto lg:px-12 px-0">
                    <div className="md:pt-14 xxs:pt-5 md:pb-10 xxs:pb-5 xxs:text-center md:text-start">
                        <h2 className="font-semibold xxs:text-2xl md:text-4xl font-montserrat text-dorado md:w-1/2 xxs:w-full">Стоимость занятий</h2>
                    </div>

                    <div className="pb-14">
                        <div className="md:flex xxs:block font-montserrat">
                            <div className="relative flex xxs:pb-10 md:pb-0 text-center px-6 md:w-1/2 xxs:w-full items-center justify-center gap-10">
                                <div className="xxs:w-16 md:w-auto">
                                    <img src="/images/grammar.png"/>
                                </div>
                                <div className="">
                                    <div className="md:text-2xl xxs:text-xl text-doradoOscuro font-montserrat mb-4 text-left">
                                        Грамматика
                                    </div>
                                    <div className="font-normal text-xl leading-[160%] text-doradoOscuro">
                                        <span className="text-guinda text-xl">1500 </span>
                                        <span className="text-doradoOscuro font-bold text-xl">сом </span>
                                        / в месяц.
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex text-center px-6 md:w-1/2 xxs:w-full items-center justify-center gap-10">
                                <div className="xxs:w-14 md:w-auto">
                                    <img src="/images/talking.png" />
                                </div>
                                <div className="">
                                    <div className="md:text-2xl xxs:text-xl text-doradoOscuro font-montserrat mb-4 text-left">
                                        Разговорный клуб
                                    </div>
                                    <div className="font-normal text-xl leading-[160%] text-doradoOscuro">
                                        <span className="text-guinda text-xl">1200 </span>
                                        <span className="text-doradoOscuro font-bold text-xl">сом </span>
                                        / в месяц.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="relative flex mx-auto w-full bg-cover bg-repeat bg-[url('/images/bg.png')] pb-10 h-auto">
                <div className="container max-w-screen-xl mx-auto lg:px-12 px-0 ">
                    <div className="mx-auto pt-14 md:flex xxs:block">
                        <div className="relative xxs:text-center md:text-start">
                            <h2 className="font-semibold xxs:text-2xl md:text-4xl font-montserrat text-dorado md:w-1/2 xxs:w-full">Расписание&nbsp;занятий&nbsp;в</h2>
                        </div>
                        <div className="relative md:w-1/6 xxs:w-3/6 xxs:mx-auto md:mx-0">
                            <img className="pl-4" src="/images/logo_losamigos.png" />
                        </div>
                    </div>
                    <div className="xxs:text-center md:text-start">
                        <h2 className="md:text-[22px] xxs:text-base font-montserrat md:py-7 xxs:py-2 text-dorado">
                            Ждём вас каждый <span className="font-bold">понедельник</span> и <span className="font-bold">среду</span>
                        </h2>
                    </div>
                    <div className="md:px-10 xxs:px-16">
                        <div className="md:flex xxs:block justify-between font-montserrat gap-10 py-7">
                            <div className="relative text-center px-6 md:py-16 xxs:py-14 md:w-1/2 xxs:w-full bg-white rounded-2xl">
                                <div className="font-bold md:text-xl xxs:text-base md:leading-5 xxs:leading-3 text-doradoOscuro mb-5">Грамматика А1</div>
                                <div className="font-bold md:text-3xl xxs:text-xl md:leading-5 xxs:leading-3 text-guindaOscuro">18:30 - 20:00</div>
                            </div>
                            <div className="relative text-center px-6 md:py-16 xxs:py-14 xxs:my-3 md:my-0 md:w-1/2 xxs:w-full bg-white rounded-2xl">
                                <div className="font-bold md:text-xl xxs:text-base md:leading-5 xxs:leading-3 text-doradoOscuro mb-5">Грамматика А2</div>
                                <div className="font-bold md:text-3xl xxs:text-xl md:leading-5 xxs:leading-3 text-guindaOscuro">17:00 - 18:30</div>
                            </div>
                            <div className="relative text-center px-6 md:py-16 xxs:py-14 md:w-1/2 xxs:w-full bg-white rounded-2xl">
                                <div className="font-bold md:text-xl xxs:text-base md:leading-5 xxs:leading-3 text-doradoOscuro mb-5">Разговорный клуб</div>
                                <div className="font-bold md:text-3xl xxs:text-xl md:leading-5 xxs:leading-3 text-guindaOscuro">20:00 - 21:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Precios;