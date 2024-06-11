import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const Context = createContext()

export default function ContextProvider(props) {
    //empty array to store data 
    const [allTasks, setAllTasks] = useState([])


    //useEffect gets the data from the api and sets the data to the cards received
    //empty dependency ensures it only runs once 
    useEffect(() => {
        axios.get('/api/tasks')
            .then(res => setAllTasks(res.data))
            .catch(err => console.log(err))
    }, [])

    //add new tasks to the faveTasks arr
    function newTask(task) {
        axios.post('/api/tasks', task)
            .then(res => setAllTasks(prev => [...prev, res.data]))
            .catch(err => console.log(err))
    }

    //edit task 
    function editTask(id, update) {
        axios.put(`/api/tasks/${id}`, update)
            .then(res => setAllTasks(prev => prev.map(task => task._id === id ? res.data : task)))
            .catch(err => console.log(err))
    }

    //update task as fave and push to faveTask arr 
    function makeFavorite(taskId) {
        //find the favorited task
        const favoritedTask = allTasks.find(task => task._id === taskId)
        //update isFave and add task to the favetasks arr
        console.log('favorited task:', favoritedTask)
        axios.put(`/api/tasks/${taskId}`, { isFavorite: true })
            .then(res => {
                console.log(res.data)
                setAllTasks(prev => {
                   return prev.map(todo => taskId === todo._id ? res.data : todo)
               })
            })
            .catch(err => console.log(err))
    }
    //delete faveTask
    function deleteFavorite(id) {
        axios.put(`/api/tasks/${id}`, {isFavorite: false})
            //filter out the deleted id and update faveTasks
            .then(res => {
                setAllTasks(prev => {
                    return prev.map(todo => id === todo._id ? res.data : todo)
                })
            }
)
            .catch(err => console.log(err))
    }
    //delete task
    function deleteTask(id) {
        axios.delete(`/api/tasks/${id}`)
            //filter out deleted id and setAllTasks
            .then(res => setAllTasks(tasks => tasks.filter(task => task._id !== id)))
            .catch(err => console.log(err))
    }
    

    return (
        //allow the children to have access to the values 
        <Context.Provider value={{ allTasks, newTask, deleteTask, editTask, makeFavorite, deleteFavorite }}>
            {props.children}
        </Context.Provider>
    )
}





