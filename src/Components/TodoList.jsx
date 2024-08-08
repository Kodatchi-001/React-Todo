import { useEffect, useState } from 'react';
import { Create_List } from "../Utils/Create-list"
import { Scrolle_items, Button_Items } from "../Utils/Create-list";

export default function TodoList() {
    const [selected_icone, set_selected_icone] = useState();
    const [selected_colors, set_selected_colors] = useState();

    const [isIconSelected, setIsIconSelected] = useState(true);

    const icone = () => {
        document.querySelector('.icone').style.display = 'none';
    }

    useEffect(() => {
        const icons = document.querySelectorAll('.card-slides i');
        icons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                set_selected_icone(e.target.classList.value);
                icone()

                setIsIconSelected(true);

                document.querySelector('.icone_select').classList.add('hiden-show');
                document.querySelector('.icone_select').classList.remove('hiden-select');

                document.querySelector('.color_select').classList.add('hiden-select');
                document.querySelector('.color_select').classList.remove('hiden-show');

            });
        });

        const colors = document.querySelectorAll('.colors div');
        colors.forEach(color => {
            color.addEventListener('click', (e) => {
                set_selected_colors(e.target.classList.value);
                icone()

                setIsIconSelected(false);

                document.querySelector('.color_select').classList.add('hiden-show');
                document.querySelector('.color_select').classList.remove('hiden-select');

                document.querySelector('.icone_select').classList.add('hiden-select');
                document.querySelector('.icone_select').classList.remove('hiden-show');

            });
        });
    }, []);

    const handleCreateList = () => {
        if (isIconSelected) {
            Create_List(selected_icone);
        } else {
            Create_List(selected_colors);
        }
        set_selected_icone('');
        set_selected_colors('');
        document.querySelector('.icone').style.display = 'flex';
    };
    return <>
        <div className="w-full lg:w-[25%] h-full flex flex-col items-center p-5 pl-6 pt-7 shadow-xl lg:rounded-xl gap-5 bg-white">
            <div className="w-full flex flex-wrap gap-5">
                <h1 className="font-bold text-3xl">Private</h1>
                <div className="w-full flex flex-col gap-3 List-cards">
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4 rounded-lg cursor-pointer bg-gray-200">
                        <div className="w-[90%] h-full flex items-center">
                            <h1 className='text-xl'>Task</h1>
                        </div>
                        <div className="w-[10%]">

                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4 rounded-lg cursor-pointer List-card">
                        <div className="w-[90%] h-full flex items-center gap-2">
                            <i className='bx bx-home-alt text-lg'></i>
                            <h1 className='text-lg'>Home</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center List-card-number">
                            <h1 className="px-2 rounded-full bg-gray-200">8</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4 rounded-lg cursor-pointer List-card">
                        <div className="w-[90%] h-full flex items-center gap-2">
                            <i className='bx bxs-briefcase-alt-2 text-lg'></i>
                            <h1 className='text-lg'>Work</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center List-card-number">
                            <h1 className="px-2 rounded-full bg-gray-200">16</h1>
                        </div>
                    </div>
                    <div className="w-full h-[5.5vh] flex justify-center items-center px-4 rounded-lg cursor-pointer List-card">
                        <div className="w-[90%] h-full flex items-center gap-2">
                            <i className='bx bxs-user text-lg'></i>
                            <h1 className='text-lg'>Personal</h1>
                        </div>
                        <div className="w-[10%] h-full flex justify-center items-center List-card-number">
                            <h1 className="px-2 rounded-full bg-gray-200">4</h1>
                        </div>
                    </div>
                </div>
                <button className="w-full h-[6vh] flex items-center px-4 text-start rounded-full gap-3 lg:gap-2 bg-gray-200" onClick={handleCreateList}>
                    <i className='bx bx-plus text-lg'></i>
                    Create new list
                </button>
            </div>
            {/*Card-Create*/}
            <div className='w-full h-[35%] flex flex-wrap p-2 gap-2 Card-List rounded-xl bg-white-500'>
                <div className='w-full h-[20%] flex items-center gap-1 p-1 px-1 rounded-lg bg-gray-200'>
                    <div className="w-[10%] h-full flex justify-center items-center">
                        <div className="p-2 rounded-md border cursor-pointer border-gray-500 icone">
                        </div>
                        <i className={`${selected_icone} w-auto text-[1.4rem] icone_select`}></i>
                        <div className={`${selected_colors} color_select`}></div>
                    </div>
                    <input type="text" className='w-[90%] h-full text-md bg-transparent text-black input_List' placeholder="Write list name" />
                </div>
                <div className='w-full h-[75%] flex flex-wrap rounded-lg overflow-hidden'>
                    <div className='w-full h-[30%] flex justify-between items-center'>
                        <div className='w-[48%] h-5/6 flex gap-2 items-center pl-2 rounded-lg cursor-pointer button-items text-white bg-black' onClick={(e) => {
                            Scrolle_items(1)
                            Button_Items(e.currentTarget)
                        }}>
                            <i class='bx bx-cool text-xl'></i>
                            <h1>Emoji</h1>
                        </div>
                        <div className='w-[48%] h-5/6 flex gap-2 items-center pl-2 rounded-lg cursor-pointer button-items bg-gray-200' onClick={(e) => {
                            Scrolle_items(-1)
                            Button_Items(e.currentTarget)
                        }}>
                            <i class='bx bx-palette text-xl'></i>
                            <h1>Color</h1>
                        </div>
                    </div>
                    <div className='w-full h-[70%] flex cards'>
                        {/*List-Items-1*/}
                        <div className='min-w-full flex justify-center items-center flex-wrap card-slides'>
                            <i className='bx bx-home-alt w-1/5 text-center text-2xl cursor-pointer'></i>
                            <i className='bx bxs-briefcase-alt-2 w-1/5 text-center text-2xl cursor-pointer'></i>
                            <i className='bx bxs-user w-1/5 text-center text-2xl cursor-pointer'></i>
                            <i className='bx bx-run w-1/5 text-center text-2xl cursor-pointer'></i>
                            <i className='bx bx-code-alt w-1/5 text-center text-2xl cursor-pointer'></i>

                            <i className='bx bxs-cable-car w-1/5 text-center text-2xl cursor-pointer'></i>
                            <i className='bx bxl-discord-alt w-1/5 text-center text-2xl cursor-pointer'></i>
                            <i className='bx bxs-store-alt w-1/5 text-center text-2xl cursor-pointer'></i>
                            <i className='bx bxs-plane-alt w-1/5 text-center text-2xl cursor-pointer'></i>
                            <i className='bx bx-cake w-1/5 text-center text-2xl cursor-pointer'></i>
                        </div>
                        {/*List-Items-2*/}
                        <div className='min-w-full flex justify-center flex-wrap card-slides'>
                            <div className='w-5/6 h-1/2 flex flex-wrap justify-between items-center colors'>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-red-500">

                                </div>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-blue-500">

                                </div>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-yellow-500">

                                </div>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-green-500">

                                </div>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-orange-500">

                                </div>
                            </div>

                            <div className='w-5/6 h-1/2 flex flex-wrap justify-between items-center colors'>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-black">

                                </div>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-gray-500">

                                </div>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-emerald-500">

                                </div>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-cyan-500">

                                </div>
                                <div className="p-2 rounded-md border-2 cursor-pointer border-indigo-500">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}