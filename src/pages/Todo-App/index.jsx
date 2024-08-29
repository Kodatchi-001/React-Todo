import Header from "../../components/Header";
import Card_Tasks from "../Card-Tasks/index";


export default function Todo_App() {
    return <>
        <section className="w-full flex flex-col">
            <Header />
            <Card_Tasks />
        </section>

    </>
}