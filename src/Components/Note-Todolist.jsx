export default function Note_Todolist() {
    return <>
        <div className="w-[70%] h-full px-7 pt-7 flex justify-center items-center">
            <div className="w-[90%] h-full flex flex-wrap">
                <div className="w-full h-[15%] flex justify-between">
                    <div className="w-4/5 h-4/6 flex justify-center flex-col gap-1">
                        <h1 className="text-3xl font-bold">Good Morning, Sullivan!</h1>
                        <h1 className="text-xl text-gray-500">Today, Friday 8 August 2024</h1>
                    </div>
                </div>
                <div className="w-full h-[72%] flex flex-col mt-auto gap-3">
                    <div className="w-full h-[6.5vh] pl-3 pr-2 py-2 flex items-center rounded-lg gap-3 bg-white">
                        <div className="p-3 rounded-md border border-gray-400">

                        </div>
                        <h1 className="text-lg">
                            Task
                        </h1>
                        <div className="px-2 py-1 ml-auto rounded-lg bg-gray-200">
                            M
                        </div>
                    </div>
                    <div className="w-full h-[6.5vh] pl-3 pr-2 py-2 flex items-center rounded-lg gap-3 bg-white">
                        <div className="p-3 rounded-md border border-gray-400">

                        </div>
                        <h1 className="text-lg">
                            Task
                        </h1>
                        <div className="px-2 py-1 ml-auto rounded-lg bg-gray-200">
                            M
                        </div>
                    </div>
                    <div className="w-full h-[6.5vh] pl-3 pr-2 py-2 flex items-center rounded-lg gap-3 bg-white">
                        <div className="p-3 rounded-md border border-gray-400">

                        </div>
                        <h1 className="text-lg">
                            Task
                        </h1>
                        <div className="px-2 py-1 ml-auto rounded-lg bg-gray-200">
                            M
                        </div>
                    </div>
                </div>
                <div className="w-full h-[10%] flex justify-between items-center">
                    <button className="w-[45%] h-5/6 flex items-center rounded-full px-6 bg-black">
                        <h1 className="text-white">Create new task</h1>
                    </button>
                    <button className="px-4 py-2 rounded-full shadow-xl bg-white">
                        S
                    </button>
                </div>
            </div>
        </div>
    </>
}