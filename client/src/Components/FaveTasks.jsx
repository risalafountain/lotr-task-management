import React, { useContext, useEffect } from 'react';
import { Context } from '../Context/ContextProvider';
import FaveCard from './FaveCard';

export default function FaveTasks(props){
    const {allTasks} = useContext(Context)

    useEffect(() => {
        //this component doesn't mount until AFTER i press the favorite tasks link on the page is this ok?
    },[])
    const filteredArr = allTasks.filter(task => task.isFavorite)

    return (
        <div className=' fave-inputs container'>
            {/* map over fave tasks arr and render a favecard */}
             {filteredArr.map(task => {
                return (
                    <FaveCard
                    key = {task._id}
                    {...task}
                    />
                    )
            })}
        </div>
    )
}

