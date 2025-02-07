<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{

    public function index()
    {
        $task = Task::all();

        return Inertia::render('Home', ['tasks' => $task]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'task' => 'required|string|max:255'
        ]);

        Task::create(['task' => $request->task]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'task' => 'required|string|max:255',
        ]);

        $task = Task::findOrFail($id);
        $task->update(['task' => $request->task]);
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
    }
}
