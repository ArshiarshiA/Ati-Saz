import Footer from "../../Components/Footer/Footer";

export default function NotFind() {
    return (
        <>
            <div className="py-32 text-center bg-black">
                <h1 className="text-white text-8xl">404</h1>
                <p className="text-white my-10">متسفانه صفحه مورد نظر شما وجود ندارد :(</p>
                <a className="text-black p-3 rounded-lg bg-slate-200" href="http://localhost:3000/">برگشت به صفحه اصلی</a>
            </div>
            <Footer />
        </>
    )
}