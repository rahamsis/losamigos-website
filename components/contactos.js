import React from 'react'

const Contacto = () => (
    <section className="relative flex flex-col items-center justify-center  bg-crema h-auto">
        <div className="flex relative mx-auto w-full" id="contacto">
            <div className="container max-w-screen-xl mx-auto lg:px-12 px-0">
                <div className="md:pt-14 xxs:pt-5 pb-5 xxs:text-center md:text-start">
                    <h2 className="font-semibold xxs:text-2xl md:text-4xl font-montserrat text-dorado md:w-1/2 xxs:w-full">Наши контакты</h2>
                </div>

                <div className="md:pb-14 xxs:pb-0">
                    <div className="relative font-montserrat xxs:px-4 md:px-0">
                        <div className="md:flex xxs:block w-full gap-10 bg-cremaOscuro md:py-14 xxs:py-3 md:px-28 xxs:px-0 items-center">
                            <div className=" w-full xxs:text-center md:text-start">
                                Следите за нами в Facebook и Instagram
                            </div>
                            <div className="relative flex px-6 md:gap-10 xxs:gap-5 xxs:pt-5 md:pt-0 xxs:justify-center md:justify-end">
                                <div className="cursor-pointer">
                                    <a href="https://www.facebook.com/losamigos.bishkek/" target="_blank">
                                        <svg className="md:w-7 md:mt-1 xxs:mt-0 xxs:w-4" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.5 1.5H19.75C16.7663 1.5 13.9048 2.68526 11.795 4.79505C9.68526 6.90483 8.5 9.76631 8.5 12.75V19.5H1.75V28.5H8.5V46.5H17.5V28.5H24.25L26.5 19.5H17.5V12.75C17.5 12.1533 17.7371 11.581 18.159 11.159C18.581 10.7371 19.1533 10.5 19.75 10.5H26.5V1.5Z" stroke="#E58211" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div className="cursor-pointer">
                                    <a href="https://www.instagram.com/losamigos_club/" target="_blank">
                                        <svg className="md:w-[54px] xxs:w-7" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M38.25 4.5H15.75C9.5368 4.5 4.5 9.5368 4.5 15.75V38.25C4.5 44.4632 9.5368 49.5 15.75 49.5H38.25C44.4632 49.5 49.5 44.4632 49.5 38.25V15.75C49.5 9.5368 44.4632 4.5 38.25 4.5Z" stroke="#E58211" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M36.0001 25.5827C36.2777 27.4552 35.9579 29.3677 35.086 31.048C34.2142 32.7283 32.8347 34.0909 31.1437 34.942C29.4528 35.793 27.5366 36.0893 25.6676 35.7885C23.7986 35.4878 22.072 34.6054 20.7335 33.2668C19.3949 31.9282 18.5125 30.2017 18.2117 28.3327C17.911 26.4637 18.2072 24.5475 19.0583 22.8565C19.9094 21.1656 21.272 19.7861 22.9523 18.9142C24.6326 18.0424 26.545 17.7225 28.4176 18.0002C30.3277 18.2834 32.096 19.1735 33.4614 20.5389C34.8268 21.9043 35.7168 23.6726 36.0001 25.5827Z" stroke="#E58211" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M39.375 14.625H39.3975" stroke="#E58211" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:flex xxs:block w-full gap-10 bg-cremaOscuro md:py-14 xxs:py-3 md:px-28 xxs:px-0 items-center xxs:my-3 md:my-0">
                            <div className="flex md:gap-10 xxs:gap-5 items-center xxs:justify-center md:justify-start md:w-2/3 xxs:w-auto">
                                <div>
                                    <a href="mailto:losamigos.bishkek@gmail.com" target="_blank">
                                        <svg className="md:w-[54px] xxs:w-7" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 9H45C47.475 9 49.5 11.025 49.5 13.5V40.5C49.5 42.975 47.475 45 45 45H9C6.525 45 4.5 42.975 4.5 40.5V13.5C4.5 11.025 6.525 9 9 9Z" stroke="#E58211" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M49.5 13.5L27 29.25L4.5 13.5" stroke="#E58211" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="font-bold md:text-2xl xxs:text-base cursor-pointer hover:text-anaranjado">
                                    losamigos.bishkek@gmail.com
                                </div>
                            </div>
                            <div className="flex xxs:justify-center md:justify-end md:gap-10 xxs:gap-5 md:w-1/3 xxs:w-auto items-center xxs:pt-5 md:pt-0">
                                <div>
                                    <a href="tel:+996551551406" target="_blank">
                                        <svg className="md:w-[54px] xxs:w-7" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M49.5 38.0702V44.8202C49.5025 45.4468 49.3742 46.0671 49.1231 46.6413C48.8721 47.2154 48.5039 47.7308 48.0421 48.1544C47.5804 48.578 47.0353 48.9006 46.4417 49.1013C45.8481 49.3021 45.2191 49.3766 44.595 49.3202C37.6713 48.5679 31.0207 46.202 25.1775 42.4127C19.7411 38.9582 15.132 34.3491 11.6775 28.9127C7.87492 23.0429 5.50852 16.36 4.76997 9.40522C4.71375 8.78302 4.78769 8.15593 4.9871 7.56387C5.1865 6.97182 5.50701 6.42777 5.9282 5.96637C6.34938 5.50496 6.86203 5.13631 7.4335 4.88389C8.00497 4.63147 8.62274 4.50081 9.24747 4.50022H15.9975C17.0894 4.48947 18.148 4.87614 18.9759 5.58817C19.8039 6.30019 20.3446 7.28897 20.4975 8.37022C20.7824 10.5304 21.3107 12.6514 22.0725 14.6927C22.3752 15.498 22.4407 16.3733 22.2613 17.2147C22.0818 18.0561 21.6649 18.8285 21.06 19.4402L18.2025 22.2977C21.4055 27.9307 26.0695 32.5947 31.7025 35.7977L34.56 32.9402C35.1717 32.3353 35.9441 31.9184 36.7855 31.7389C37.6269 31.5595 38.5021 31.625 39.3075 31.9277C41.3488 32.6895 43.4698 33.2178 45.63 33.5027C46.7229 33.6569 47.7211 34.2074 48.4347 35.0496C49.1482 35.8917 49.5274 36.9668 49.5 38.0702Z" stroke="#E58211" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="font-bold md:text-2xl xxs:text-base cursor-pointer hover:text-anaranjado">
                                    +996 551 551406
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contacto;