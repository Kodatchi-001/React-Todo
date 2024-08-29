import { useEffect, useState } from "react";

export default function Header() {
    const [date, setDate] = useState(null)
    //Ipmport date
    useEffect(() => {
        setDate(new Date());
    }, []);

    const Display_Date = () => {
        if (date) {
            const dayName = date.toLocaleString('default', { weekday: 'long' });
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();

            return (
                <h1 className="text-2xl lg:text-lg">
                    {`${dayName}, ${day} ${month} ${year}`}
                </h1>
            );
        }
        return null;
    }
    return <>
        <header className="w-full h-[35vh] lg:h-[28vh] Background-image">
            <div className="w-full h-full flex justify-center items-center Background-blur p-3">
                <div className="w-full lg:w-5/6 xl:w-[55%] h-4/6 flex justify-center lg:justify-between items-center lg:items-start flex-col lg:flex-row lg:py-5 gap-3 lg:gap-0 text-white">
                    <h1 className="text-4xl lg:text-2xl">Todo-App</h1>
                    {Display_Date()}
                </div>
            </div>
        </header>

    </>
}