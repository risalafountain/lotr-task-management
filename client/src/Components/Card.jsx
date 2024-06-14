import React, { useContext, useState } from "react";
import { Context } from "../Context/ContextProvider";
import EditTaskForm from "./EditTaskForm";

export default function Card(props) {
    const { deleteTask, makeFavorite} = useContext(Context)
    const { imageUrl, title, _id } = props
    const [isEditing, setIsEditing] = useState(false)

    function handleDelete() {
        // console.log('the delete button was pressed')
        deleteTask(_id)
    }
//toggle isEditing state
    function handleToggle() {
        setIsEditing(prev => !prev)
    }
    
    function handleFavorite(){
        console.log('this is a favorite task:' + _id )
        makeFavorite(_id)
    }

    return (
        <>
        {/* if isEditing is false return card details  : return EditTaskForm*/}
            {!isEditing ?
                (<div className="card container">
                    <h4> {title} </h4>
                    <img src={imageUrl}
                        style={{ width: '150px', height: '150px' }}
                    />
                    <a>
                    <button onClick={handleToggle} > Edit </button>
                    <button onClick={handleDelete}>Delete </button>
                    <button onClick={handleFavorite}>Add  To Favorites</button>
                    </a>
                </div>) :
                (<EditTaskForm
                        card={{ title, imageUrl, _id }}
                        handleToggle={handleToggle}
                        className = 'form'
                    />)}

        </>
    )
}