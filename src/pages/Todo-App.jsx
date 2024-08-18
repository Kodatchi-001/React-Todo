import Cards_Tasks from "../components/Cards-Tasks";
import Header from "../components/Header";

export default function Todo_App() {
    return <>
        <section className="w-full h-screen flex flex-col bg-gray-200">
            <Header />
            <Cards_Tasks />
        </section>

    </>
}