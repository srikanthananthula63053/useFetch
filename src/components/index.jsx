import { useEffect, useState } from "react";


export default function UseFetch(url, option = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function FetchData(){
        setLoading(true)
        try {
            const response = await fetch(url,{...option})
            
        } catch (e) {
            setError(`${e} some error is occured ! please try again`)
            setLoading(false)
        }
    }

    useEffect(() => {
        FetchData()
    }, [url])
}