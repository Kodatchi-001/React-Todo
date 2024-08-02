//Import Components
import ListTodoList from "../Components/List-TodoList";
import NoteTodoList from "../Components/Note-Todolist";

export default function Todolist_App() {
    return <>
        <section className="w-full lg:h-screen flex justify-around items-center flex-wrap lg:p-9 gap-3 bg-gray-200">
            <ListTodoList/>
            <NoteTodoList/>
        </section>
    </>
}