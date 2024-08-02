import Home_Logo from '../Assets/home-logo.png';
import Personnel_Logo from '../Assets/personnel.png';
import Work_Logo from '../Assets/work.png'
export default function List_Todolist() {
    return <>
        <div className="w-full lg:w-[25%] h-full p-5 pl-6 pt-7 shadow-xl lg:rounded-xl bg-white">
            <div className="w-full flex flex-wrap gap-5">
                <h1 className="font-bold text-3xl">Private</h1>
                <div className="w-full flex flex-col gap-3">
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4 rounded-lg cursor-pointer bg-gray-200">
                        <div className="w-[90%] h-full flex items-center gap-4">
                            <div className='w-[6%] sm:w-[4%] lg:w-[6%]'>
                                <img src={Home_Logo} className='w-full' alt="" />
                            </div>
                            <h1>Home</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1 className="px-2 rounded-full bg-white">8</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4 rounded-lg cursor-pointer">
                        <div className="w-[90%] h-full flex items-center gap-4">
                            <div className='w-[6%] sm:w-[4%] lg:w-[6%]'>
                                <img src={Work_Logo} className='w-full' alt="" />
                            </div>
                            <h1>Work</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1 className="px-2 rounded-full bg-gray-200">16</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4 rounded-lg cursor-pointer">
                        <div className="w-[90%] h-full flex items-center gap-4">
                            <div className='w-[6%] sm:w-[4%] lg:w-[6%]'>
                                <img src={Personnel_Logo} className='w-full' alt="" />
                            </div>
                            <h1>Personal</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center">
                            <h1 className="px-2 rounded-full bg-gray-200">4</h1>
                        </div>
                    </div>
                </div>
                <button className="w-full h-[5.5vh] px-4 text-start rounded-full bg-gray-200">
                    <button className="flex items-center gap-3 lg:gap-1">
                        <i class='bx bx-plus text-lg'></i>
                        Create new list
                    </button>
                </button>
            </div>
        </div>
    </>
}