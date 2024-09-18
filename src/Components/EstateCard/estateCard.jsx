import { Link } from 'react-router-dom'
import estate from '../../assets/img/estate.jpg'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { FiMapPin } from "react-icons/fi";

export default function EstateCard({ code, img = estate, price, control, meterage, location, room }) {
    return (
        <div className='w-4/12 max-md:w-6/12 max-sm:w-full p-5'>
            <div className='overflow-hidden shadow-cus-shadow'>
                <img className='w-full object-cover' src={img} alt="عکس ملک" />
                <div className='text-black dark:text-white flex flex-col gap-2 mt-4 px-4'>
                    <div className='flex gap-2'>
                        <p>نوع ملک : {control}</p>
                        |
                        <p className='mb-3'>قیمت : {price} تومان</p>
                    </div>
                    <p className='opacity-55 flex'><FiMapPin />{location}</p>
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-1'>
                            <IoBedOutline />
                            {room}
                        </div>
                        <div className='flex items-center gap-1'>
                            <TfiRulerAlt2 />
                            {meterage}متر
                        </div>
                    </div>
                    <div className='flex items-center text-black dark:text-white font-bold border-t-2'>
                        <Link to={`/Melk/${code}`} className='text-black bg-yellow-400 font-bold px-5 my-2 rounded-md'>بازدید</Link>
                        <MdOutlineKeyboardArrowLeft />
                    </div>
                </div>
            </div>
        </div>
    )
}