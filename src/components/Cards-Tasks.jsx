import { useState } from "react";

export default function Cards_Tasks() {
    const [input_value, setinput_value] = useState('');
    const [Edit_index, setEdit_index] = useState(null);
    const [Liste_Tasks, setListe_Tasks] = useState([]);
    const [Liste_Task_checked, setListe_Task_checked] = useState([]);
    const [viewChecked, setViewChecked] = useState(false);

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
                setListe_Task_checked(Liste_Task_checked.map((task, index) =>
                    index === Edit_index ? { ...task, Name: input_value } : task
                ))
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
        setListe_Task_checked(Liste_Task_checked.filter(task => task.id !== index));
    };

    // Sets the component to edit mode and populates input with the task name
    const Modifier = index => {
        setEdit_index(index);
        setinput_value(Liste_Tasks[index].Name);
    };

    // Toggles the checked status of a task
    const Checked = index => {
        setListe_Tasks(Liste_Tasks.map((task, i) => i === index ? { ...task, Status: !task.Status } : task));

        if (!Liste_Tasks[index].Status) {
            setListe_Task_checked([...Liste_Task_checked, { id: index, Name: Liste_Tasks[index].Name }]);
        } else {
            setListe_Task_checked(Liste_Task_checked.filter(task => task.id !== index));
        }
    };


    const render_Tasks = () => {
        const tasksToDisplay = viewChecked ? Liste_Task_checked : Liste_Tasks;

        return tasksToDisplay.length > 0 ? tasksToDisplay.map((Task, index) => (
            <div key={index} className="w-full h-[7vh] lg:h-[8vh] flex px-5 rounded-lg bg-gray-200">
                <div className="w-4/6 h-full flex items-center gap-4">
                    <input
                        type="checkbox"
                        className="p-2 cursor-pointer custom-checkbox"
                        onChange={() => Checked(index)}
                    />
                    <h1 className="text-xl">{Task.Name}</h1>
                </div>
                <div className="w-2/6 h-full flex justify-end items-center gap-1">
                    <i className="bx bxs-edit text-3xl cursor-pointer text-green-500" onClick={() => Modifier(index)}></i>
                    <i className="bx bxs-x-square text-3xl cursor-pointer text-red-500" onClick={() => Supprimer(index)}></i>
                </div>
            </div>
        )) : (
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-gray-300 text-center lg:text-start text-4xl mt-[-6vh] lg:mt-[-15vh]">{viewChecked ? "No tasks checked" : "Let's get some work done"}</h1>
            </div>
        );
    };

    return (
        <section className="w-full h-[72vh] flex justify-center p-3">
            <div className="w-full lg:w-[58%] h-full mt-[-7vh] lg:mt-[-11.6vh] rounded-xl shadow-lg flex flex-wrap lg:p-2 px-3 lg:px-5 pb-8 bg-white">
                <div className="w-full h-[15%] flex justify-between items-center">
                    <div className="w-full h-full flex justify-between gap-3 py-[14.5px]">
                        <input
                            type="text"
                            className="w-full h-full rounded-lg text-lg px-5 bg-gray-200"
                            placeholder="Create New Task"
                            value={input_value}
                            onChange={Handel_Name}
                        />
                        <button
                            className="px-10 py-2 rounded-lg text-lg text-white bg-black"
                            onClick={Create_Task}>
                            {Edit_index !== null ? 'Enregistrer' : 'Add'}
                        </button>
                    </div>
                </div>
                <div className="w-full h-[15%] gap-3 lg:gap-2 flex justify-between lg:justify-start items-center">
                    <h1
                        className={`lg:text-lg cursor-pointer w-1/2 lg:w-auto text-center lg:px-5 py-3 lg:py-2 rounded-lg ${!viewChecked ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => setViewChecked(false)}>
                        All Tasks
                    </h1>
                    <h1
                        className={`lg:text-lg cursor-pointer w-1/2 lg:w-auto text-center lg:px-5 py-3 lg:py-2 rounded-lg ${viewChecked ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => setViewChecked(true)}>
                        Tasks Checked
                    </h1>
                </div>
                <div className="w-full h-[70%] flex flex-col mt-auto gap-4">
                    {render_Tasks()}
                </div>
            </div>
        </section>
    );
}
