import React from 'react'

const PostBanner = () => (
    <section className="relative flex flex-col items-center justify-center bg-crema h-auto">
        <div className="flex relative mx-auto w-full" id="lecciones">
            <div className="container max-w-screen-xl mx-auto lg:px-12 px-0">
                <div className="flex md:py-10 xxs:py-5 xxs:justify-center md:justify-start">
                    <h2 className="font-semibold xxs:text-2xl md:text-4xl font-montserrat text-dorado">Уровни испанского языка</h2>
                </div>
                <div className="">
                    <div className="md:flex xxs:block xxs:justify-center md:justify-between font-montserrat xxs:px-4 md:px-0">
                        <div className="relative xxs:w-full md:w-1/2 xxs:mr-0 md:mr-4 xxs:mb-8 md:mb-0 bg-cover bg-repeat bg-[url('/images/bg.png')] xxs:px-5 md:px-20 xxs:py-5 md:py-16">
                            <div className="absolute top-0 uppercase font-semibold xxs:text-[150px] xs:text-[11.75rem] text-guinda opacity-[.4]">a1</div>
                            <div className="relative font-semibold mb-[0.625rem] z-[2]">Чему научитесь:</div>
                            <div className="relative z-[2] leading-4 text-base font-normal">Понимать общее содержание высказываний и конкретную информацию в общении Рассказать об образовании и написать резюме</div>
                            <div className="relative font-semibold mb-[0.625rem] z-[2] py-3">Тема занятий:</div>
                            <div className="relative z-[2] leading-4 text-base font-normal">Первое знакомство, описание внешности и характера, увлечение и спорт, дом, транспорт, испанская кухня, одежда и покупки, часы и время</div>
                            <div className="md:pt-10 xxs:pt-3">
                                <button type="submit" data-popup="#popup" className="inline-block xxs:w-full md:w-auto py-5 px-14 bg-guinda text-white font-bold text-base rounded-2xl hover:text-doradoClaro">Записаться</button>
                            </div>
                        </div>
                        <div className="relative xxs:w-full md:w-1/2 xxs:mr-0 md:mr-4 bg-cover bg-repeat bg-[url('/images/bg.png')] xxs:px-5 md:px-20 xxs:py-5 md:py-16">
                            <div className="absolute top-0 uppercase font-semibold xxs:text-[150px] xs:text-[11.75rem] text-guinda opacity-[.4]">a2</div>
                            <div className="relative font-semibold mb-[0.625rem] z-[2]">Чему научитесь:</div>
                            <div className="relative z-[2] leading-4 text-base font-normal">Понимать общее содержание высказываний и конкретную информацию в общении Рассказать об образовании и написать резюме</div>
                            <div className="relative font-semibold mb-[0.625rem] z-[2] py-3">Тема занятий:</div>
                            <div className="relative z-[2] leading-4 text-base font-normal">Первое знакомство, описание внешности и характера, увлечение и спорт, дом, транспорт, испанская кухня, одежда и покупки, часы и время</div>
                            <div className="md:pt-10 xxs:pt-3">
                                <button type="submit" data-popup="#popup" className="inline-block xxs:w-full md:w-auto py-5 px-14 bg-guinda text-white font-bold text-base rounded-2xl hover:text-doradoClaro">Записаться</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex relative mx-auto w-full" id="metodo">
            <div className="container max-w-screen-xl mx-auto lg:px-12 px-0">
                <div className="flex md:pt-20 xxs:pt-10 md:pb-10 xxs:pb-5 xxs:justify-center md:justify-start">
                    <h2 className="font-semibold xxs:text-2xl md:text-4xl font-montserrat text-dorado">Наша Методика</h2>
                </div>
                <div className="relative max-w-[35.4375rem] xxs:text-lg xxs:text-center md:text-start md:text-xl font-normal text-dorado font-montserrat">
                    Мы уверены, что абсолютно любой человек способен выучить язык при правильном подходе к обучению
                </div>

                <div className="">
                    <div className="xxs:block md:flex justify-between font-montserrat">
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/interactive.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Интерактивные упражнения</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">На уроках вы активно будете учавствовать и взаимодействовать и сразу же применять в практике все что вы изучили. </div>
                        </div>
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/comunicative.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Комуникативная методика</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">На каждом уроке, вы будете разговаривать уже на испанском языке, сразу погрузитесь в испаноговорящую среду. </div>
                        </div>
                    </div>

                    <div className="xxs:block md:flex justify-between font-montserrat">
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/structure.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Струкутрно и логично</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">Все уроки продуманны для легкого и понятного изучения языка.</div>
                        </div>
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/teachers.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Интерактивные упражнения</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">На уроках вы активно будете учавствовать и взаимодействовать и сразу же применять в практике все что вы изучили. </div>
                        </div>
                    </div>

                    <div className="xxs:block md:flex justify-between font-montserrat">
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/comfort.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Все уровни подготовки</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">У нас вы найдете все уровни подготовки для комфортного обучения. </div>
                        </div>
                        <div className="relative text-center xxs:px-4 md:px-6 md:py-16 xxs:py-5 md:w-1/2 xxs:w-full">
                            <img src="/images/individual.png" className="mx-auto md:w-auto xxs:w-[72px]" />
                            <div className="font-bold text-2xl leading-[140%] text-guindaOscuro md:my-5 xxs:my-3">Индивидуальный подход</div>
                            <div className="font-normal text-base leading-[160%] text-guindaOscuro opacity-[.4]">К каждому студенту у нас индивидуальный подход, подберем для вас удобную программу обучения.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PostBanner;