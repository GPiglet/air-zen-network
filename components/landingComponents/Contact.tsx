//modules
import React, { FC, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useTranslation } from 'next-i18next';

//Custom components
import CustomInput from '../common/input'
import CustomTextarea from '../common/textarea'

const Contact: FC = () => {
    //translate
    const { t } = useTranslation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    return (
        <div id='cantact' className='container m-auto relative py-[120px] md:py-[280px] flex justify-center'>
            <div className=" flex justify-center">
                <div className='md:w-[50%] xl:w-1/3 text-center relative px-10 md:px-auto'>
                    <h1 className="text-title-sm">{t('landing.section5.title')}</h1>
                    <svg className='absolute left-1/2 center-x-transform w-[90%] md:w-[150%] top-[-100px] md:top-[-150px]' viewBox="0 0 488 519" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.7" d="M243.691 23.0004C377.708 23.0004 486.381 133.623 486.381 270.122C486.381 406.62 377.708 517.243 243.691 517.243C109.673 517.243 0.999995 406.62 0.999989 270.122C0.999983 133.623 109.673 23.0005 243.691 23.0004Z" stroke="url(#paint0_linear_0_1)" strokeWidth="2" />
                        <path d="M185.181 77.3883C190.736 69.4988 194 59.8815 194 49.5C193.999 22.7146 172.285 1 145.5 1C118.715 1 97 22.7146 97 49.5C97 76.2854 118.715 98 145.5 98C156.055 98 165.821 94.6269 173.782 88.9012L193.126 97.2375L185.181 77.3883Z" stroke="url(#paint1_linear_0_1)" strokeWidth="2" strokeMiterlimit="10" />
                        <defs>
                            <linearGradient id="paint0_linear_0_1" x1="123.644" y1="29.2225" x2="173.848" y2="255.169" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#159BDE" />
                                <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_0_1" x1="185.976" y1="97.1787" x2="118.82" y2="15.8293" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#66BEE9" />
                                <stop offset="1" stopColor="#66BEE9" stopOpacity="0.59" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className='font-lato text-lg text-white mt-11 text-left tracking-widest'>{t('landing.section5.subtitle')}</p>
                    <CustomInput
                        label='Name'
                        inputColor='text-slate-300'
                        className="text-left w-full my-5"
                        placeholder='Vorname Nachname'
                        value={name}
                        readOnly={true}
                    />
                    <CustomInput
                        label='Email Address'
                        inputColor='text-slate-300'
                        className="text-left w-full my-5"
                        placeholder='meine@email.io'
                        value={email}
                        readOnly={true}
                    />
                    <CustomTextarea
                        rows={3}
                        className="text-left w-full my-5"
                        placeholder='Ihre Nachricht '
                        value={email}
                    />
                    <button className='text-lgx text-white button-gradient py-2 px-8 rounded-md border border-primary relative'>
                        {t('landing.section5.send')}
                    </button>
                    {
                        t('landing.section5.description').split('\n').map((item, index) =>
                            <p className='font-lato font-light text-left text-base text-white tracking-[2px] my-4' key={index}>
                                {item}
                            </p>
                        )
                    }
                    <svg className='absolute left-1/2 center-x-transform w-[100%] sm:w-[66%] md:w-[130%] bottom-[-140px] sm:bottom-[-190px] md:bottom-[-180px]' viewBox="0 0 412 412" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.7" d="M291.677 300.824C240.073 347.051 160.058 341.948 112.961 289.373C65.8641 236.798 69.5612 156.705 121.165 110.478C172.769 64.2515 252.785 69.3545 299.881 121.93C346.978 174.505 343.281 254.598 291.677 300.824Z" stroke="url(#paint0_linear_1374_3891)" strokeWidth="2" />
                        <path opacity="0.3" d="M304.085 314.68C244.955 367.649 153.288 361.791 99.3426 301.57C45.3966 241.349 49.6204 149.592 108.75 96.6239C167.879 43.6559 259.546 49.5138 313.492 109.735C367.438 169.956 363.214 261.712 304.085 314.68Z" stroke="url(#paint1_linear_1374_3891)" />
                        <defs>
                            <linearGradient id="paint0_linear_1374_3891" x1="336.251" y1="257.206" x2="238.599" y2="187.246" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#159BDE" />
                                <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1374_3891" x1="354.496" y1="264.453" x2="243.118" y2="184.659" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#159BDE" />
                                <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>




                </div>
            </div>

            {/* Animate svgs */}
            <svg className='hidden md:block absolute w-[70%] top-1/2 left-[-20%] center-y-transform' viewBox="0 0 905 910" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M366.837 821.129C569.435 870.095 772.026 745.822 819.337 543.557C866.647 341.291 740.762 137.628 538.164 88.6614C335.566 39.6951 132.975 163.968 85.6643 366.234C38.3534 568.499 164.238 772.163 366.837 821.129Z" fill="url(#paint0_radial_1452_3608)" />
                <path opacity="0.5" d="M537.259 745.903C689.099 696.562 773.542 533.675 725.869 382.084C678.196 230.494 516.459 147.605 364.619 196.947C212.78 246.288 128.336 409.175 176.009 560.766C223.683 712.356 385.42 795.245 537.259 745.903Z" fill="url(#paint1_radial_1452_3608)" />
                <path opacity="0.5" d="M514.454 673.388C626.179 637.082 688.312 517.229 653.234 405.688C618.156 294.148 499.149 233.158 387.425 269.463C275.701 305.769 213.567 425.622 248.645 537.162C283.724 648.703 402.73 709.693 514.454 673.388Z" fill="url(#paint2_radial_1452_3608)" />
                <path d="M704.238 389.114C748.159 528.775 670.361 678.849 530.465 724.309C390.568 769.77 241.556 693.399 197.635 553.738C153.713 414.076 231.511 264.003 371.407 218.542C511.304 173.082 660.316 249.452 704.238 389.114Z" stroke="url(#paint3_linear_1452_3608)" />
                <image href="/images/model.png" className='w-[27%]' x="35.5%" y="32%" cx="511.828" cy="696.377" transform="translate(0,0)" />

                <defs>
                    <radialGradient id="paint0_radial_1452_3608" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(550.5 129.142) rotate(103.551) scale(758.127 760.762)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1452_3608" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(388.452 218.521) rotate(72.9291) scale(580.035 582.655)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1452_3608" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(404.961 285.337) rotate(72.9291) scale(426.792 428.72)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint3_linear_1452_3608" x1="371.257" y1="218.065" x2="535.413" y2="723.227" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <svg className='hidden md:block absolute opacity-80 w-[40%] right-0 top-0' viewBox="0 0 608 553" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                    <path opacity="0.5" d="M158.339 207.726C123.409 291.813 160.16 390.677 240.424 428.543C320.688 466.41 414.071 428.941 449 344.853C483.93 260.766 447.179 161.903 366.915 124.036C286.651 86.169 193.269 123.638 158.339 207.726Z" fill="url(#paint0_radial_1452_3603)" />
                    <path opacity="0.5" d="M208.966 228.503C187.363 280.511 210.093 341.658 259.736 365.078C309.379 388.499 367.136 365.324 388.74 313.316C410.344 261.308 387.614 200.161 337.971 176.741C288.327 153.32 230.57 176.495 208.966 228.503Z" fill="url(#paint1_radial_1452_3603)" />
                    <path d="M254.353 378.044C197.928 351.424 172.037 281.884 196.629 222.682C221.221 163.481 286.934 137.157 343.359 163.777C399.785 190.398 425.676 259.938 401.084 319.14C376.492 378.341 310.779 404.665 254.353 378.044Z" stroke="url(#paint2_linear_1452_3603)" />
                </g>
                <image href="/images/model.png" className='w-[15%]' x="42.5%" y="37%" cx="511.828" cy="696.377" transform="translate(0,0)" />
                <defs>
                    <radialGradient id="paint0_radial_1452_3603" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(431.358 346.774) rotate(-154.349) scale(324.022 331.856)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1452_3603" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(377.828 314.504) rotate(-154.349) scale(200.407 205.253)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint2_linear_1452_3603" x1="401.546" y1="319.357" x2="192.065" y2="232.34" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <svg className='hidden md:block absolute w-[40%] right-[-5%] top-[10%]' viewBox="0 0 516 590" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M471.592 284.685C463.287 201.018 389.502 138.073 306.787 144.094C224.072 150.115 163.751 222.822 172.055 306.489C180.36 390.157 254.145 453.101 336.86 447.08C419.575 441.059 479.896 368.352 471.592 284.685Z" fill="url(#paint0_radial_1452_3599)" />
                <path d="M306.024 135.456C393.561 129.083 471.681 195.701 480.474 284.292C489.267 372.882 425.398 449.836 337.86 456.208C250.323 462.58 172.203 395.963 163.41 307.372C154.617 218.781 218.486 141.828 306.024 135.456Z" stroke="url(#paint1_linear_1452_3599)" />
                <path opacity="0.3" d="M294.402 93.0834C404.565 85.0642 502.869 168.9 513.933 280.377C524.998 391.854 444.628 488.696 334.465 496.715C224.301 504.735 125.998 420.899 114.934 309.422C103.869 197.945 184.239 101.103 294.402 93.0834Z" stroke="url(#paint2_linear_1452_3599)" />
                <image href="/images/model.png" className='w-[29%]' x="46.5%" y="32%" cx="511.828" cy="696.377" transform="translate(0,0)" />
                <defs>
                    <radialGradient id="paint0_radial_1452_3599" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(185.724 296.91) rotate(-3.77325) scale(302.75 306.714)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint1_linear_1452_3599" x1="162.906" y1="307.409" x2="480.151" y2="275.92" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1452_3599" x1="114.43" y1="309.458" x2="513.397" y2="269.859" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

    )
}

export default Contact