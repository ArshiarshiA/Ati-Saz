import Header from "./Components/Header/Header";

export default function Layout({ children }) {
    return (
        <div className="bg-white dark:bg-black">
            {children}
        </div>
    )
}