import { useEffect, useState } from "react";


export default function UseFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function FetchData() {
        setLoading(true)
        try {
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);
            const result = await response.json();
            setData(result);
            setError(null)
           setLoading(false)

        } catch (e) {
            setError(`${e} some error is occured ! please try again`)
            setLoading(false)
        }
    }

    useEffect(() => {
        FetchData()
    }, [url]);
    return { data, error, loading }
}