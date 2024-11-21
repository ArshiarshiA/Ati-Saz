export default function Services({ title, text, children }) {
    return (
        <div className="p-3 w-4/12 max-sm:w-11/12">
            <div className="border-white border-2 border-spacing-1 p-5 rounded-lg text-white">
                {children}
                <h1>{title}</h1>
                <div className="text-justify">
                    <p className="pt-5">{text}</p>
                </div>
            </div>
        </div>
    )
}