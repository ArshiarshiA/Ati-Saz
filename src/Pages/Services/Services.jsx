import { Link } from "react-router-dom";
import Layout from "../../Layout";

export default function Services() {
    return (
        <Layout>
            <section className="text-black dark:text-white py-20 border-y px-10 select-none">
                <div className="flex items-center justify-evenly">
                    <div>
                        <h1 className="text-xl font-extralight underline transition-all ease-in-out delay-150 hover:scale-105 duration-300">لینک های دسترسی سریع به خدمات شهرسازی شهرداری مشهد</h1>
                    </div>
                    <div className="flex items-center gap-10">
                        <Link title="فاش" to='https://eservice.mashhad.ir/fa/index.php?module=web_directory&wd_id=100670'>
                            <img className="w-[220px]" src="https://fash.mashhad.ir/data/94/sis_theme_engine/placeHolders/fash/all/headerLogoTitle.png" alt="logo" />
                        </Link>
                        <Link title="شهرداری مشهد" to='https://esup.mashhad.ir/'>
                            <img className="w-[220px]" src="https://esup.mashhad.ir/images/municipality-name.png" alt="logo" />
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}