import Layout from "../../Layout";
import useAxios from "../../Hooks/useFetch/useFetch";
import { useParams } from "react-router-dom";
import defaultImg from '../../assets/img/estate.jpg'
import { LuMapPin } from "react-icons/lu";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { CiCompass1 } from "react-icons/ci";

export default function Melk() {

    let [data, isLoading] = useAxios(`http://localhost:3001/files`)
    let melkId = useParams()

    return (
        <Layout>
            <section>
                <div className="flex gap-5 max-w-[1200px] m-auto py-10">
                    {isLoading ? (
                        <h1 className="text-black dark:text-white">درحال بارگذاری</h1>
                    ) : (
                        data.filter(item => item.code == melkId.MelkCode)
                            .map(result => (
                                <>
                                    <div key={result.id} className="text-black dark:text-white border rounded-lg overflow-hidden">
                                        <img className="w-96 object-cover" src={defaultImg} alt="" />
                                        <div className="p-3">
                                            <div className="flex gap-2 mt-3">
                                                <p>قیمت : {result.price}تومان</p>
                                            </div>
                                            <div className="flex gap-2 my-4">
                                                <LuMapPin />
                                                <p>آدرس : {result.location}</p>
                                            </div>
                                            <a href="tel:09333008246" className="flex items-center gap-3 w-[60%] bg-yellow-400 text-black rounded-md p-1">
                                                <FaPhoneFlip />
                                                <span>منصوری : 09333008246</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="self-end border border-gray-300 text-black dark:text-white rounded-md p-5">
                                        <div className="flex gap-5">
                                            <div className="flex items-center gap-1">
                                                <FaBed />
                                                <p>اتاق : {result.room}</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <TfiRulerAlt2 />
                                                <p>متراژ : {result.Meterage}متر</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <CiCompass1 />
                                                <p>جهت ملک : {result.direction}</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <p>کاربری : {result.control}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                    )}
                </div>
            </section>
        </Layout>
    )
}