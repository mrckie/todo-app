import { usePage } from "@inertiajs/react";
import TodoList from "../Components/TodoList";


export default function Home() {
    const {tasks} = usePage().props;
    return (
        <>
            <TodoList tasks={tasks || []} />
        </>
    );
}
