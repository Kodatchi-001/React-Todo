//Import Components
import TodoList from "../Components/TodoList.jsx";
import Note from "../Components/Note.jsx";


export default function Todolist_App() {
    return <>
        <section className="w-full lg:h-screen flex justify-around items-center flex-wrap lg:p-9 gap-3 bg-gray-200">
            <TodoList/>
            <Note/>
        </section>
    </>
}