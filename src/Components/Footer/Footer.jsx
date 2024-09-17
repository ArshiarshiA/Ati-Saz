import Logo from '../../assets/img/atiSazlogo.png'
import { FiUser } from "react-icons/fi"
import { FaPhone } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='bg-[#f8f8f8] dark:bg-black border-t-2 dark:border-t-gray-400'>
            <div className="max-w-[1200px] m-auto py-20 flex justify-between gap-5 text-black dark:text-white">
                <div className="w-3/12">
                    <img className='w-60' src={Logo} alt="" />
                    <hr className='my-4' />
                    <div className='flex items-center gap-2 '>
                        <div className='flex items-center justify-center size-9 rounded-full bg-[#33383b]'>
                            <FiUser className='text-white size-5' />
                        </div>
                        <p>مدیریت : علیرضا منصوری</p>
                    </div>
                    <div className='flex items-center gap-2 py-3'>
                        <div className='flex items-center justify-center size-9 rounded-full bg-[#33383b]'>
                            <FaPhone className='text-white size-5' />
                        </div>
                        <a href="tel:09156210050">شماره تماس : 09156210050</a>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <div className='flex items-center justify-center size-9 rounded-full bg-[#33383b]'>
                            <SiGooglemaps className='text-white size-5' />
                        </div>
                        <p>آدرس : مشهد , بین جلال 64 , 63</p>
                    </div>
                    <p className='mt-4'>*شعبه دیگری ندارد*</p>
                </div>
                <div className='flex flex-col gap-6 w-3/12'>
                    <a href="http://localhost:3000/">صفحه اصلی</a>
                    <Link to='/'>خدمات</Link>
                    <Link to='/'>درباره ما</Link>
                    <Link to='/'>همکاری با ما</Link>
                </div>
                <div className='w-3/12'>
                    <h3 className='text-3xl mb-2'>مختصری درباره ما</h3>
                    <p className='text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که </p>
                </div>
            </div>
            <div className='py-5 border-t-2 border-t-gray-200'>
                <div className='w-[1200px] m-auto flex justify-between text-black dark:text-white'>
                    <p>توسعه و طراحی : ارشیا منصوری</p>
                    <p>تمام موارد محفوظ است</p>
                </div>
            </div>
        </footer>
    )
}