import React from 'react'
import { useState } from 'react';

export default () => {

    const [showPanelIzquierdo, setShowPanelIzquierdo] = useState(1);
    const [showPanelDerecho, setShowPanelDerecho] = useState(1);

    return (
        <>
            <section className="relative flex flex-col items-center justify-center  bg-crema h-auto">
                <div className="flex relative mx-auto w-full  xxs:px-4 md:px-0" id="precios">
                    <div className="container max-w-screen-xl mx-auto lg:px-12 px-0">
                        <div className="mx-auto py-4 xxs:text-center md:text-start">
                            <h2 className="font-semibold xxs:text-2xl md:text-4xl font-montserrat text-dorado ">Бесплатные материалы</h2>
                        </div>

                        <div className="md:py-10 xxs:py-0">
                            <div className="md:flex xxs:block font-montserrat gap-10">
                                <div className="relative text-left md:w-1/2 xxs:w-full justify-center rounded-2xl">
                                    <div className="mb-5">
                                        <img src="/images/img1.png" />
                                    </div>
                                    <div className="flex font-montserrat px-auto mb-5 justify-center">
                                        <div className="w-auto">
                                            <button
                                                className={`border-[1px] border-slate-200 text-base rounded-md py-[10px] px-3 text-doradoOscuro font-bold focus:border-black focus:text-guinda
                                                ${showPanelIzquierdo === 1 ? `text-guinda border-[1px] border-black` : `text-black border-[1px] border-slate-200`}`
                                                }
                                                onClick={() => {
                                                    setShowPanelIzquierdo(1);
                                                }}
                                            >
                                                Tener un corazón de oro
                                            </button>
                                        </div>
                                        <div className="">
                                            <button
                                                className={`border-[1px] border-slate-200 text-base rounded-md py-[10px] px-3 text-doradoOscuro font-bold focus:border-black focus:text-guinda`}
                                                onClick={() => {
                                                    setShowPanelIzquierdo(2);
                                                }}
                                            >
                                                Иметь золотое сердце
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border-[1px] border-slate-200 w-full py-2 px-7 font-montserrat">
                                        {showPanelIzquierdo == 1 ? (
                                            <div>
                                                <div className="leading-4 text-center text-base">
                                                    Se refiere a una persona muy generosa, de buenos sentimientos, muy amable con los demás. Es una característica positiva
                                                    de las personas. Ya que el oro es el metal más valioso, decir que tiene el corazón de oro significa que es de mucho valor
                                                    sus sentimientos. Es un buen refrán para halagar a otra persona con buenas características.
                                                </div>
                                                <div className="pt-3 text-center text-base">
                                                    <span className="font-bold">Ejemplos:</span>
                                                    <br />
                                                    “Mi mamá tiene un corazón de oro, siempre es amable con todas las personas”.
                                                </div>
                                                <div className="pt-3">
                                                    <audio controls className="mx-auto">
                                                        <source src="/audios/exp1_1.ogg" type="audio/ogg" />
                                                        <source src="/audios/exp1_1.mp3" type="audio/mpeg" />
                                                        Your browser does not support the audio element.
                                                    </audio>
                                                </div>
                                                <div className="pt-3 text-center text-base">
                                                    “La vecina siempre me regala comida caliente, tiene un corazón de oro”.
                                                </div>
                                                <div className="pt-3">
                                                    <audio controls className="mx-auto">
                                                        <source src="/audios/exp1_2.ogg" type="audio/ogg" />
                                                        <source src="/audios/exp1_2.mp3" type="audio/mpeg" />
                                                        Your browser does not support the audio element.
                                                    </audio>
                                                </div>
                                                <div className="pt-3 text-center text-base">
                                                    “Ayer hice mi mudanza al nuevo departamento, mis amigos me ayudaron a cargar todas las cajas, tienen un corazón de oro”.
                                                </div>
                                                <div className="py-5">
                                                    <audio controls className="mx-auto">
                                                        <source src="/audios/exp1_3.ogg" type="audio/ogg" />
                                                        <source src="/audios/exp1_3.mp3" type="audio/mpeg" />
                                                        Your browser does not support the audio element.
                                                    </audio>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="leading-4 text-center text-base">
                                                Это относится к очень щедрым людям, с хорошими чувствами, очень добрым к другим. Это положительная характеристика
                                                людей. Поскольку золото - самый ценный металл, сказать, что у вас золотое сердце, означает, что ваши чувства очень
                                                ценны. Это хорошее высказывание, чтобы сделать комплимент другому человеку с хорошими качествами.
                                                <br />
                                                <br />
                                                <span className="font-bold">Примеры:</span>
                                                <br />
                                                «У моей мамы золотое сердце, она всегда добра ко всем»
                                                <br />
                                                <br />
                                                «Соседка всегда дает мне горячую еду, у нее золотое сердце»
                                                <br />
                                                <br />
                                                «Вчера я переехал в новую квартиру, друзья помогли мне загрузить все коробки, у них золотое сердце».
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/*  */}
                                {/* ******************************************** aca va el otro panel*******************************************  */}
                                {/*  */}
                                <div className="relative text-left md:w-1/2 xxs:w-full justify-center rounded-2xl">
                                    <div className="mb-5">
                                        <img src="/images/img2.png" />
                                    </div>
                                    <div className="flex font-montserrat px-auto mb-5 justify-center">
                                        <div className="">
                                            <button
                                                className={`border-[1px] border-slate-200 w-full rounded-md py-[10px] px-3 text-doradoOscuro font-bold focus:border-black focus:text-guinda
                                                ${showPanelDerecho === 1 ? `text-guinda border-[1px] border-black` : `text-black border-[1px] border-slate-200`}`}
                                                onClick={() => {
                                                    setShowPanelDerecho(1);
                                                }}
                                            >
                                                Como uña y carne
                                            </button>
                                        </div>
                                        <div className="">
                                            <button
                                                className="border-[1px] border-slate-200 w-full rounded-md py-[10px] px-3 text-doradoOscuro font-bold focus:border-black focus:text-guinda"
                                                onClick={() => {
                                                    setShowPanelDerecho(2);
                                                }}
                                            >
                                                Как кровь и плоть/Не разлей вода
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border-[1px] border-slate-200 w-full py-2 px-7 font-montserrat">
                                        {showPanelDerecho == 1 ? (
                                            <div>
                                                <div className="leading-4 text-center text-base">
                                                    Esta expresión se utiliza para decir que dos o más personas tienen una relación muy cercana, que son muy buenos amigos, que
                                                    siempre están juntos o siempre quieren estar juntos. Su significado es bastante visual. Las uñas están tan unidas a la carne
                                                    que resulta imposible separarlas. Así, se utiliza esta expresión para referirse a relaciones entre personas, ya sean amigos o
                                                    familiares, que pasan mucho tiempo juntos, que se llevan muy bien y están muy unidos.
                                                </div>
                                                <div className="pt-3 text-center text-base">
                                                    <span className="font-bold">Ejemplos:</span>
                                                    <br />
                                                    ¡Qué bien se llevan María y Manuel! Están juntos en clase desde los 5 años y nunca se pelean, son uña y carne.
                                                </div>
                                                <div className="pt-3">
                                                    <audio controls className="mx-auto">
                                                        <source src="/audios/EXP2_1.ogg" type="audio/ogg" />
                                                        <source src="/audios/EXP2_1.mp3" type="audio/mpeg" />
                                                        Your browser does not support the audio element.
                                                    </audio>
                                                </div>
                                                <div className="pt-3 text-center text-base">
                                                    Hace tiempo que no la veo, antes éramos uña y carne, pero desde que tiene novio casi no hablo con ella.
                                                </div>
                                                <div className="pt-3">
                                                    <audio controls className="mx-auto">
                                                        <source src="/audios/EXP2_2.ogg" type="audio/ogg" />
                                                        <source src="/audios/EXP2_2.mp3" type="audio/mpeg" />
                                                        Your browser does not support the audio element.
                                                    </audio>
                                                </div>
                                                <div className="pt-3 text-center text-base">
                                                    “Ferrari, la velocidad y el lujo, son como uña y carne”.
                                                </div>
                                                <div className="py-5">
                                                    <audio controls className="mx-auto">
                                                        <source src="/audios/EXP2_3.ogg" type="audio/ogg" />
                                                        <source src="/audios/EXP2_3.mp3" type="audio/mpeg" />
                                                        Your browser does not support the audio element.
                                                    </audio>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="leading-4 text-center text-base">
                                                Дословный перевод “Как ноготь и плоть” - используется, чтобы сказать, что у двух или более людей очень близкие отношения,
                                                что они очень хорошие друзья, что они всегда вместе или всегда хотят быть вместе. Его значение довольно наглядно. Ногти так
                                                близко расположены к плоти, что их невозможно разделить. Таким образом, это выражение используется для обозначения отношений между
                                                людьми, будь то друзья или семья, которые проводят много времени вместе, очень хорошо ладят и очень близки.
                                                <br />
                                                <br />
                                                <span className="font-bold">Примеры:</span>
                                                <br />
                                                Как хорошо ладят Мария и Мануэль! Они вместе в классе с 5 лет и никогда не ссорятся. Дело в том, что не разлей вода
                                                <br />
                                                <br />
                                                Я не видел ее очень давно, раньше мы были не разлей вода, но с тех пор как у неё появился парень, я почти не общаюсь с ней.
                                                <br />
                                                <br />
                                                «Ferrari, скорость и роскошь - это плоть и кровь».
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};



// export default Material;