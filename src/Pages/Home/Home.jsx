import Layout from "../../Layout";
import Services from "../../Components/services/Services";
import EstateSec from "../../Components/EstateSec/estateSec";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { IoBusiness } from "react-icons/io5";
import { TbBusinessplan } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";

function Home() {

    let [searchValue, setSearchValue] = useState('')

    const takeValueHandler = (e) => setSearchValue(e.target.value);

    return (
        <Layout>
            <section className="min-h-[800px] bg-item bg-cover bg-no-repeat bg-bottom">
                <div className="max-w-[1200px] m-auto">
                    <div className="py-20 text-center">
                        <ReactTyped
                            className="text-white text-3xl"
                            showCursor
                            strings={[
                                'ملک رویایی شما در فایلینگ املاک ماست',
                                '',
                                ''
                            ]}
                            typeSpeed={100}
                            backSpeed={80}
                            loop
                        >
                            <span></span>
                        </ReactTyped>
                        <div>
                            <div className="my-5 mt-20 flex justify-center items-center">
                                <input onChange={takeValueHandler} autoFocus placeholder="کد یا اسم فایل مورد نظر خود را وارد کنید" className="bg-[#47474794] text-white w-2/4 rounded-full outline-none p-3" type="text" />
                                <Link to={`/search/${searchValue}`}>
                                    <SlArrowLeft className="bg-[#47474794] w-10 h-10 p-3 mr-4 text-white rounded-full hover:mr-6 transition-all" />
                                </Link>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="flex justify-stretch py-20 max-sm:flex-col max-sm:items-center">
                                <Services children={<TbBusinessplan className="m-auto my-2 text-3xl text-yellow-400" />} text="یک متن تصادفی صرفا برای پر کردن محتوا و نگرفتن وقت اضافی در توسعه" title="ویژگی" />
                                <Services children={<FaChartBar className="m-auto my-2 text-3xl text-yellow-400" />} text="یک متن تصادفی صرفا برای پر کردن محتوا و نگرفتن وقت اضافی در توسعه" title="ویژگی" />
                                <Services children={<IoBusiness className="m-auto my-2 text-3xl text-yellow-400" />} text="یک متن تصادفی صرفا برای پر کردن محتوا و نگرفتن وقت اضافی در توسعه" title="ویژگی" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <EstateSec control='تجاری' title='ملک های تجاری' />
            </section>
            <section className="py-4">
                <EstateSec control='مسکونی' title='ملک های مسکونی' />
            </section>
        </Layout>
    )
}
export default Home