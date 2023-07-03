"use client"

import { useEffect, useState, useRef } from 'react';
import { Howl } from 'howler';
import {
    FaPlay,
    FaPause
} from 'react-icons/fa'
import Image from 'next/image';
import Timer from '../components/Timer';
import Bible from '@/components/Bible';

export default function Home() {
    const [isPlay, setPlay] = useState(false)
    const [loading, setLoading] = useState(false)

    const sound = useRef()

    useEffect(() => {
        sound.current = new Howl({
            src: ['http://stream.zeno.fm/jq3vvoybrrjtv'],
            html5: true,
            onload: () => {
                setLoading(false)
            },
            onplay: () => {
                setLoading(false)
            }
        })

        return () => sound.current.stop()

    }, [])

    const handlePlay = () => {
        if (!isPlay) {
            setLoading(true)
            sound.current.play()
        } else {
            sound.current.stop()
        }

        setPlay(!isPlay)
    }

    return (
        <>
            <header className='p-4 bg-[#29374C] text-center'>
                <Bible />
            </header>
            <main className="flex flex-col justify-center">
                <section className='flex flex-col gap-8 items-center text-center p-4 rounded-lg py-10 min-h-full max-w-md mx-auto'>
                    <Image src='/radio-logo.svg' width={320} height={320} alt='logo casa de oracion nuevo pacto' />
                    <div>
                        <button className='w-32 h-32 bg-[#29374C] flex justify-center items-center text-white rounded-full' onClick={handlePlay}>
                            {
                                isPlay ? <FaPause size={50} /> : <FaPlay size={50} />
                            }
                        </button>
                    </div>
                    <div>
                        {
                            loading && (
                                <span>Cargando...</span>
                            )
                        }
                    </div>
                    <div className='mt-[-40px]'>
                        {
                            isPlay && !loading && <Image src='/wave.gif' width={160} height={60} alt='wave' />
                        }
                    </div>
                </section>
            </main>
        </>
    )
}
