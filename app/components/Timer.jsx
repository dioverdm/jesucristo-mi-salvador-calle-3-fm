import { useEffect, useState } from "react"

export default function Timer() {
    const [time, setTime] = useState(null)

    useEffect(() => {
        const loopback = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(loopback)
    }, [])

    return (
        <>
            <div>
                <b>{time}</b>
            </div>
        </>
    )
}