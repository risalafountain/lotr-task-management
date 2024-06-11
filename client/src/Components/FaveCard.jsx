import React, { useContext, useState } from 'react';
import { Context } from '../Context/ContextProvider';

export default function FaveCard(props) {
    const { deleteFavorite } = useContext(Context)
    const { title, imageUrl, _id } = props



    function handleDelete() {
        console.log('DEL:' + _id)
        deleteFavorite(_id)
    }

    return (
        <div className='card container'>
            <h4>Title: {title}</h4>
            <img src={imageUrl}
                style={{ width: '150px', height: '150px' }}
            />
            <button onClick={handleDelete} className='fave-button'>Unfavorite</button>
        </div>
    )
}

