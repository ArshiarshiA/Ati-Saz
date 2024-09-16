import { PiMoonLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";

export default function DarkMode({ darkStatus, changeStatus }) {

    const darkHandler = () => {
        document.body.classList.toggle('dark')
        changeStatus()
    }

    return (
        darkStatus ? (
            <>
                <span className="text-white">روشن</span><GoSun onClick={darkHandler} className="text-3xl cursor-pointer text-yellow-300" />
            </>
        ) : (
            <>
                <span className="text-white">تاریک</span><PiMoonLight onClick={darkHandler} className="text-3xl cursor-pointer dark:text-gray-500" />
            </>
        )
    )

}