import useAxios from "../../Hooks/useFetch/useFetch"
import EstateCard from "../EstateCard/estateCard"

export default function EstateSec({ control, title }) {

    let [data, isLoading] = useAxios('http://localhost:3001/files')

    return (
        <div className="max-w-[1200px] m-auto">
            <h1 className="text-3xl px-5 text-black dark:text-white font-bold">{title}</h1>
            <div className="px-5 mt-3">
                <hr className="border-black dark:border-white px-5" />
            </div>
            <div className="flex items-center flex-wrap">
                {isLoading ? (
                    <h1 className="text-black dark:text-white px-5">درحال بارگذاری...</h1>
                ) : (
                    data.filter(item => item.control === control).map(item => {
                        return <EstateCard code={item.code} key={item.id} control={item.control} meterage={item.Meterage} name={item.location} price={item.price} location={item.location} room={item.room} />
                    })
                )}
            </div>
        </div>
    )
}