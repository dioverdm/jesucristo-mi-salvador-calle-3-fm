"use client"

import { getBibles, getBooks, getChapter, getChapters } from "@/utils"
import { useEffect, useRef, useState } from "react"
import { IoMdClose, IoMdBook } from "react-icons/io"

export default function Bible() {
    const [isOpen, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    return (
        <>
            <button className="flex items-center gap-2 font-semibold text-black" onClick={handleOpen}>
                Leer Biblia
                <IoMdBook size={24} />
            </button>
            <BibleModal
                open={isOpen}
                handleClose={handleClose}
            />
        </>
    )
}

function BibleModal({ open, handleClose }) {
    const [bibles, setBibles] = useState([])
    const [bibleID, setBibleID] = useState("")
    const [books, setBooks] = useState([])
    const [bookID, setBookID] = useState("")
    const [chapters, setChapters] = useState([])
    const [chapterID, setChapterID] = useState("")
    const contentRef = useRef()

    useEffect(() => {
        const getInitialBibles = async () => {
            const bibles = await getBibles()
            const onlySpanish = [...bibles.data].filter((bible) => {
                return bible.name.toLowerCase().includes('spanish') ||
                    bible.name.toLowerCase().includes('valera')
            })
            setBibles(onlySpanish.slice(0, 3))
        }
        getInitialBibles()
    }, [])

    useEffect(() => {
        const getInitialBooks = async () => {
            if (bibleID !== "") {
                const books = await getBooks({ bibleId: bibleID })
                setBooks(books)
            }
        }
        getInitialBooks()
    }, [bibleID])

    useEffect(() => {
        const getInitialChapters = async () => {
            if (bibleID !== "" && bookID !== "") {
                const chapters = await getChapters({ bibleId: bibleID, bookId: bookID })
                setChapters(chapters)
            }
        }
        getInitialChapters()
    }, [bookID, bibleID])

    useEffect(() => {
        const getInitialChapter = async () => {
            if (bibleID !== "" && chapterID !== "") {
                const chapter = await getChapter({ bibleId: bibleID, chapterID: chapterID })
                contentRef.current.innerHTML = chapter.data.content
            }
        }
        getInitialChapter()
    }, [bibleID, chapterID])

    const handleChangeBible = (event) => {
        const { value } = event.target
        setBibleID(value)
    }

    const handleChangeBook = (event) => {
        const { value } = event.target
        setBookID(value)
    }

    const handleChangeChapter = (event) => {
        const { value } = event.target
        setChapterID(value)
    }

    return (
        <div className={`${open ? 'block' : 'hidden'} fixed top-0 left-0 w-full min-h-screen z-[999]`}>
            <div onClick={handleClose} className="bg-black opacity-20 absolute top-0 left-0 w-full h-screen z-10"></div>
            <div className="bible max-w-md h-full bg-yellow-400 z-30 relative pt-2">
                <button className="flex items-center gap-2 font-semibold border-2 border-yellow-600 rounded-lg p-2 mx-auto" onClick={handleClose}>
                    Cerrar biblia <IoMdClose size={24} />
                </button>
                <div className="flex flex-col h-full z-[999]">
                    <div className="p-4">
                        <select onChange={handleChangeBible} name="">
                            <option value="">Seleccione una Biblia</option>
                            {
                                bibles?.map((bible) => (
                                    <option key={bible.id} value={bible.id}>
                                        {bible.name} | {bible.language.name}
                                    </option>
                                ))
                            }
                        </select>
                        <div className="flex items-center gap-2">
                            <select onChange={handleChangeBook} name="">
                                <option value="">Seleccione un Libro</option>
                                {
                                    books.data?.map((book) => (
                                        <option key={book.id} value={book.id}>
                                            {book.name}
                                        </option>
                                    ))
                                }
                            </select>
                            <select onChange={handleChangeChapter} name="">
                                <option value="">Seleccione un Capítulo</option>
                                {
                                    chapters.data?.map((chapter) => (
                                        <option key={chapter.id} value={chapter.id}>
                                            {chapter.number}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div ref={contentRef} className="contentBible text-left bg-white p-4 pb-24 flex flex-col gap-4 overflow-y-auto"></div>
                </div>
            </div>
        </div>
    )
}

