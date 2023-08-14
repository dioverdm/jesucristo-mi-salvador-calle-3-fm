"use client"

import Image from 'next/image';
import Bible from '@/components/Bible';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { CiStreamOn } from 'react-icons/ci';

export default function Home() {
    return (
        <>
            <header className='p-4 sticky top-0 left-0 bg-yellow-400 w-full'>
                <div className='max-w-4xl mx-auto flex items-center justify-between'>
                    <Image src='/radio-logo.svg' width={200} height={100} alt='logo casa de oracion nuevo pacto' />
                    <Bible />
                </div>
            </header>
            <div>
                <a href="https://wa.link/1pr7j9">
                    <marquee
                        className="text-2xl bg-gradient-to-l to-yellow-900 from-yellow-600 text-white p-2"
                        direction="left"
                        scrollAmount={10}
                    >
                        Activación profética 2023 del 3 al 5 de noviembre, compra tus entradas ahora tocando aquí
                    </marquee>
                </a>
            </div>
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
                <section className='w-full px-4 py-24 max-w-4xl mx-auto text-center'>
                    <CiStreamOn className='mx-auto mb-4' size={120} color='red' />
                    <h1 className='text-4xl font-bold mb-8'>Escúcha nuestras transmiciones en vivo</h1>
                    <ul className='text-base md:text-xl flex flex-col gap-4 max-w-md mx-auto md:text-left'>
                        <li><b>Culto de enseñanza</b> | Miércoles 19:30 - 21:00</li>
                        <li><b>Culto de Jóvenes</b> | Sábado 19:30 - 21:00</li>
                        <li><b>Culto dominical</b> | Domingo 11:00 - 14:00</li>
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
