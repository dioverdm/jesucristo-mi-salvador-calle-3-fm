"use client"

import Image from 'next/image';
import Bible from '@/components/Bible';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { CiStreamOn } from 'react-icons/ci';

export default function Home() {
    return (
        <>
            <div className="sticky top-0 z-[-1px]">
                <a className="block h-full" href="https://buy.stripe.com/7sIcPmbG30RLeeA145">
                    <marquee
                        className="text-2xl block h-full font-medium bg-gradient-to-l to-yellow-900 from-yellow-600 text-white p-2"
                        direction="left"
                        scrollAmount={7}
                    >
                        Activación profética 2023 del 3 al 5 de noviembre, compra tus entradas ahora tocando aquí
                    </marquee>
                </a>
            </div>
            <header className='p-4 sticky top-12 left-0 bg-yellow-400 w-full'>
                <div className='max-w-4xl mx-auto flex items-center justify-between'>
                    <Image src='/radio-logo.svg' width={200} height={100} alt='logo casa de oracion nuevo pacto' />
                    <Bible />
                </div>
            </header>
            <main className="flex flex-col justify-center pb-[200px] select-none">
                <section className='flex flex-col md:flex-row items-center justify-between w-full px-4 py-24 max-w-4xl mx-auto'>
                    <div>
                        <Image src="/people-listen-music.png?v=1.0" width={420} height={200} alt='people listen music' />
                    </div>
                    <div className='text-center md:text-left'>
                        <h1 className='text-4xl md:text-5xl font-bold'>Casa de Oración</h1>
                        <h4 className='text-2xl md:text-2xl'>Tu casa y también tu radio</h4>
                    </div>
                </section>
                <section className="mx-auto w-auto">
                    <script async
                        src="https://js.stripe.com/v3/buy-button.js">
                    </script>

                    <stripe-buy-button
                        buy-button-id="buy_btn_1NlJ7NLVhkwsg5fq6gG2Ndhs"
                        publishable-key="pk_live_51MUYpkLVhkwsg5fqabkEnzMvPKnMFsf7Ky77ncRS8ZHJvEdVi8pGEDQAvoY9M7OK7PJi2pPS1dsLYMQi3K2Ok8Iw00sQ260ZHe"
                    >
                    </stripe-buy-button>
                </section>
                <section className='w-full px-4 py-24 max-w-4xl mx-auto text-center'>
                    <CiStreamOn className='mx-auto mb-4' size={120} color='red' />
                    <h1 className='text-4xl font-bold mb-8'>Escúcha nuestras transmiciones en vivo</h1>
                    <ul className='text-base md:text-xl flex flex-col gap-4 max-w-md mx-auto md:text-left'>
                        <li><b>Culto de oración</b> | Martes 07:00 P.M - 09:00 P.M</li>

                        <li><b>Culto de Agradecimiento</b> | Miércoles 07:00 P.M - 09:00 P.M</li>
                        <li><b>Culto de Alabanzas</b> | Jueves 07:00 P.M - 09:00 P.M</li>

                        <li><b>Culto de Damas</b> | Viernes 07:00 P.M - 09:00 P.M</li>

                        <li><b>Culto de Enseñanzas</b> | Sábado 06:00 P.M - 09:00 P.M</li>

                        <li><b>Culto Dominical</b> | Sábado 09:00 A.M - 12:00 P.M</li>
                    </ul>
                </section>
                <section className='w-full px-4 py-24 max-w-4xl mx-auto text-center'>
                    <h1 className='text-4xl font-bold mb-8'>Síguenos en nuestras redes sociales</h1>
                    <ul className='flex items-center justify-center gap-4 max-w-md mx-auto md:text-left'>
                        <li>
                            <a href="https://www.instagram.com/casadeoracion.es/" target='_blank' rel='noreferrer'>
                                <FaInstagram size={36} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100064752604323" target='_blank' rel='noreferrer'>
                                <FaFacebook size={36} />
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    )
}
