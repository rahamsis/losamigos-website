import React from 'react'

const Banner = () => (
    <section className="relative flex flex-col items-center justify-center overflow-hidden mt-24" id="/">
        <div className="relative flex mx-auto w-full bg-cover bg-repeat bg-[url('/images/bg.png')] md:py-20 xxs:py-12 xl:h-[650px] 2xl:h-[700px] h-auto">
            <div className="container max-w-screen-xl mx-auto lg:px-12 md:px-3 px-0">
				<div className="flex items-center justify-between">
					<div className="flex-[2_2_50%] xxs:text-center md:text-left">
						<h1 className="font-semibold md:text-5xl font-montserrat text-dorado xxs:text-[33px]">Испанский клуб</h1>
                        <img src="/images/logo_losamigos.png" className="md:w-80 md:-ml-3 xxs:w-60 xxs:mx-auto"/>
						<h2 className="text-[22px] font-montserrat md:pt-5 text-dorado xxs:pt-0">Изучай испанский язык с друзьями</h2>
						<ul className="mb-11 md:pt-10 text-dorado xxs:pt-0">
							<li className="md:py-3 font-montserrat md:text-2xl font-semibold xxs:text-base xxs:py-2">Первый урок бесплатный</li>
							<li className="md:py-3 font-montserrat md:text-2xl font-semibold xxs:text-base xxs:py-2">Преподователи носители языка</li>
							<li className="md:py-3 font-montserrat md:text-2xl font-semibold xxs:text-base xxs:py-2">Разговорный клуб</li>
						</ul>
                        <button href="#" className="cursor-pointer bg-guinda text-white px-10 py-5 rounded-2xl md:text-2xl xxs:text-lg font-medium hover:text-doradoClaro">
                            Получить бесплатное занятие
                        </button>
					</div>
					<div className="xxs:hidden md:block">
						<div className="lg:w-10/12 md:w-full float-right">
							<img src="/images/españa_flag.jpg" className=" rounded-full "/>
						</div>
					</div>
				</div>
            </div>
        </div>
    </section>
);

export default Banner;