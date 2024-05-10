"use client"

import { Howl } from "howler"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { FaPause, FaPlay } from "react-icons/fa"
import { CiStreamOn } from "react-icons/ci"


const Player = () => {
    const [isPlay, setPlay] = useState(false)
    const [loading, setLoading] = useState(false)

    const sound = useRef()

    useEffect(() => {
        sound.current = new Howl({
            src: ['https://radios.blumhost.es/8002/stream'],
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
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-gray-700 to-[rgba(98,98,98,0.2)] z-0">
            <div className="flex justify-between gap-4 h-fit py-4 px-2 items-center max-w-lg w-full mx-auto ">
                <div>
                    <button className={`${loading ? 'loading' : ''} playbutton w-20 h-20 bg-yellow-400 border-4 border-[#29374C] flex justify-center items-center text-[#29374C] rounded-full`} onClick={handlePlay}>
                        {
                            isPlay ? <FaPause size={30} /> : <FaPlay size={30} />
                        }
                    </button>
                </div>
                {
                    (isPlay && !loading) ? (
                        <div className="flex items-center gap-2 bg-[rgba(0,0,0,.6)] text-white p-2 rounded-lg w-full">
                            <CiStreamOn size={24} color="yellow" />
                            <b>Estás escuchando radio online</b>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 bg-[rgba(0,0,0,.6)] text-white p-2 rounded-lg w-full">
                            <CiStreamOn size={24} color="gray" />
                            <b>Escucha nuestra radio online</b>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const PlayerInstance = <Player />

export default PlayerInstance