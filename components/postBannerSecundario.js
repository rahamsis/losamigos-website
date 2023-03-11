import React from 'react'

const PostBannerSecundario = () => (
    <section className="relative flex flex-col items-center justify-center bg-crema h-auto">
        <div className="flex relative mx-auto w-full"id="nuestrasClases">
            <div className="container max-w-screen-xl mx-auto lg:px-12 px-0">
                <div className="flex md:pt-20 xxs:pt-10 md:pb-10 xxs:pb-5 xxs:text-center md:text-start xxs:px-5 md:px-0">
                    <h2 className="font-semibold xxs:text-2xl md:text-4xl font-montserrat text-dorado">Как проходят наши занятия?</h2>
                </div>

                <div className="">
                    <div className="xxs:block md:flex justify-between font-montserrat">
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/1.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Подбор программы</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">Соответственно уровню мы побдираем программу обучения для каждого. </div>
                        </div>
                        <div className="elative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/2.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Комуникативная методика</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">Каждый из преподователей является носителем языка и живет в Испании и странах Латинской Америки. </div>
                        </div>
                    </div>

                    <div className="xxs:block md:flex justify-between font-montserrat">
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/3.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Разговорный клуб</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">Для лучшего результата, есть разговорный клуб, где вы будете практиковать испанский с носителем языка.</div>
                        </div>
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/4.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Обучение в группах</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">Хотите обучаться больше, а платить меньше? Обучайтесь в группе по 10 человек. </div>
                        </div>
                    </div>

                    <div className="xxs:block md:flex justify-between font-montserrat">
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/5.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Сетрификат по итогам</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">В конце обучения каждый ученик получает сертификат с именем и часами обучения. </div>
                        </div>
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/6.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Персональные уроки</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">Индивидуальные занятия с индивидуальной програмой приносят высокий результат.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PostBannerSecundario;