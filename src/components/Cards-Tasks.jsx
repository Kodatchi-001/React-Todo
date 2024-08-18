export default function Cards_Tasks() {
    return <>
        <section className="w-full h-[72vh] flex justify-center">
            <div className="w-[58%] h-full mt-[-11.6vh] rounded-xl shadow-lg flex flex-wrap p-2 px-5 pb-8 bg-white">
                <div className="w-full h-[15%] flex justify-between items-center">
                    <div className="w-[85%] h-full py-[14.5px]">
                        <input type="text" className="w-full h-full rounded-lg text-lg px-5 bg-gray-200" placeholder="Create New Task" />
                    </div>
                    <div className="w-[15%] h-full flex justify-end items-center">
                        <button className="px-10 py-2 rounded-lg text-lg text-white bg-black">
                            Add
                        </button>
                    </div>
                </div>
                <div className="w-full h-[15%] flex gap-3 items-center">
                    <h1 className="text-lg cursor-pointer px-5 py-2 rounded-lg bg-black text-white">All Tasks</h1>
                    <h1 className="text-lg cursor-pointer px-5 py-2 rounded-lg bg-gray-200 text-black">Tasks Checked</h1>
                </div>
                <div className="w-full h-[70%] flex flex-col mt-auto gap-4">
                    <div className="w-full h-[8vh] flex px-5 rounded-lg bg-gray-200">
                        <div className="w-4/6 h-full flex items-center gap-4">
                            <div className="p-2 rounded-md border-2 border-black cursor-pointer"></div>
                            <h1 className="text-xl">Task</h1>
                        </div>
                        <div className="w-2/6 h-full flex justify-end items-center">
                            <i class='bx bx-dots-vertical text-2xl rounded-lg bg-white cursor-pointer'></i>
                        </div>
                    </div>
                    {/* <div className="w-full h-full flex justify-center items-center">
                        <h1 className="text-gray-300 text-4xl">Let`s get some work done</h1>
                    </div> */}
                </div>
            </div>
        </section>
    </>
}