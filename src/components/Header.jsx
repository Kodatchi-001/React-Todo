export default function Header() {
    return <>
        <header className="w-full h-[28vh] Background-image">
            <div className="w-full h-full flex justify-center items-center Background-blur p-3">
                <div className="w-full lg:w-[58%] h-4/6 flex justify-center lg:justify-between items-center lg:items-start flex-col lg:flex-row lg:py-5 text-white">
                    <h1 className="text-3xl lg:text-2xl">Todo-App</h1>
                    <h1 className="text-lg">Sunday,August 18,2024</h1>
                </div>
            </div>
        </header>
    </>
}