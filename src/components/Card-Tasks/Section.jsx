import { useEffect, useState } from "react";

export default function Section_cardtasks() {
    const [input_value, setinput_value] = useState('');
    const [Edit_index, setEdit_index] = useState(null);
    const [Liste_Tasks, setListe_Tasks] = useState([]);
    const [Liste_checked, setListe_checked] = useState([]);
    const [showTittle, setshowTittle] = useState(false)

    // Updates the input value state
    const Handel_Name = e => setinput_value(e.target.value);

    // Creates a new task or updates an existing one
    const Create_Task = () => {
        if (input_value.trim() === "") {
            return;
        } else {
            if (Edit_index !== null) {
                setListe_Tasks(Liste_Tasks.map((Task, index) =>
                    index === Edit_index ? { ...Task, Name: input_value } : Task
                ));
                setListe_checked(Liste_checked.map((Task, index) =>
                    index === Edit_index ? { ...Task, Name: input_value } : Task
                ));
                setEdit_index(null);
            } else {
                const New_Task = {
                    Name: input_value,
                    Status: false
                };
                setListe_Tasks([...Liste_Tasks, New_Task]);
            }
            setinput_value("");
        }
    };

    // Deletes a task by index
    const Supprimer = index => {
        setListe_Tasks(Liste_Tasks.filter((_, i) => i !== index));
        setListe_checked(Liste_checked.filter((_, i) => i !== index))
    };

    // Sets the component to edit mode and populates input with the task name
    const Modifier = index => {
        setEdit_index(index);
        setinput_value(Liste_Tasks[index].Name);
    };

    // Updates the status of a task (checked or unchecked)
    const change_State = index => {
        const updatedTasks = Liste_Tasks.map((task, i) =>
            i === index ? { ...task, Status: !task.Status } : task
        );
        setListe_Tasks(updatedTasks);

        // Updates the list of checked tasks
        const checkedTasks = updatedTasks.filter(task => task.Status);
        setListe_checked(checkedTasks);
    };

    // Removes a checked task by index
    const removeChecked = index => {
        setListe_checked(Liste_checked.filter((_, i) => i !== index));
    };

    // Updates the visibility of the title based on whether there are checked tasks
    useEffect(() => {
        Liste_checked.length > 0 ? setshowTittle(true) : setshowTittle(false);
    }, [Liste_checked]);

    return <>
        <section className="w-full flex justify-center px-2 py-4 lg:p-3 relative">
            <div className="w-full lg:w-5/6 xl:w-[55%] h-auto mt-[-10vh] lg:mt-[-11.6vh] lg:absolute rounded-xl shadow-lg flex flex-wrap lg:p-2 px-3 lg:px-5 pb-8 bg-white">
                <div className="w-full h-[11vh] flex justify-between items-center">
                    <div className="w-full h-full flex justify-between gap-2 lg:gap-3 py-[14.5px]">
                        <input
                            type="text"
                            className="w-full h-full rounded-lg text-lg px-5 bg-gray-200"
                            placeholder="Create New Task"
                            value={input_value}
                            onChange={Handel_Name}
                        />
                        <button
                            className="px-8 lg:px-10 py-2 rounded-lg text-lg text-white bg-black"
                            onClick={Create_Task}>
                            {Edit_index !== null ? 'Enregistrer' : 'Add'}
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-wrap gap-5">
                    <div className="w-full h-auto flex flex-wrap gap-2">
                        <div className="w-full h-[6vh] flex items-center">
                            <li className="text-xl">Tasks</li>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            {
                                Liste_Tasks.length > 0 ? Liste_Tasks.map((Task, index) => (
                                    <div key={index} className="w-full h-[8vh] flex px-5 rounded-lg bg-gray-200">
                                        <div className="w-4/6 h-full flex items-center gap-4">
                                            <input
                                                type="checkbox"
                                                className="p-2 cursor-pointer custom-checkbox"
                                                value={Task.Status}
                                                onChange={() => change_State(index)}
                                            />
                                            <h1 className="text-xl">{Task.Name}</h1>
                                        </div>
                                        <div className="w-2/6 h-full flex justify-end items-center gap-1">
                                            <i className="bx bxs-edit text-3xl cursor-pointer text-green-500" onClick={() => Modifier(index)}></i>
                                            <i className="bx bxs-x-square text-3xl cursor-pointer text-red-500" onClick={() => Supprimer(index)}></i>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="w-full h-[8vh] flex px-5 rounded-lg bg-gray-200">
                                        <div className="w-4/6 h-full flex items-center gap-4">
                                            <input type="checkbox"
                                                className="p-2 cursor-pointer custom-checkbox" />
                                            <h1 className="text-xl">Task</h1>
                                        </div>
                                        <div className="w-2/6 h-full flex justify-end items-center gap-1">
                                            <i className="bx bxs-edit text-3xl cursor-pointer text-green-500"></i>
                                            <i className="bx bxs-x-square text-3xl cursor-pointer text-red-500"></i>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-wrap gap-2">
                        <div className={`w-full h-[6vh] flex items-center ${showTittle ? 'flex' : 'hidden'}`}>
                            <li className="text-xl">Tasks Checked</li>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            {
                                Liste_checked.map((Task_checkd, i) => (
                                    <div key={i} className="w-full h-[7vh] lg:h-[8vh] flex px-5 rounded-lg bg-gray-200">
                                        <div className="w-4/6 h-full flex items-center gap-4">
                                            <input
                                                type="checkbox"
                                                className="p-2 cursor-pointer custom-checkbox-2 bg-black"
                                                value={Task_checkd.Status}
                                                onChange={() => removeChecked(i)}
                                            />
                                            <h1 className="text-xl">{Task_checkd.Name}</h1>
                                        </div>
                                        <div className="w-2/6 h-full flex justify-end items-center gap-1">
                                            <i className="bx bxs-edit text-3xl cursor-pointer text-green-500" onClick={() => Modifier(i)}></i>
                                            <i className="bx bxs-x-square text-3xl cursor-pointer text-red-500" onClick={() => Supprimer(i)}></i>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
