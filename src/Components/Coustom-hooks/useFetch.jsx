import { useState } from "react"
import { useEffect } from "react"

const useFetch = (url) => {
    const [error,setError] = useState()
    const [data,setData] = useState(null)
    const [isLogin,setIsLogin] = useState(true);
    useEffect (() => {
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error("Somthing is worng !")
            }
            return response.json()
        })
        .then((resData) => {
            setData(resData)
            setIsLogin(false)
            setError(null)
        })
        .catch ((error) => setError(error.message)) 
    },[url]);
    return {data,error,isLogin}
}
export default useFetch;