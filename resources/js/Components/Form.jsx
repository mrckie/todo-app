import { useState } from "react";
import { router } from "@inertiajs/react";

const Form = () => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        try {
            router.post(
                "/task",
                { task },
                {
                    onSuccess: () => {
                        setTask("");
                    },
                    onError: (errors) => {
                        console.error("Error submitting task:", errors);
                    },
                }
            );
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return (
        
        <form className="mb-4 flex justify-between" onSubmit={handleSubmit}>
            <input
                type="text"
                className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] mb-6 text-white rounded-2xl placeholder:text-gray-400 focus:border-white "
                placeholder="What do you want to do today?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="bg-fuchsia-600 hover:bg-fuchsia-500 hover:scale-105 duration-300 border-none h-14 p-4 text-white cursor-pointer rounded-2xl">
                Add Task
            </button>
        </form>
    );
};

export default Form;
