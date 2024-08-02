export default function List_Todolist() {
    return <>
        <div className="w-[25%] h-full p-5 pl-6 pt-7 shadow-xl rounded-xl bg-white">
            <div className="w-full flex flex-wrap gap-5">
                <h1 className="font-bold text-3xl">Private</h1>
                <div className="w-full flex flex-col gap-3">
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4 rounded-lg bg-gray-200">
                        <div className="w-[90%] h-full flex items-center gap-5">
                            <h1>A</h1>
                            <h1>Home</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1>N</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4">
                        <div className="w-[90%] h-full flex items-center gap-5">
                            <h1>B</h1>
                            <h1>Completed</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1>N</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4">
                        <div className="w-[90%] h-full flex items-center gap-5">
                            <h1>C</h1>
                            <h1>Personal</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1>N</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4">
                        <div className="w-[90%] h-full flex items-center gap-5">
                            <h1>D</h1>
                            <h1>Work</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1>N</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4">
                        <div className="w-[90%] h-full flex items-center gap-5">
                            <h1>E</h1>
                            <h1>Diet</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1>N</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4">
                        <div className="w-[90%] h-full flex items-center gap-5">
                            <h1>F</h1>
                            <h1>List Of Book</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1>N</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4">
                        <div className="w-[90%] h-full flex items-center gap-5">
                            <h1>G</h1>
                            <h1>Road trip list</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1>N</h1>
                        </div>
                    </div>
                </div>
                <button className="w-full h-[5.5vh] px-4 text-start rounded-full bg-gray-200">
                    <h1>Create new list</h1>
                </button>
            </div>
        </div>
    </>
}