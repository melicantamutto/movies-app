import { useState, useEffect } from "react";

const useFetch = (url, options) =>{
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const resp = await fetch(url, options);
                const json = await resp.json();
                setResult(json);
                setLoading(false)
            }catch(err){
                setError(err);
                setLoading(false);
            }
        }
        fetchData();
    }, [url, options]);
    return {loading, result, error};
}


export default useFetch;