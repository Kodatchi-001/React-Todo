import React, { useState } from 'react';
import { displayDate } from "../Utils/Date";
import { Create_Note } from "../Utils/Create-Note";
// Import Material-UI components
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Assure-toi que Material-UI est installé
// npm install @mui/material @emotion/react @emotion/styled

// Vérifie la version installée de Material-UI
// npm list @mui/material

export default function Note() {
    const [selectValue, setSelectValue] = useState('');

    const handleChange = (event) => {
        setSelectValue(event.target.value);
    };
    return <>
        <div className="w-full lg:w-[70%] h-full px-3 lg:px-7 lg:pt-7 flex justify-center items-center">
            <div className="w-full lg:w-[90%] lg:h-full flex lg:items-end flex-wrap gap-5 lg:gap-0 relative">
                <div className="w-full h-[15%] flex justify-between">
                    {/*Date*/}
                    <div className="w-4/5 h-4/6 flex justify-center flex-col gap-1">
                        <h1 className="text-3xl font-bold">Good Morning, Sullivan!</h1>
                        <h1 className="text-xl text-gray-500">{displayDate()}</h1>
                    </div>
                </div>
                {/*Tasks*/}
                <div className="w-full lg:h-[75%] flex flex-col lg:mt-auto gap-3 Tasks">
                    <div className="w-full h-[7vh] pl-3 pr-2 py-2 flex items-center flex-wrap rounded-lg gap-5 overflow-hidden cursor-pointer bg-white Note">
                        <div className="w-full h-full flex items-center gap-3">
                            <div className="p-2 rounded-md border cursor-pointer border-gray-400">

                            </div>
                            <h1 className="text-lg">
                                Task
                            </h1>
                            <div className="w-[20%] h-full flex justify-end items-center ml-auto gap-3">
                                <h1>List</h1>
                                <i class='bx bx-dots-vertical text-2xl cursor-pointer rounded-md bg-gray-200'></i>
                            </div>
                        </div>
                        <div className="w-full h-full flex pl-8">
                            <p className="text-sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
                                animi numquam impedit laudantium.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[10%]">

                </div>
                <div className="w-full h-[55%] flex justify-between items-end flex-wrap gap-2 lg:absolute">
                    {/*Card-Create*/}
                    <div className="w-full lg:w-1/2 h-[40vh] lg:h-[80%] flex flex-wrap rounded-xl p-2 gap-1 bg-white Card-Create">
                        <div className="w-full h-[35%] lg:h-[33%] flex flex-col gap-2">
                            <div className="w-full h-[45%] flex items-center p-1 px-2 rounded-lg bg-gray-200">
                                <input type="text" className="w-full h-full bg-transparent text-black input_task" placeholder="Create New Task" />
                            </div>
                            <div className="w-full h-1/2 lg:h-[45%] flex items-center p-1 rounded-lg cursor-pointer bg-gray-200">
                                <Select className="w-full h-full select_task" value={selectValue} onChange={handleChange} displayEmpty>
                                    <MenuItem value="" disabled>Select a list</MenuItem>
                                    <MenuItem value="Home" className="flex"><i className='bx bx-home-alt mr-2'></i>Home</MenuItem>
                                    <MenuItem value="Work" className="flex"><i className='bx bxs-briefcase-alt-2 mr-2'></i>Work</MenuItem>
                                    <MenuItem value="Personnel" className="flex"><i className='bx bxs-user mr-2'></i>Personnel</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div className="w-full h-[65%] rounded-lg overflow-hidden bg-gray-200">
                            <textarea className="w-full h-full bg-transparent resize-none p-2" placeholder="Add Note"></textarea>
                        </div>
                    </div>
                    <div className="w-full h-[20%] flex justify-between items-center">
                        {/*Button-Create*/}
                        <button className="w-4/5 sm:w-[45%] lg:w-1/2 h-full lg:h-[80%] flex items-center rounded-full gap-3 lg:gap-2 px-6 py-2 lg:py-0 text-white bg-black"
                            onClick={() => {
                                Create_Note()
                            }}>
                            <i class='bx bx-plus text-lg'></i>
                            Create new task
                        </button>
                        {/*Button-Check*/}
                        <button className="px-3 py-2 rounded-full shadow-xl bg-white">
                            <i class='bx bx-check text-2xl'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}