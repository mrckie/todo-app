import { router } from "@inertiajs/react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import Edit from "./Edit";
import { useState } from "react";

const Todo = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this task?")) {
            router.delete(`/task/${task.id}`, {
                onError: (errors) => {
                    console.error("Error deleting task:", errors);
                },
            });
        }
    };

    const handleUpdate = () => {
        setIsEditing(true);
    };

    const handleCompleted = () => {
        setIsCompleted(!isCompleted);
    };

    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Date(dateString).toLocaleString(undefined, options);
    };

    return (
        <>
            {isEditing ? (
                <Edit task={task} setIsEditing={setIsEditing} />
            ) : (
                <div className="flex justify-between bg-fuchsia-600 text-white py-4 px-4 rounded-md mb-4 cursor-pointer">
                    <div className="flex items-center">
                        {!isCompleted ? (
                            <MdCheckBoxOutlineBlank
                                className="text-xl "
                                onClick={handleCompleted}
                            />
                        ) : (
                            <IoIosCheckbox
                                className="text-xl "
                                onClick={handleCompleted}
                            />
                        )}
                    </div>

                    <div className="flex flex-col items-center">
                        <p className={`${isCompleted ? "line-through" : ""}`}>
                            {task.task}
                        </p>
                        <small className="text-gray-300 text-sxs pt-1">
                            {formatDate(task.created_at)}
                        </small>
                    </div>

                    <div className="flex items-center gap-x-4">
                        <AiFillEdit
                            className="text-xl hover:text-blue-500"
                            onClick={handleUpdate}
                        />
                        <BsFillTrashFill
                            className="text-xl hover:text-red-500"
                            onClick={handleDelete}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Todo;
