import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

export default function Layout({ children }) {
    return (
        <div className="bg-white dark:bg-black">
            <Header />
            {children}
            <Footer />
        </div>
    )
}