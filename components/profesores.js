import React from 'react'

const Profesores = () => (
    <section className="relative flex flex-col items-center justify-center  bg-crema h-auto">
        <div className="flex relative mx-auto w-full"id="profesores">
            <div className="container max-w-screen-xl mx-auto lg:px-12 px-0">
                <div className="mx-auto md:pt-14 xxs:pt-2 xxs:pb-0 md:pb-10 md:flex xxs:block">
                    <div className="relative xxs:text-center md:text-start">
                        <h2 className="font-semibold xxs:text-2xl md:text-4xl font-montserrat text-dorado md:w-1/2 xxs:w-full">Преподаватели&nbsp;в</h2>
                    </div>
                    <div className="relative md:w-1/6 xxs:w-3/6 xxs:mx-auto md:mx-0">
                        <img className="md:pl-4 xxs:pl-0" src="/images/logo_losamigos.png" />
                    </div>
                </div>

                <div className="">
                    <div className="xxs:block md:flex justify-between font-montserrat">
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/pamela.png" className="mx-auto" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Памела</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro">Преподаватель носитель языка Аргентина. </div>
                        </div>
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/2.png" className="mx-auto" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Эрик</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro">Преподаватель носитель языка Аргентина. </div>
                        </div>
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/fotima.png" className="mx-auto" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Фотима</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro">Преподаватель носитель языка Таджикистан. </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Profesores;