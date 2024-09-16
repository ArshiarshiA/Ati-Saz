import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(apiUrl){
    let [data , setData] = useState(null)
    let [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        axios
        .get(apiUrl)
        .then(response => response.data)
        .then(responseData => {
            setData(responseData)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    } , [])

    return [data , isLoading]
}
export default useAxios;