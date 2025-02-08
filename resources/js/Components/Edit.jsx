import { useState } from "react";
import { router } from "@inertiajs/react";

const Edit = ({task, setIsEditing}) => {
    const [updateTask, setUpdateTask] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (updateTask.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        try {
            router.put(
                `/task/${task.id}`,
                { task: updateTask },
                {
                    onSuccess: () => {
                        setIsEditing(false);
                    },
                    onError: (errors) => {
                        console.error("Error updating task:", errors);
                    },
                }
            );
        } catch (error) {
            console.error("Unexpected error:", error);
        }   
    };

    return (
        <form className="mb-4 font-primary w-full  " onSubmit={handleSubmit}>
            <input
                type="text"
                className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] mb-6 text-white rounded-2xl placeholder:text-gray-300"
                placeholder="Update Task"
                value={updateTask}
                maxLength={32}
                onChange={(e) => setUpdateTask(e.target.value)}
            />
            <button className="bg-fuchsia-600 hover:bg-fuchsia-500 hover:scale-105 duration-300 border-none p-4 text-white cursor-pointer rounded-2xl ml-4">
                Update Task
            </button>
        </form>
    );
};

export default Edit;
