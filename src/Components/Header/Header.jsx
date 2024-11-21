import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/img/atiSazlogo.png'
import DarkMode from "../DarkMode/darkMode"
import { IoMdMenu } from "react-icons/io";
import { useRef, useState } from "react"
import { FaHome } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHandHoldingHand } from "react-icons/fa6";


export default function Header() {

    let [menuIs, setMenuIs] = useState(true)
    let menu = useRef(null)

    const checkIsDark = () => {
        if (document.body.classList.contains('dark') == true) return false
        else return true
    }

    let [isDark, setIsDark] = useState(checkIsDark)

    const changeDarkStatus = () => setIsDark(isDark === false ? true : false)

    const menuHandler = () => {
        setMenuIs(menuIs === false ? true : false)
        menuIs ? menu.current.classList.add('w-2/3') : menu.current.classList.remove('w-2/3')
    }

    return (
        <div className="p-2 bg-black sticky top-0 z-10">
            <div className="max-w-[1200px] m-auto flex items-center justify-between p-2 px-5">
                <div className="max-[944px]:hidden">
                    <ul className="flex items-center gap-10 text-white">
                        <Link to={'/'}>
                            <img className="w-56 object-contain" src={logo} alt="" />
                        </Link>
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
                <div
                    ref={menu}
                    className="fixed top-0 bottom-0 right-0 w-0 overflow-hidden bg-[#353535] transition-all"
                >
                    <div className="p-4">
                        <ul className="text-white flex flex-col gap-10 text-xl">
                            <img className="w-56 object-contain" src={logo} alt="" />
                            <li className="flex items-center gap-2">
                                <FaHome size={25} />
                                <NavLink to={'/'}>صفحه اصلی</ NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaHandHoldingHand size={25} />
                                <NavLink to={'/services'}>خدمات</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaUsers size={25} />
                                <NavLink to={'/about-us'}>درباره ما</NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaHandshake size={25} />
                                <NavLink to={'/WorkUs'}>همکاری با ما</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 max-[944px]:w-full">
                    <div className="flex items-center gap-2">
                        <DarkMode darkStatus={isDark} changeStatus={changeDarkStatus} />
                        <Link to={'/login'}>
                            <button className="bg-yellow-400 rounded-md px-7 py-1 mr-5">ورود</button>
                        </Link>
                    </div>
                    <div onClick={menuHandler}>
                        <IoMdMenu size={25} className="hidden max-[944px]:block text-white cursor-pointer" />
                    </div>
                </div>
            </div>
        </div >
    )
}