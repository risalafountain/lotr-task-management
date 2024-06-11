import React, { useState, useContext } from 'react';
import { Context } from '../Context/ContextProvider';

export default function EditTaskForm(props) {
    const { card, handleToggle } = props
    const { editTask } = useContext(Context)

    const [editedTask, setEditedTask] = useState({
        title: card.title,
        imageUrl: card.imageUrl,
    })


    function handleChange(e) {
        const { name, value } = e.target
        setEditedTask(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        //if clicked update with edited task data 
        editTask(card._id, editedTask)
        handleToggle()
    }
    function handleCancel() {
        //if clicked return to original state
        setEditedTask(prev => ({
            ...prev,
            title: card.title,
            imageUrl: card.imageUrl,
        }))
        handleToggle()
    }

    return (
        <form onSubmit={handleSubmit} className='container'>
            <div className='inputs'>
                <p>Editing in progress...</p>
                <input
                    name='title'
                    value={editedTask.title}
                    onChange={handleChange}
                    placeholder='Title'
                    
                />

                <input
                    name='imageUrl'
                    value={editedTask.imageUrl}
                    onChange={handleChange}
                    placeholder='ImageURL'
                />
                <button type='submit' >Save Changes</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}
