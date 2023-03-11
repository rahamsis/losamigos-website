import React from 'react'

const Resenas = () => (
    <>
        <section className="relative flex flex-col items-center justify-center  bg-crema h-auto">
            <div className="flex relative mx-auto w-full  xxs:px-4 md:px-0" id="precios">
                <div className="container max-w-screen-xl mx-auto lg:px-12 px-0">
                    <div className="mx-auto py-10 md:flex xxs:block">
                        <div className="relative xxs:text-center md:text-start">
                            <h2 className="font-semibold xxs:text-2xl md:text-4xl font-montserrat text-dorado md:w-1/2 xxs:w-full">Отзывы&nbsp;о</h2>
                        </div>
                        <div className="relative md:w-1/6 xxs:w-3/6 xxs:mx-auto md:mx-0">
                            <img className="md:pl-4 xxs:pl-0" src="/images/logo_losamigos.png" />
                        </div>
                    </div>

                    <div className="md:pb-14 xxs:pb-7">
                        <div className="md:flex xxs:block font-montserrat gap-10">
                            <div className="relative flex text-left md:w-1/2 xxs:w-full justify-center bg-cremaOscuro rounded-2xl border-[1px] border-[#ffe9c6]">
                                <div className="md:py-10 xxs:py-3 md:px-16 xxs:px-3">
                                    <div className="mb-5">
                                        <div className="flex font-montserrat text-left items-center justify-between">
                                            <div className="text-lg text-[#9c8d75] font-bold">
                                                Мария Иванова
                                            </div>
                                            <div className="text-anaranjado text-sm">
                                                17/05/22
                                            </div>
                                        </div>
                                        <div className="font-normal text-base leading-[160%] text-[#AE9B7EA8]">
                                            г. Бишкек
                                        </div>
                                    </div>
                                    <div className="leading-4">
                                        <p className="text-base">
                                            Школа отличная. Начал обучение с нуля, с АБСОЛЮТНОГО нуля. Не знаю как нас терпеливо учат, но учителям нужно памятники при жизни ставить!!!!
                                            Я бы уже давно сорвался. Объясняют всё очень грамотно и доступно, вдобавок дают домашнее задание и допматериалы скидывают...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex text-left md:w-1/2 xxs:w-full mt-7 justify-center bg-cremaOscuro rounded-2xl border-[1px] border-[#ffe9c6]">
                                <div className="md:py-10 xxs:py-3 md:px-16 xxs:px-3">
                                    <div className="mb-5">
                                        <div className="flex font-montserrat text-left items-center justify-between">
                                            <div className="text-lg text-[#9c8d75] font-bold">
                                                Мээрим Абдылдаева
                                            </div>
                                            <div className="text-anaranjado text-sm">
                                                28/08/18
                                            </div>
                                        </div>
                                        <div className="font-normal text-base leading-[160%] text-[#AE9B7EA8]">
                                            г. Бишкек
                                        </div>
                                    </div>
                                    <div className="leading-4">
                                        <p className="text-base">
                                            Преподаватели, отношение к студентам, атмосфера на занятиях!!!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Resenas;