import { useId, useState } from "react";
import Layout from "../../Layout";
import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useFetch/useFetch";
import EstateCard from "../../Components/EstateCard/estateCard";
import Header from "../../Components/Header/Header";
import { HiPlusSmall } from "react-icons/hi2";

export default function Search() {

    let code = useParams().code;
    let [data, isLoading] = useAxios('http://localhost:3001/files')

    return (
        <Layout>
            <section className="max-w-[1200px] m-auto py-10">
                <p className="dark:text-white text-black">1 نتیجه یافت شد</p>
                {isLoading ? (
                    <h1>is loading</h1>
                ) : (
                    data.filter(item => item.code == code)
                        .map(filteredItem => <EstateCard key={filteredItem.id} code={filteredItem.code} meterage={filteredItem.Meterage} location={filteredItem.location} price={filteredItem.price} room={filteredItem.room} img={filteredItem.img} control={filteredItem.control} />)
                    )}
                <div className="pt-20">
                    <div className="flex items-center gap-1 text-white">
                        <HiPlusSmall className="text-black dark:text-white" />
                        <span className="text-black dark:text-white">دقت داشته باشید که هر فایل دارای کد , از عدد 1000 تا الی آخر است</span>
                    </div>
                </div>
            </section>
        </Layout>
    )
}