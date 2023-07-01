"use client"

import { useCallback, useMemo, useEffect, useState } from 'react';
import { Howl, Howler } from 'howler';
import {
  FaPlay,
  FaPause
} from 'react-icons/fa'
import Image from 'next/image';

export default function Home() {
  const [isPlay, setPlay] = useState(false)
  const [loading, setLoading] = useState(false)

  const sound = useMemo(() => {
    return new Howl({
      src: ['http://stream.zeno.fm/jq3vvoybrrjtv'],
      html5: true,
      onload: () => {
        setLoading(false)
      }
    })
  }, [])

  useEffect(() => {
    Howler.stop()
    setPlay(false)
  }, [])

  const handlePlay = () => {
    isPlay ? sound.stop() : sound.play()
    setPlay(!isPlay)
  }

  return (
    <main className="flex flex-col min-h-screen justify-center">
      <section className='flex flex-col gap-8 items-center text-center p-4 rounded-lg py-10 min-h-full max-w-md mx-auto'>
        <Image src='/logo.png' width={60} height={60} alt='logo casa de oracion nuevo pacto' />
        <div className='text-center p-2'>
          <span>{new Date().toLocaleString()}</span>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='text-5xl font-bold'>Casa de Oración Nuevo Pacto</h4>
          <span className='text-2xl font-semibold'>Radio Online</span>
        </div>
        <div>
          <button className='w-32 h-32 bg-black flex justify-center items-center text-white rounded-full' onClick={handlePlay}>
            {
              isPlay ? <FaPause size={50} /> : <FaPlay size={50} />
            }
          </button>
        </div>
        <div className='mt-[-40px]'>
          {
            isPlay && !loading && <Image src='/wave.gif' width={160} height={60} alt='wave' />
          }
        </div>
      </section>
    </main>
  )
}
