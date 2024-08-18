export default function Cards_Tasks() {
    return <>
        <section className="w-full h-[72vh] flex justify-center p-3">
            <div className="w-full lg:w-[58%] h-full mt-[-7vh] lg:mt-[-11.6vh] rounded-xl shadow-lg flex flex-wrap lg:p-2 px-3 lg:px-5 pb-8 bg-white">
                <div className="w-full h-[15%] flex justify-between items-center">
                    <div className="w-full lg:w-[85%] h-full py-[14.5px]">
                        <input type="text" className="w-full h-full rounded-lg text-lg px-5 bg-gray-200" placeholder="Create New Task" />
                    </div>
                    <div className="w-[15%] h-full lg:flex justify-end items-center hidden">
                        <button className="px-10 py-2 rounded-lg text-lg text-white bg-black">
                            Add
                        </button>
                    </div>
                </div>
                <div className="w-full h-[15%] gap-2 flex justify-between lg:justify-start items-center">
                    <button className="px-5 py-2 rounded-lg text-white bg-black lg:hidden">
                        Add
                    </button>
                    <h1 className="lg:text-lg cursor-pointer px-5 py-2 rounded-lg bg-black text-white">All Tasks</h1>
                    <h1 className="lg:text-lg cursor-pointer px-5 py-2 rounded-lg bg-gray-200 text-black">Tasks Checked</h1>
                </div>
                <div className="w-full h-[70%] flex flex-col mt-auto gap-4">
                    <div className="w-full h-[7vh] lg:h-[8vh] flex px-5 rounded-lg bg-gray-200">
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