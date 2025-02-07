import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

const TodoList = ({ tasks = [] }) => {
    return (
        <div className="container bg-gray-700 mt-20 p-8 rounded-md max-w-lg mx-auto">
            <h1 className="text-white text-3xl font-semibold text-center mb-8">To-do App</h1>
            <Form />

            <div>
                {tasks.length > 0 ? (
                    tasks.map((task) => <Todo key={task.id} task={task} />)
                ) : (
                    <p className="text-white text-center">No tasks available</p>
                )}
            </div>
        </div>
    );
};

export default TodoList;
