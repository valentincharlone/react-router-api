import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setloading] = useState(false)


    useEffect (() => {
        setloading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => setError('Error de server')) 
            .finally(() => setloading(false))
    }, [url])

    return {data, error, loading}
}
