import { IoLockOpen } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Layout from "../../Layout";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

export default function Login() {

    let [showError, setShowError] = useState(false)
    let userName = useRef(null)
    let password = useRef(null)
    const navigate = useNavigate()

    const navigateHandler = (e) => {
        if (userName.current.value && password.current.value == 'adminam') {
            navigate('/melkPanel')
        } else {
            // e.preventDefault()
            setShowError(true)
        }
    }

    return (
        <>
            <Layout>
                <main className="flex justify-center items-center p-20 max-[483px]:px-0">
                    <div className="w-80 p-5 rounded-lg text-gray-400 bg-black border border-gray-400 shadow">
                        <h1 className="w-full text-center text-xl">ورود</h1>
                        <form action="">
                            <div className="flex flex-col gap-2 text-gray-400 py-5">
                                <label htmlFor="">نام کاربری</label>
                                <div className="relative">
                                    <input ref={userName} className="py-2 pr-7 px-1 w-full outline-none bg-black text-gray-400 border border-gray-500 rounded-md" type="text" placeholder="نام کاربری خود را وارد کنید" />
                                    <FaUser className="absolute right-2 top-3 text-yellow-400" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-gray-400 py-5">
                                <label htmlFor="">رمز عبور</label>
                                <div className="relative">
                                    <input ref={password} className="py-2 pr-7 px-1 w-full outline-none bg-black text-gray-400 border border-gray-500 rounded-md" type="password" placeholder="رمز خود را وارد کنید" />
                                    <IoLockOpen className="absolute right-2 top-3 text-yellow-400" />
                                </div>
                            </div>
                            {showError && (
                                <p className="text-red-600 pb-3">رمز عبور یا نام کاربری اشتباه است</p>
                            )}
                            <button type="button" onClick={navigateHandler} className="flex items-center justify-between w-full text-yellow-400">
                                ورود
                                <LuArrowLeft size={25} />
                            </button>
                        </form>
                    </div>
                </main>
            </Layout>
        </>
    )
}