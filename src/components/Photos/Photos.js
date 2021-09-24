import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() =>
        fetch('http://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPhotos(data))

        , [])

    return (
        <div>
            <h1>Hello from Photos: {photos.length}</h1>
            {
                photos.map(photo=><Photo title={photo.title} id={photo.id}></Photo>)
            }
        </div>
    );
};

export default Photos;