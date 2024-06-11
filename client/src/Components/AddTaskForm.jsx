import React, { useContext, useState } from 'react';
import { Context } from '../Context/ContextProvider';


export default function AddTaskForm() {
    const { newTask } = useContext(Context)
    const [task, setTask] = useState({
        title: "",
        imageUrl: "",
    })

    function handleChange(e) {
        const { name, value } = e.target
        setTask(prevTask => {
            return {
                ...prevTask,
                [name]: value
            }
        })

    }
    function handleSubmit(e) {
        e.preventDefault()
        newTask(task)
        //reset the form
        setTask(prevTask => ({
            ...prevTask,
            title: '',
            imageUrl: '',
        }));
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            < div className='inputs'>
                <h4>We Must Do This...</h4>
                <input
                    name='title'
                    value={task.title}
                    onChange={handleChange}
                    placeholder='Title'
                />

                <input
                    name='imageUrl'
                    value={task.imageUrl}
                    onChange={handleChange}
                    placeholder='ImageURL'
                />
            <button>but we hates it!</button>
            </div>

        </form>
    )
}