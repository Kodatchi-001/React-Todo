import { displayDate } from "../Utils/Date"
export default function Note() {
    return <>
        <div className="w-full lg:w-[70%] h-full px-3 lg:px-7 lg:pt-7 flex justify-center items-center">
            <div className="w-full lg:w-[90%] h-full flex flex-wrap gap-5 lg:gap-0">
                <div className="w-full h-[15%] flex justify-between">
                    <div className="w-4/5 h-4/6 flex justify-center flex-col gap-1">
                        <h1 className="text-3xl font-bold">Good Morning, Sullivan!</h1>
                        {/* <h1 className="text-xl text-gray-500">Today, Friday 8 August 2024</h1> */}
                        <h1 className="text-xl text-gray-500">{displayDate()}</h1>
                    </div>
                </div>
                <div className="w-full h-[73%] flex flex-col mt-auto gap-3">
                    <div className="w-full h-[6.5vh] pl-3 pr-2 py-2 flex items-center rounded-lg gap-3 bg-white">
                        <div className="p-2 rounded-md border cursor-pointer border-gray-400">

                        </div>
                        <h1 className="text-lg">
                            Task
                        </h1>
                        <button className="px-1 ml-auto rounded-lg bg-gray-200">
                            <i class='bx bx-dots-vertical text-2xl'></i>
                        </button>
                    </div>
                    <div className="w-full h-[6.5vh] pl-3 pr-2 py-2 flex items-center rounded-lg gap-3 bg-white">
                        <div className="p-2 rounded-md border cursor-pointer border-gray-400">

                        </div>
                        <h1 className="text-lg">
                            Task
                        </h1>
                        <button className="px-1 ml-auto rounded-lg bg-gray-200">
                            <i class='bx bx-dots-vertical text-2xl'></i>
                        </button>
                    </div>
                    <div className="w-full h-[6.5vh] pl-3 pr-2 py-2 flex items-center rounded-lg gap-3 bg-white">
                        <div className="p-2 rounded-md border cursor-pointer border-gray-400">

                        </div>
                        <h1 className="text-lg">
                            Task
                        </h1>
                        <button className="px-1 ml-auto rounded-lg bg-gray-200">
                            <i class='bx bx-dots-vertical text-2xl'></i>
                        </button>
                    </div>
                </div>
                <div className="w-full h-[10%] flex justify-between items-center">
                    <button className="w-4/5 sm:w-[45%] h-full lg:h-5/6 flex items-center rounded-full gap-3 lg:gap-1 px-6 py-2 lg:py-0 text-white bg-black">
                        <i class='bx bx-plus text-lg'></i>
                        Create new task
                    </button>
                    <button className="px-3 py-2 rounded-full shadow-xl bg-white">
                        <i class='bx bx-check text-2xl'></i>
                    </button>
                </div>
            </div>
        </div>
    </>
}