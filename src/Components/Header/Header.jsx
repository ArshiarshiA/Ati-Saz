import { Link, NavLink } from "react-router-dom";
import { FaLess, FaUserAlt } from "react-icons/fa";
import logo from '../../assets/img/atiSazlogo.png'
import DarkMode from "../DarkMode/darkMode";
import { useState } from "react";

export default function Header() {

    const checkIsDark = () => {
        if(document.body.classList.contains('dark') == true)    
            return false   
            else return true    
    }
    
    let [isDark, setIsDark] = useState(checkIsDark)

    const changeDarkStatus = () => setIsDark(isDark === false ? true : false)

    return (
        <div className="p-2 bg-black sticky top-0 z-10">
            <div className="max-w-[1200px] m-auto flex items-center justify-between p-2 px-5">
                <div>
                    <ul className="flex items-center gap-10 text-white">
                        <img className="w-56 object-contain" src={logo} alt="" />
                        <li>
                            <NavLink to={'/'}>صفحه اصلی</ NavLink>
                        </li>
                        <li>
                            <NavLink to={'/services'}>خدمات</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about-us'}>درباره ما</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/WorkUs'}>همکاری با ما</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <DarkMode darkStatus={isDark} changeStatus={changeDarkStatus} />
                    </div>
                    <Link className="flex items-center gap-3 bg-yellow-400 p-2 rounded-lg" to={'/login'}>
                        ثبت نام
                        <FaUserAlt />
                    </Link>
                    <Link className="flex items-center gap-3 text-white" to={'/login'}>
                        ورود
                    </Link>
                </div>
            </div>
        </div>
    )
}