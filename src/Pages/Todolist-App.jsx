//Import Components
import List_Todolist from "../Components/List-TodoList"
import Note_Todolist from "../Components/Note-Todolist"

export default function Todolist_App() {
    return <>
        <section className="w-full h-screen flex justify-around items-center p-8 bg-gray-200">
            <List_Todolist/>
            <Note_Todolist/>
        </section>
    </>
}