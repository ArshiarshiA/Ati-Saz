import { useEffect, useState } from "react";
import Layout from "../../Layout";
import useAxios from "../../Hooks/useFetch/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

export default function Panel() {

    let [presentData, setPresentData] = useState(null)
    let [newInfo, setNewInfo] = useState({})
    let navigate = useNavigate()

    const changeHandler = (e) => setNewInfo({ ...newInfo, [e.target.name]: e.target.value })

    const sendHandler = () => {
        axios.post('http://localhost:3001/files', newInfo)
        navigate('/')
    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:3001/files/${id}`)
        navigate('/')
    }

    useEffect(() => {
        axios
            .get('http://localhost:3001/files')
            .then(response => setPresentData(response.data))
    }, [])

    return (
        <Layout>
            <section className="p-10">
                <div className="max-w-[1400px] m-auto flex justify-center gap-10">
                    <div className="w-1/2">
                        <form action="">
                            <div>
                                <h1 className="dark:text-white text-5xl border-r-2 border-r-yellow-400 pr-2">ثبت فایل</h1>
                                <p className="dark:text-gray-300 mb-5 mt-2">فرم زیر را پر کنید</p>
                                <div className="flex flex-col gap-16">
                                    <input
                                        autoComplete="off"
                                        className="pb-2 outline-none border-b bg-white dark:text-white dark:bg-black"
                                        name="Meterage"
                                        placeholder="متراژ ملک را وارد کنید"
                                        onChange={changeHandler} type="text"
                                    />
                                    <input
                                        autoComplete="off"
                                        className="pb-2 outline-none border-b bg-white dark:text-white dark:bg-black"
                                        name="price"
                                        placeholder="قیمت ملک را وارد کنید"
                                        onChange={changeHandler} type="text"
                                    />
                                    <input
                                        autoComplete="off"
                                        className="pb-2 outline-none border-b bg-white dark:text-white dark:bg-black"
                                        name="location"
                                        placeholder="آدرس ملک را وارد کنید"
                                        onChange={changeHandler} type="text"
                                    />
                                    <input
                                        autoComplete="off"
                                        className="pb-2 outline-none border-b bg-white dark:text-white dark:bg-black"
                                        name="control"
                                        placeholder="کاربری ملک را وارد کنید"
                                        onChange={changeHandler} type="text"
                                    />
                                    <input
                                        autoComplete="off"
                                        className="pb-2 outline-none border-b bg-white dark:text-white dark:bg-black"
                                        name="room"
                                        placeholder="تعداد اتاق های ملک را وارد کنید"
                                        onChange={changeHandler} type="text"
                                    />
                                    <input
                                        autoComplete="off"
                                        className="pb-2 outline-none border-b bg-white dark:text-white dark:bg-black"
                                        name="direction"
                                        placeholder="جهت ملک را وارد کنید"
                                        onChange={changeHandler} type="text"
                                    />
                                    <input
                                        autoComplete="off"
                                        className="pb-2 outline-none border-b bg-white dark:text-white dark:bg-black"
                                        name="code"
                                        placeholder="کد مورد نظر ملک را وارد کنید"
                                        onChange={changeHandler} type="text"
                                    />
                                </div>
                                <button onClick={sendHandler} className="text-black bg-yellow-500 px-5 py-1 rounded-md mt-2">ثبت</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-1/2">
                        <div className="max-w-[1000px] m-auto">
                            <h1 className="dark:text-white text-5xl border-r-2 border-r-yellow-400 pr-2 mb-5">حذف فایل</h1>
                            <div className="flex flex-wrap">
                                {presentData?.map(file => (
                                    <div className="p-5">
                                        <div className="flex justify-between items-center gap-16 text-black dark:text-white border rounded-md px-3 py-1">
                                            <h1>کد{file.code}</h1>
                                            <MdDelete onClick={() => deleteHandler(file.id)} className="cursor-pointer hover:text-red-700 transition-all" size={30} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="p-10">
                <form action="">
                    <div className="max-w-[1000px] m-auto">
                        <h1 className="dark:text-white text-5xl border-r-2 border-r-yellow-400 pr-2 mb-5">حذف فایل</h1>
                        <div className="flex flex-wrap outline-none p-10">
                            {presentData?.map(file => (
                                <div className="p-5 w-3/12">
                                    <div className="flex justify-between items-center gap-16 text-white border rounded-md px-3 py-1">
                                        <h1>کد{file.code}</h1>
                                        <MdDelete onClick={() => deleteHandler(file.id)} className="cursor-pointer hover:text-red-700 transition-all" size={30} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>
            </section> */}
        </Layout>
    )
}