"use client";

const API_URL = "https://api.scripture.api.bible/v1"

const END_POINTS = {
    bibles: `${API_URL}/bibles`,
    books: (bibleId) => `${API_URL}/bibles/${bibleId}/books`,
    chapters: (bibleId, bookId) => `${API_URL}/bibles/${bibleId}/books/${bookId}/chapters`,
    chapter: (bibleId, chapterID) => `${API_URL}/bibles/${bibleId}/chapters/${chapterID}`
}

export async function getBibles() {
    try {
        const request = await fetch(END_POINTS.bibles, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.NEXT_PUBLIC_API_KEY
            }
        })

        if (request.ok) {
            const data = await request.json()
            return data
        }

    } catch (error) {
        return null
    }

    return null
}

export async function getBooks({ bibleId }) {
    try {
        const request = await fetch(END_POINTS.books(bibleId), {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.NEXT_PUBLIC_API_KEY
            }
        })

        if (request.ok) {
            const data = await request.json()
            return data
        }

    } catch (error) {
        return null
    }

    return null
}

export async function getChapters({ bibleId, bookId }) {
    try {
        const request = await fetch(END_POINTS.chapters(bibleId, bookId), {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.NEXT_PUBLIC_API_KEY
            }
        })

        if (request.ok) {
            const data = await request.json()
            return data
        }

    } catch (error) {
        return null
    }

    return null
}

export async function getChapter({ bibleId, chapterID }) {
    try {
        const request = await fetch(END_POINTS.chapter(bibleId, chapterID), {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.NEXT_PUBLIC_API_KEY
            }
        })

        if (request.ok) {
            const data = await request.json()
            return data
        }

    } catch (error) {
        return null
    }

    return null
}